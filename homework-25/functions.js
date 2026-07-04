import fs from "fs/promises";
import path from "path"

const pathforJson  = path.join(process.cwd(), "./products.json");

export async function getData(){
    try{
        const data = await fs.readFile(pathforJson, "utf-8")
        return JSON.parse(data)
    }catch(err){
        return `MALUMOT OLISHDA XATOLIK ${err}`
    }
}

export async function setData(products){
    try{
        await fs.writeFile(pathforJson, JSON.stringify(products,null,2), "utf-8")

    }catch(err){
        console.log("MALUMOTNI YUKLASHDA XATOLIK", err)
    }
}





  

