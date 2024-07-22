import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
const Sign = () => {
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
 
  const move=useNavigate()
  const [name,setname]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
  try{
   await axios.post('http://localhost:3000/Sign',{
    name,mail,password
   }).then(res=>{
    if (res.data==="Exist"){
      alert("User Already exists")
      move("/")
    }
    else if (res.data==="new"){
      move("/Home",{state:{id:name}})
    }
    setPassword('')
    setMail('')
   }).catch(e=>{
    console.log(e);
   })
  }catch(e){
    console.log(e);
  }
  
  }

 
  return (
    <div className='h-screen flex flex-col space-y-3    items-center bg-green-300 justify-center'>
      <h1 className='text-center text-xl font-bold'>SIGN UP</h1>
       <form onSubmit={handleSubmit}  className='md:w-[30%] rounded-md shadow-lg  bg-slate-200 opacity-70  backdrop-blur-md space-y-5 bg-opacity-70 p-7 h-[40%] ' action='POST'>
       
      <div className='flex relative space-y-5 flex-col'>
      <input className='p-2 bg-transparent border-b-[2px] border-b-black focus:outline-none' onChange={(e)=>{setname(e.target.value)}} value={name} type='text' required placeholder='Name '/>
      <input className='p-2 bg-transparent border-b-[2px]  border-b-black focus:outline-none' required onChange={(e)=>{setMail(e.target.value)}} value={mail} type='email' placeholder='Email '/>
       <input className='p-2 border-b-[2px] border-b-black  bg-transparent focus:outline-none' type='password' required  onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password '/>
       <button type='submit' className='bg-green-500 text-white p-2 rounded hover:bg-white font-semibold text-lg hover:text-black delay-300 cursor-pointer' >Submit</button>
       
      
      </div>
       </form>
       <div className='flex space-x-2'>
       <p>Do you have an ac?</p>
   <Link className='text-green-500' to='/'>LOGIN</Link>
       </div>
    </div>
  )
  }
export default Sign