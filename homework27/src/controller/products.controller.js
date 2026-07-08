import Product from "../schema/products.schema.js"


export async function createData(req, res){
    const {name}= req.body
    const existsName = await Product.findOne({name})

    if(existsName){
       return res.status(409).json({message:"product is already exists"})
    }

    const product = await  Product.create(req.body)
    return res.status(201).json(product)

}


export async function updateData(req,res){
    const product=  await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(product)
}


export async function deleteData(req,res){
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "product is deleted"})
}

export async function getData(req,res){
    const products = await Product.find();
    res.status(200).json(products)
}


export async function getOneData(req,res){
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
}