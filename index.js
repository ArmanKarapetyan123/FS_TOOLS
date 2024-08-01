import fs from 'fs';


//  1)
const fileData = "Hello, World!"

try{
    fs.writeFileSync('./example.txt', fileData , 'utf-8', 'w');
    fs.appendFileSync('./example.txt', " This is Node.js FS module.", "utf-8");
    const data = fs.readFileSync('./example.txt', "utf-8");
    console.log(`--- 1)${data}`);
}catch(err){
    console.log(err)
}

    try {
         fs.writeFile('./example.txt', fileData , 'utf-8', (err) => {
            console.log(err);
         } );
         fs.appendFile('./example.txt', " This is Node.js FS module.", "utf-8", (err) => {
            console.log(err);
         });
        const data = fs.readFile('./example.txt', "utf-8", (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(`--- 1)${data}`);
         });
        console.log(`--- 1)${data}`)
    }catch(err){
        console.log(err);
    }



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






