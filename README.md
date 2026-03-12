# ☢️ Radio Tscherenkow – Desktop Player

[DE] Ein minimalistischer Desktop-Player für den Radio Tscherenkow Stream auf laut.fm, gebaut mit Electron.
[EN] A minimalist desktop player for the Radio Tscherenkow stream on laut.fm, built with Electron.

---

## 🇩🇪 Deutsch

### Features
* **Live-Updates:** Anzeige von aktuellem Song, Artist und Cover via WebSocket.
* **History & Vorschau:** Zuletzt gespielte und kommende Tracks auf einen Blick.
* **Hörer-Zähler:** Echtzeit-Anzeige der aktuellen Zuhörerzahl.
* **Design:** Moderner Neon-Glow-Look (Cyan/Blau).

### Installation & Start (Entwickler)
1. Repository klonen: `git clone https://github.com`
2. Abhängigkeiten installieren: `npm install`
3. App starten: `npm start`
Da wir keine vorkompilierten .exe-Dateien hosten (um Sicherheitsrisiken zu vermeiden und Aktualität zu garantieren), kannst du dir deine eigene Version in 2 Minuten selbst erstellen:
4. Portable .exe erstellen: `npm run build`

### ⚠️ Wichtige Fehlerbehebung
Falls die `.exe` auf einem Computer nicht startet ("Anwendung konnte nicht gestartet werden" oder "DLL fehlt"), liegt das an fehlenden System-Dateien. 
**Lösung:** Installiere die aktuellsten **Microsoft Visual C++ Redistributable** Pakete:
👉 [Download Visual C++ x64](https://learn.microsoft.com/de-de/cpp/windows/latest-supported-vc-redist?view=msvc-170)

---

## 🇺🇸 English

### Features
* **Live Updates:** Displays current song, artist, and cover art via WebSocket.
* **History & Preview:** Shows recently played and upcoming tracks.
* **Listener Count:** Real-time display of current listeners.
* **Design:** Modern Neon-Glow aesthetic (Cyan/Blue).

### Installation & Development
1. Clone repository: `git clone https://github.com`
2. Install dependencies: `npm install`
3. Run app: `npm start`
Since we do not host pre-compiled .exe files (to avoid security risks and ensure updates), you can build your own version in 2 minutes:
4. Build portable .exe: `npm run build`

### ⚠️ Troubleshooting
If the `.exe` fails to launch on a computer (showing "application could not be started" or "missing DLL"), it is likely due to missing system components.
**Solution:** Install the latest **Microsoft Visual C++ Redistributable** packages:
👉 [Download Visual C++ x64](https://learn.microsoft.com/de-de/cpp/windows/latest-supported-vc-redist?view=msvc-170)

---

### 🛠️ Tech Stack
* **Framework:** Electron (v30+)
* **API:** laut.fm (Stream & Metadata)
* **Realtime:** WebSockets
* **Styling:** CSS3 Neon-Effects

**Author:** Daniel | Radio Tscherenkow 🎧

## 🎨 Eigene Station anpassen / Customization

[DE] Du kannst diesen Player gerne als Vorlage für dein eigenes laut.fm-Radio nutzen!
[EN] Feel free to use this player as a template for your own laut.fm station!

1. **Station ändern:** Öffne die `renderer.js` und ändere in der ersten Zeile:
   `const stationName = "dein-sender-name";`
2. **Design anpassen:** Ändere die Farben in der `style.css` (Suche nach `box-shadow` und `color`).
3. **Icons tauschen:** Ersetze `icon.ico` und `default-cover.jpg` durch deine eigenen Grafiken.

---

## 📄 Lizenz / License

[DE] Dieses Projekt steht unter der **MIT-Lizenz**. Das bedeutet: Du darfst den Code kopieren, verändern und für dein eigenes Radio nutzen (auch kommerziell). Über eine Namensnennung (Credit) würde ich mich freuen!
[EN] This project is licensed under the **MIT License**. You are free to copy, modify, and use the code for your own radio station. Credits are appreciated!

## 🍺 Bierspende / Support
[DE] Hat dir der Player geholfen? Ich freue mich über ein kühles Blondes!  
[EN] Did this player help you? I'd appreciate a cold beer!

👉 **[Jetzt ein Bier spendieren via PayPal](https://paypal.me/radioapp)**
