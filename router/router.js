const express=require('express');
const router=express.Router();
const Book=require('../models/book.js')

router.get('/',async (req,res)=>{
 try{ const books=await Book.find();
 console.log(books);
 res.status(200).json(books);}
 catch(err){
    console.log(err);
    res.status(500).json({message:'Error fetching books'});
 }
 

})
router.get('/:id',async (req,res)=>{
   try{ const book=await Book.findById(req.params.id);
    res.status(200).json(book);}
    catch(err){
        console.log(err);
        res.status(500).json({message:'Error fetching book'});
     }
     
    
})
router.post('/',async (req,res)=>{
   try{ const book=new Book(req.body);
    await book.save();
    res.status(201).json(book);}
    catch(err){
        console.log(err);
        res.status(500).json({message:'Error posting books'});
     }
     

})

router.put('/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }   
      Object.assign(book, req.body);
      await book.save();
      res.status(200).json(book);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error updating book');
    }
  });

router.delete('/:id',async (req,res)=>{
    try {await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'Book deleted'});}
    catch(err){
        console.log(err);
        res.status(500).send('Error deleting book');
    }
})
module.exports=router;