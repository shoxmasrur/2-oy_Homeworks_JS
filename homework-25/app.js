import http from "http";
import { getData, setData} from "./functions.js";

const PORT = 3000;
const server = http.createServer( async (req,res)=>{
    res.setHeader("Content-Type", "application/json");
    try{
        const data = await getData()
        if(req.method==="GET" && req.url==="/products"){
            res.writeHead(200).end(JSON.stringify(data))
        }else if(req.method==="POST" && req.url ==="/products"){
            let body="";
            req.on("data", (chunk)=>{
                body+=chunk;
               
            })
            req.on("end", async ()=>{
                const newData = {id:data.at(-1).id+1, ...JSON.parse(body)}
                data.push(newData)
                await setData(data)
                res.end("malumot qoshildi")
            })
        }else if(req.method==="PUT" && req.url.startsWith("/products")){
            const newID =Number(req.url.split("/")[2] )
            let body="";
            req.on("data", (chunk)=>{
                body+=chunk;
            })
            req.on("end", async()=>{
               const newData = data.map(item=> item.id===newID ? item={...item, ...JSON.parse(body)} : item)
               console.log(newData)
                await setData(newData)
                res.end("muvaffaqiyatli o'zgartirildi")
            })
        }else if (req.method==="DELETE" && req.url.startsWith("/products")){
            const idNum = Number( req.url.split("/")[2]);
            const newData = data.filter(item=>item.id!==idNum)
            await setData(newData)
            res.end(`id ${idNum}  dagi foydalanuvchi malumotlari o'chirildi!`)
          
            
        }




    }catch(err){
        console.log("Xatolik", err)

    }
})

server.listen(PORT, ()=>{
    console.log("server is running in", PORT)
})