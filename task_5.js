import fs from 'fs';

const dirPath = "./watchDir";
const filePath = "./watchDir/text.txt";
fs.mkdirSync(dirPath, {recursive:true})

const watcher = fs.watch(dirPath);


const addChanges = (data) => {
    console.log('data added:');
    fs.appendFileSync(filePath, data);
} 

const stopWatching = () => {
    console.log('File watcher stopped');
    watcher.close();
  }



    console.log(`Created directory: ${dirPath}`)

    fs.writeFileSync('./watchDir/text.txt', "simple text");

    watcher.on("change", (eventType, fileName) => {
        console.log(`changed ${dirPath} and ${fileName} with ${eventType} `);
    })

    addChanges(" file is changed");

    fs.unlinkSync('./watchDir/text.txt');
    stopWatching();
