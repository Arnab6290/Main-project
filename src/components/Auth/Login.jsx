import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 const submitHandler = (e) => {
  e.preventDefault()
  handleLogin(email,password)
  console.log("email is",email);
  console.log("password is",password);
  
   setEmail("")
   setPassword("")
 }

  return (
    <div className='flex h-screen w-screen  items-center justify-center'>
     <div className='border-3 rounded-xl bg-black border-amber-400 p-20'>
         <form 
            onSubmit={(e)=>{
               submitHandler(e)
            }}
         className='flex flex-col items-center justify-center'>


          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
            
          }}
           required 
           className="border-2 outline-none text-gray-300  border-blue-500 text-xl py-2 px-4 rounded-xl placeholder:text-gray-400" type="Email" placeholder='Enter your email'/>

           <input 
           value={password}
           onChange={(e)=>{
             setPassword(e.target.value)
           }}
           required 
           className="border-2 outline-none text-gray-300  border-blue-500 text-xl py-2 px-4 rounded-xl placeholder:text-gray-400 mt-3" type="Password" placeholder='Enter your password'/>

           <button className="border-2 outline-none bg-blue-400 text-white text-xl py-2 px-4 rounded-xl placeholder:text-black mt-4 active:scale-95 active:bg-green-300 active:text-black active:border-amber-300 ">Log in</button>
         </form>
     </div>
    </div>
  )
}

export default Login