import fs from 'fs';

//  2)

// list file in the folder

function getFileList(){
    console.log("listing files...");
    fs.readdirSync("testDir").forEach((file) => {
        console.log(file);
    })
}

try{
    fs.mkdirSync("./testDir");
    console.log(' --2) Directory created successfully');

    const readItem = fs.readdirSync('./testDir');
    fs.writeFileSync('./testDir/testFile.txt', "I wrote some text here");
    getFileList();

    fs.renameSync('./testDir/testFile.txt', './testDir/renamedFile.txt');
    getFileList();

    fs.unlinkSync('./testDir/renamedFile.txt');
    console.log('renamedFile is deleted');

    fs.rmdirSync('./testDir');
    console.log('testDir is deleted');

}catch(err){
    console.log(err);
}