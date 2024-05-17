const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

// const __dirname = process.env.PWD

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        menuBarVisibility: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    console.log(__dirname)
    // mainWindow.loadURL('http://localhost:3000')
    mainWindow.loadFile('src/web/index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('get_all_notes', () => {
        return `{"notes":${fs.readFileSync('~/.electron-notes/notes.json')}}`
    })
    ipcMain.on('save_notes_in_file', (event, notes) => {
        fs.writeFileSync('~/.electron-notes/notes.json', notes.toString())
    })
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
