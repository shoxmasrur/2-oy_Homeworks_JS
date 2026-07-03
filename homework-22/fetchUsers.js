import http from "http";
import fs, { existsSync } from "fs";
import path from "path";

const urlUsers = "http://jsonplaceholder.typicode.com/users";
const pathForWrite= path.join(process.cwd(), "users.json");
const PORT = 3000;

async function getData(){
    if(existsSync(pathForWrite)) return ;
    
    const response =  await fetch(urlUsers);
    const users  = await response.json();
    const usersText = JSON.stringify(users, null,2);
    fs.writeFileSync(pathForWrite, usersText, "utf-8");
}

    function readUsers(){
        const UserdateJSONda = fs.readFileSync(pathForWrite, "utf-8")
        return JSON.parse(UserdateJSONda);
    }

    function sendData(res, statusCode, data){
        res.writeHead(statusCode, {"Content-Type":"application/json"});
        res.end(JSON.stringify(data,null, 2))
    }



const server = http.createServer((req,res)=>{
    if(req.method!=="GET"){
        return sendData(res, 404, {message:"Route topilmadi"});
    }
    const parseUrl = new URL(req.url,`http://localhost:${PORT}`);
    const pathname = parseUrl.pathname
    const parts = pathname.split("/").filter(Boolean);

    if(parts.length===1 && parts[0]==="users"){
        let users = readUsers();
        return sendData(res, 200, users);

        
    }
    return sendData(res,404, {message:"Route topilmadi"})
});


(async ()=>{
    try{
        await getData()
        server.listen(PORT, ()=>{
            console.log('Server ishlamoqda')
        })
    }catch(err){
        console.error("xatolik yuz berdi:", err)
    }
})();





