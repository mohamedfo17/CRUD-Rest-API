const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
 

const bookShema=new mongoose.Schema({
    name:String,
    author:String,
    date:Number
})







module.exports=mongoose.model('book',bookShema);