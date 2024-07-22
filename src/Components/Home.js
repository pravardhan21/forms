import axios from 'axios'
import {React ,useState,useEffect}from 'react'
import { useLocation,Link } from 'react-router-dom'
import {BiSolidHide,BiShow} from 'react-icons/bi'

const Home = () => {
  const location=useLocation()
 const [show,setshow]=useState(false)
  const{name,mail,password}=location.state
  // useEffect(()=>{
  //   axios.get('/Home').then((res)=>{
  //     console.log(res.data);
  //     setmy(res.data)
  //   })
  // })s
  const set=()=>{
    setshow(!show)
  }
  return (
<div className='h-screen flex  space-y-3 text-black text-4xl font-semibold font-mono   items-center bg-green-300 justify-center'>

<div className='space-y-4'>
<h1>Hello ,      welcome </h1>
<div className='text-2xl flex flex-col items-center'>

</div>


</div>


</div>
  )
}

export default Home