import {React,useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [mail,setmail]=useState('')
  const [name,setname]=useState('')
  const [password,setpassword]=useState('')
 
 
  const move=useNavigate()
  const submit=async(e)=>{
    e.preventDefault()
  try{
   await axios.post('http://localhost:3000',{
    name,mail,password
   }).then(res=>{
    if (res.data==="success"){
       move("/Home",{state:{  mail, password }})
    }
    else if(res.data==="fail"){
      alert("You haven't signup yet!!!")
      move("/Sign")
    }
    setmail('')
  setpassword('')
   }).catch(e=>{
    console.log(e);
   })
   
  }catch(e){
    console.log(e);
  }
  
  }

  return (
    <>
    <div className='h-screen flex flex-col space-y-3   p-10 items-center bg-green-300 justify-center'>
      <h1 className='text-center text-xl font-bold'>LOGIN</h1>
       <form onSubmit={submit} className='md:w-[30%] rounded-md shadow-lg  bg-slate-200 opacity-70  backdrop-blur-md space-y-5 bg-opacity-70 p-7 h-[40%] ' action='POST'>
       
      <div className='flex relative space-y-5 flex-col'>
      <input className='p-2 bg-transparent border-b-[2px] border-b-black focus:outline-none' onChange={(e)=>{setmail(e.target.value)}} value={mail} type='email' required placeholder='Email '/>
       <input className='p-2 border-b-[2px] border-b-black  bg-transparent focus:outline-none' type='password'  onChange={(e)=>{setpassword(e.target.value)}} required placeholder='Password '/>
       
      <button type='submit' className='bg-green-500 text-white p-2 rounded hover:bg-white font-semibold text-lg hover:text-black delay-300 cursor-pointer'  >Submit</button>
      
      </div>
       </form>
       <div className='flex space-x-2'>
       <p>Don't  you have an ac?</p>
   <Link className='text-green-500' to='/Sign'>SignUp</Link>
<link className='text-blue-50' to="/Forgot">Forgot Password</link>
       </div>
    </div>
    
    </>
    
  )
}

export default Login