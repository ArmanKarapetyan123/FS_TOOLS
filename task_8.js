import fs from 'fs';

const filePath = "./file.txt";
fs.writeFile(filePath,"Welcome Tutor!!!", "utf-8", (err) => {
    if(err){
        console.log("File cant be written")
    }else{
        console.log("Writting was done successfully")
    }
});

fs.chmod(filePath,0o400,(err) => {
    if(err){
        console.log("File cant be read")
    }else{
        console.log("File can be read")
    }
})

fs.writeFile(filePath,"Welcome my dear!!!", "utf-8", (err) => {
    if(err){
        console.log("File cant be written")
    }else{
        console.log("Writting was done successfully")
    }
});

fs.access(filePath,fs.constants.R_OK , (err) => {
    if(err){
        console.log("read  access is off")
    }else{
        console.log("read  access is on")
    }
})



fs.stat(filePath, { bigint: false },(err, data)=> {
    // data.size = 42;
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
});




