//Electron initialisation
const { app, BrowserWindow, ipcMain } = require("electron")
const path = require('path')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "Lang manager",
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(path.join(__dirname, 'index.html'))
}

app.whenReady().then(() => {
    createWindow() //Create the window

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit() //Close the window
})