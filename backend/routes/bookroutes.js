const router=require('express').Router();
const bookmodel=require("../models/bookmodel");
//post request
router.post("/add",async(req,res)=>{
    try{
        const data=req.body;
        const newBook=new bookmodel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"book added sucessfully"})
        });
    }
    catch(error){
           console.log(error)
    }
})
router.get("/getbooks",async(req,res)=>{
    let books;
    try{
        books=await bookmodel.find();
        res.status(200).json({books});
    }
    catch(error){
        console.log(error);
    }
})
router.get("/getbooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    try{
        book=await bookmodel.findById(id);
        res.status(200).json({book});
    }
    catch(error){
        console.log(error);
    }
})
router.put("/updatebooks/:id",async (req,res)=>{
    const id=req.params.id;
    const {bookname,description,author,image,price}=req.body;
    //const book=req.body.bookname; and it can be written in below await function but we have destructured it
    let book;
    try{
      book=await bookmodel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price});

    }
    catch(error){
        console.log(error);
    }
    await book.save().then(()=>res.status(200).json({message:"data updated sucessfully"}));
})
router.delete("/deletebooks/:id",async (req,res)=>{
    const id=req.params.id;
   
    try{
        await bookmodel
        .findByIdAndDelete(id)
        .then(()=>{res.json({message:"data deleted sucessfully"})});
    }
    catch(error){
        console.log(error);
    }
})

module.exports=router;