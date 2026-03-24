const stationName = "tscherenkow-effekt";
const streamUrl = `https://stream.laut.fm/${stationName}`;

let audio = new Audio();
audio.preload = "none";
audio.volume = 0.8;

let isPlaying = false;
let lastTrack = null;
let lastWsUpdate = 0;

const playBtn = document.getElementById("play-btn");

// PLAY / STOP
playBtn.addEventListener("click", () => {
    if (!isPlaying) {
        audio.src = streamUrl;
        audio.play().then(() => {
            isPlaying = true;
            playBtn.innerText = "STOP";
            playBtn.style.backgroundColor = "#ff4444";
        });
    } else {
        audio.pause();
        isPlaying = false;
        playBtn.innerText = "PLAY";
        playBtn.style.backgroundColor = "#0099ff";
    }
});

// Lautstärke
document.getElementById("volume").addEventListener("input", (e) => {
    audio.volume = e.target.value / 100;
});

// --- LISTENER ONLY ---
async function updateListenersOnly() {
    try {
        const lRes = await fetch(`https://api.laut.fm/station/${stationName}/listeners`);
        const listenerText = await lRes.text();
        const listenerCount = parseInt(listenerText.trim(), 10);
        document.getElementById("listener-count").innerText =
            isNaN(listenerCount) ? "0" : listenerCount;
    } catch (err) {
        console.error("Listener Fehler:", err);
    }
}

// --- API FALLBACK ---
async function updateInfo() {

    // Wenn WebSocket in den letzten 10 Sekunden aktiv war → API NICHT überschreiben
    if (Date.now() - lastWsUpdate < 10000) {
        updateListenersOnly();
        return;
    }

    try {
        const res = await fetch(`https://api.laut.fm/station/${stationName}`);
        const data = await res.json();

        const current = data.current_song;
        if (current?.title) {
            document.getElementById("track").innerText = current.title;
            document.getElementById("artist").innerText = current.artist?.name || "—";

            if (current.image_640) {
                document.getElementById("cover").src = current.image_640;
            }
        }

        const last = Array.isArray(data.last_played) ? data.last_played[0] : null;
        if (last?.title) {
            document.getElementById("last-track").innerText = last.title;
            document.getElementById("last-artist").innerText = last.artist?.name || "—";
        }

        const next = data.next_song;
        if (next?.title) {
            document.getElementById("next-track").innerText = next.title;
            document.getElementById("next-artist").innerText = next.artist?.name || "—";
        }

        updateListenersOnly();

    } catch (err) {
        console.error("API Fehler:", err);
    }
}

// --- WEBSOCKET LIVE TRACKS ---
function startWebSocket() {
    const ws = new WebSocket("wss://api.laut.fm/song_change.ws.json");

    ws.onopen = () => console.log("WebSocket verbunden");

    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);

            if (data.station !== stationName) return;
            if (data.type !== "song") return;

            updateFromWebsocket(data);

        } catch (err) {
            console.error("WS JSON Fehler:", err);
        }
    };

    ws.onerror = (err) => console.error("WebSocket Fehler:", err);

    ws.onclose = () => {
        console.warn("WebSocket getrennt – reconnect in 5s");
        setTimeout(startWebSocket, 5000);
    };
}

function updateFromWebsocket(song) {
    lastWsUpdate = Date.now();

    document.getElementById("track").innerText = song.title || "—";
    document.getElementById("artist").innerText = song.artist?.name || "—";

    if (song.image) {
        document.getElementById("cover").src = song.image;
    }

    if (lastTrack) {
        document.getElementById("last-track").innerText = lastTrack.title || "—";
        document.getElementById("last-artist").innerText = lastTrack.artist?.name || "—";
    }

    lastTrack = song;

    document.getElementById("next-track").innerText = song.next_artists?.[0] || "—";
    document.getElementById("next-artist").innerText = "—";
}

// Start
updateInfo();
setInterval(updateInfo, 20000);
startWebSocket();
