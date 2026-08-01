import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const logFile = path.resolve('chrome_debug.log');

if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

console.log('Launching Chrome to capture console logs...');
const chromeProcess = exec(`"${chromePath}" --headless --disable-gpu --enable-logging --log-file="${logFile}" http://localhost:5173/`);

setTimeout(() => {
  console.log('Terminating Chrome...');
  chromeProcess.kill();
  exec('taskkill /F /IM chrome.exe', () => {
    setTimeout(() => {
      if (fs.existsSync(logFile)) {
        console.log('--- CHROME LOGS ---');
        const logs = fs.readFileSync(logFile, 'utf8');
        console.log(logs);
      } else {
        console.log('No log file was created.');
      }
      process.exit(0);
    }, 1000);
  });
}, 12000);
