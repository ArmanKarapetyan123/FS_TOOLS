// import * as fs from 'fs';
import fs from 'fs';

const fileData = "Hello, World!"


try {
    fs.writeFile('./anotherExample.txt', fileData , 'utf-8', () => {} );
    fs.appendFile('./anotherExample.txt', " ... ", "utf-8", () => {});
   const readData = fs.readFile('./anotherExample.txt', "utf-8", (err, data) => {
       if(err){
           console.log(err);
           return;
       }

       console.log(` 2)${data}`);
    });
    // cause this is done asynchronously it prints undefined
   console.log(`--- 2)${readData}`)
}catch(err){
   console.log(err);
}

try{
    fs.writeFileSync('./example.txt', fileData , 'utf-8', 'w');
    fs.appendFileSync('./example.txt', " This is Node.js FS module.", "utf-8");
    const data = fs.readFileSync('./example.txt', "utf-8");
    console.log(`--- 1)${data}`);
}catch(err){
    console.log(err)
}