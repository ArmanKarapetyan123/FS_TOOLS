import fs from 'fs';

const jsonFile = `{
    "users" : [
        {
            "name": "John",
            "age": 36
        },
        {
            "name": "Doe",
            "age": 24
        },
        {
            "name": "Monaliza",
            "age": 521
        }
    ]
}`;

const newUser = {
    name: "Kaven",
    age: 19
}

const buffer = Buffer.from(jsonFile, "utf8").toString();
console.log(buffer.toString());

try{
    fs.writeFileSync('./data.json',buffer,"utf-8");

    const data = fs.readFileSync("data.json", "utf8");
    const fileData = JSON.parse(data);
    fileData.users.push(newUser);

    console.log(fileData);

    fs.writeFileSync( './data.json',JSON.stringify(fileData),"utf-8")

}catch(err){
    console.log(`this is an error ${err.message}`)
}
