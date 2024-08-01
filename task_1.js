import fs from 'fs';

const fileData = "Hello, World!"

try{
    fs.writeFileSync('./example.txt', fileData , 'utf-8', 'w');
    fs.appendFileSync('./example.txt', " This is Node.js FS module.", "utf-8");
    const data = fs.readFileSync('./example.txt', "utf-8");
    console.log(`--- 1)${data}`);
}catch(err){
    console.log(err)
}