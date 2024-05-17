const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld('api', {
    get_all_notes: () => ipcRenderer.invoke('get_all_notes'),
    save_notes_in_file: (notes) => ipcRenderer.send('save_notes_in_file', notes)
})