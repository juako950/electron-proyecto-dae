const { app, BrowserWindow } = require('electron')
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile(path.join(__dirname,'view' ,'login.html'))
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

const { ipcMain } = require('electron');

ipcMain.on('login-success', (event) => {
    const win = BrowserWindow.getFocusedWindow();
    win.loadFile('./view/index.html'); // 👈 Cambia a index.html
});
