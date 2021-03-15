import { app, BrowserWindow, session } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;
let onlineStatusWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  if (process.env.NODE_ENV === `development`) {
    mainWindow.loadURL(`http://localhost:4000`);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, `index.html`),
        protocol: `file:`,
        slashes: true,
      }),
    );
  }

  mainWindow.on(`closed`, () => {
    mainWindow = null;
  });
}

const reactDevToolsPath = path.join(
  `C:Users/79514AppDataLocalGoogleChromeUser DataDefaultExtensionslmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0`,
);

app.whenReady().then(async () => {
  // await session.defaultSession.loadExtension(reactDevToolsPath);
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
  onlineStatusWindow.loadURL(`file://${__dirname}/main.ts`);
});

app.on(`ready`, createWindow);
app.allowRendererProcessReuse = true;
