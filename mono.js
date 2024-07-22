const  mongo  = require('mongoose')

require('dotenv').config()

url=process.env.URL
mongo.connect(url).then(()=>{
    console.log("connected to database ");
})
const newSchema=new mongo.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    password:{
       type:String,
       required:true
    }
})


 module.exports=mongo.model('Form',newSchema)