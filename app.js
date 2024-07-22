const express=require('express')
const app=express()
const collection=require('./mono')
const bcrypt = require('bcrypt');
const cors = require('cors');
const { mongo } = require('mongoose');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/',cors(),(req,res)=>{

})
app.post('/',async(req,res)=>{
  const {mail,password}=req.body
  check=await collection.findOne({mail:mail})
  

const isPassword =await bcrypt.compareSync(password,check.password)//have to check with the hashed password in the DB
  if(!isPassword) return res.status(400).json("Wrong password!!!")
   try{
    if (check){
      res.json("success")

    }
    else{
      res.json("fail")
    }
   }catch(e){
    console.log(e);
   }
})

app.post('/Sign',async(req,res)=>{
    const {name,mail,password}=req.body
    const salt = bcrypt.genSaltSync(10);//measure of how many times the password will be hashed.
const hash = bcrypt.hashSync(password, salt);
    const data={
      name:name,
      mail:mail,
      password:hash
    }
    try{
      check=await collection.findOne({mail:mail})
      
    if(check){
     res.json("Exist")
    }
    else{
      res.json("new")
     await collection.insertMany([data])
    }
  }catch(e){
    console.log(e);
  }
})

app.listen(3000,()=>{

    console.log("http://localhost:3000");
})



