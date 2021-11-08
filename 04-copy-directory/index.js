const fspromise = require('fs/promises');
const path = require('path');
const pathStartFolder = path.join(__dirname, 'files');
const pathFinalFolder = path.join(__dirname, 'files-copy');

async function copyFiles() {
    await fspromise.mkdir(pathFinalFolder, { recursive: true });
    const files = await fspromise.readdir(pathStartFolder);
    files.forEach((el) => { fspromise.copyFile(path.join(pathStartFolder, el), path.join(pathFinalFolder, el)) });
    const copyAllFiles = await fspromise.readdir(pathFinalFolder);
    copyAllFiles.forEach((el) => {
    if(!files.includes(el)) fspromise.rm(path.join(pathFinalFolder, el));
    console.log('Copied!');
});
}

copyFiles();