const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, (error, files) => {
  if(error) console.log(error.message);
  files.forEach(el => {
    fs.stat((path.join(filePath, el)), (error, data) => {
      if(error) console.log(error.message);
      else if(data.isFile()) {
        const fileSize = data.size / 1024;
        const extName = path.extname(el);
        const fileName = path.basename(el, extName);
        console.log(`${fileName} - ${extName.replace('.', '')} - ${Math.round(fileSize.toFixed(3))}kb`);
      }
    });
  });
});