'use strict'

const { app, BrowserWindow, Menu } = require('electron')
const debug = require('electron-debug')
const path  = require('path')
var MENU = null;

if (process.env.NODE_ENV === 'development') { 
	debug({showDevTools: true}) 
	require('electron-reload')(__dirname, { 
		electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
	})

}

const isMac = process.platform === 'darwin'

if (isMac)
{
	MENU = [
		{
			label: app.menu,
			submenu: [
				{ role: 'about' },
				{ type: 'separator' },
				{ role: 'services' },
				{ type: 'separator' },
				{ role: 'hide' },
				{ role: 'hideothers' },
				{ role: 'unhide' },
				{ type: 'separator' },
				{ role: 'quit' }
			]
		},
		{
			label: 'File',
			submenu: [
				{
					label: 'New'
				},
				{
					label: 'Open'
				}
			]
		}
	]
}
else // windows o linux
{
	MENU = [
		{
			label: 'File',
			submenu: [
				{
					label: 'New'
				},
				{
					label: 'Open'
				}
			]
		}
	]
}

app.on('ready', () => {
	var win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
		center: true,
		width: 1000,
		height: 800,
		//maximizable: false,
		//backgroundColor: '#27696D',
		//maxWidth: 600,
		show: false
	})

	win.loadURL(`file://${__dirname}/views/main.html`)
	//win.toggleDevTools();

	//client.create(win);

	win.once('ready-to-show', () => {
		win.show()
	})

	win.on('move', () => {
		//var position = win.getPosition()

		//console.log(`Position: ${position}`)
	})

	win.on('closed', () => {
		win = null
		app.quit()
	})

	const menu = Menu.buildFromTemplate(MENU)
	Menu.setApplicationMenu(menu)
})

app.on('before-quit', () => {
	console.log('Saliendo...')
})
