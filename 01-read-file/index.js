const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const fileStream = fs.createReadStream(filePath, 'utf-8');

fileStream.on('data', (chunk) => console.log(chunk));