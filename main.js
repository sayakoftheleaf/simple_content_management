
// This is basically creating the application/rendering it in
// electron.
// NOTE: DO NOT ADD FUNCTIONALITY COMPONENTS HERE
// TODO: require functionality components
const { app, BrowserWindow } = require('electron')

// Global reference of the window object, to prevent window closing
// during JS garbage collection
let win

function createWindow () {
  // Custom settings for the new Window
  let customOptionObject = {
    center: true,
    minWidth: 800,
    minHeight: 600,
    title: 'Simple-Content-Management',
    // backGroundColor: #FFF, // this is default TODO: Change
    defaultFontFamily: 'fantasy'
  }

  // creating the new window
  win = new BrowserWindow(customOptionObject)

  win.loadFile('index.html')

  win.webContents.openDevTools()

  win.on('closed', () => {
    // TODO: consider whether you want to support multiple windows
    // If yes, this needs some more research
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active unitl the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // For macOS, re-create a window in the app when the dock icon
  // is clicked and there are no other windows open
  if (win === null) {
    createWindow()
  }
})
