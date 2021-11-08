const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Write something...\n');
stdin.on('data', data => {
  const dataString = data.toString();
  dataString.trim() === 'exit' ? process.exit() : output.write(data);
});

process.on('exit', () => stdout.write('Bye'));
process.on('SIGINT', () => process.exit());