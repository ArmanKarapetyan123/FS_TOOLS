import fs from 'fs';
const filePath = "./error.text"
const anotherPath = "./another.text"


fs.writeFileSync(filePath," here is error!" )
try {
    const filedata = fs.readFileSync(anotherPath, "utf8")
    console.log(` The data is ${filedata}`)
}catch (err) {
    if(err.code === "ENOENT"){
        console.log("File not found")
    }else{
        throw err.message;
    }
}