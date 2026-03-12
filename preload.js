const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    closeWindow: () => ipcRenderer.send('window-close'),
    minimizeWindow: () => ipcRenderer.send('window-minimize')
});

// Falls du Buttons in der HTML dafür nutzt, müsstest du
// in der main.js noch ipcMain.on('window-close', ...) einbauen.
