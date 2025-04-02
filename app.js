const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, 
    useUnifiedTopology: true 
})
const db =mongoose.connection;
db.on('connected',()=>console.log('connected'))
db.on('error',()=>console.log('error'))

// Add this before your routes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});
const booksRouter = require('./router/router')
app.use('/books', booksRouter)



app.listen(3000,()=>console.log(`Server running on port 3000`));
