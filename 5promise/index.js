const fsPromise = require('fs').promises;
// import * as fsPromise from 'node:fs/promises'

const path = require('path');

//we have the process mode The process object provides information about,
// and control over, the current Node.js process.

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception: ${err} `);
  process.exit(1);
});


const filesOps = async() => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
filesOps();

//2:write the file
const filedt = async() => {
    try {
       await fsPromise.writeFile(path.join(__dirname, "files", "lorem.txt"),"I have also been written ", );
        console.log("successful");
    } catch (error) {
        console.log(error);
    }
};
filedt();
// 2. append data
// const filedt2 = async() => {
//     try {
//           const datas1 = await fsPromise.appendFiles(path.join(__dirname, "files", "lorem.txt"),"\n\n hello how are you",)
//           console.log('write was successful')
//     }catch(error) {
//             console.log(error)
//           }
//  }
//  filedt2()


const filedt2 = async () => {
    try {
        const filePath = path.join(__dirname, "files", "lorem.txt");
        await fsPromise.appendFile(filePath, "\n\n hello how are you");
        console.log('Write was successful');
    } catch (error) {
        console.log(error);
    }
};

filedt2();


const rename = async () => {
  try {
      const oldPath = path.join(__dirname, "files", "lorem.txt");
      const newPath = path.join(__dirname, "files", "renamed.txt");
      await fsPromise.rename(oldPath, newPath);
      console.log('Renamed successfully');
  } catch (error) {
      console.log(error);
  }
};

rename();

//to solve this we need using promises
// 1. readFile
//2:write the file
// 2. append data 
// 3: rename file
// try - catch