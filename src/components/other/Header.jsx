import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

 // const [username,, setUsername] = useState('')

   // if(!data){
   //   setUsername('Admin')
   // }else{
    //  setUsername(data.firstname)
   // }
  
   const logOutUser = ()=>{
     localStorage.setItem('loggedInUser','')
     props.changeUser('')
     //window.location.reload()
   }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold text-black'>user ☠️☠️ </span></h1>
      <button onClick={logOutUser} className="bg-red-500 text-white font-medium px-4 py-2 rounded active:bg-[#3874FF] active:scale-95">Log out</button>
    </div>
  )
}

export default Header