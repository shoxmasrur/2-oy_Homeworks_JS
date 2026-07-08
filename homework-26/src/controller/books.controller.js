import Book from "../schema/books.schema.js"

 class Data{

 async  addData(req,res){
    
    const {name, author} =req.body
    try{
        const existsBook = await Book.findOne({name,author})
        if(!existsBook){
            const book = await Book.create(req.body)
            console.log("book")
            res.status(200).json({message:"successfully added"})
        }else{
            throw new Error("this book is already available")
        }
    }catch(error){
        res.status(400).json({message:"this book is already available",})
    }
}


 async getData(req,res){
    try{
        const books = await Book.find();
        res.status(200).json(books)

    }catch(err){
        res.status(404).json({message: "error is loading books",err})
    }
    
}

 async  updateData(req,res){
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(book)
    }catch(error){
        res.status(400).json({message:"there is a problem on updating"})
    }
}

 async  deleteData(req,res){
    try{
       const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message: `book is deleted`})
    }catch(err){
        res.status(400).json({message:"there is a problem in deleting"})
    }
}

}

export default Data;

