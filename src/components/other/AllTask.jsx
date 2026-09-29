import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)


  return (
    <div className='bg[#2C2C2C] p-5 rounded mt-5  '>
       <div className='bg-amber-400 mb-2 text-white py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg   font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-lg  font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg  font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg  font-medium'>Completed</h5>
        <h5 className='w-1/5 text-lg  font-medium'>Failed</h5>
      </div>

        <div className=''> 
           {userData.map(function(elem,idx){
          return <div key={idx} className='bg-black mb-2  text-white py-2 px-4 flex justify-between rounded'>
        <h2 className='  w-1/5 font-medium text-white-600 text-xl'>{elem.firstname}</h2>
        <h3 className=' text-lg w-1/5 font-medium text-blue-500'>{elem.taskCounts.newTask}</h3>
        <h5 className=' text-lg w-1/5 font-medium text-yellow-500'>{elem.taskCounts.active}</h5>
        <h5 className=' text-lg w-1/5 font-medium text-green-500'>{elem.taskCounts.completed}</h5>
        <h5 className=' text-lg w-1/5 font-medium text-red-500'>{elem.taskCounts.failed}</h5>
      </div>
      })}
        </div>
      
       
    </div>
  )
}

export default AllTask