const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')

const router=require("./routers")

app.use(cors())
app.use(express.json())
app.use("/api/timestampdata",router)

const port = 3000;
const hostname = 'localhost';


// app.get('/', (req, res) => {
//   res.send("welcome")
// })


mongoose.connect('mongodb+srv://tejaskalbe96:vqhwVracr2O7x89x@cluster0.tfnlscl.mongodb.net/TIME_STAMP_VISUALIZATION?retryWrites=true&w=majority').then(()=>{
  console.log(`Connected to Mongo`)
})
.then(()=>{
  app.listen(port,hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
  })
})
.catch((err)=>{
  console.log(err.message)
}) 
