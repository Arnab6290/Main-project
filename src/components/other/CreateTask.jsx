import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

   const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask,setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
   
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

       const data=userData
    
     data.forEach(function(elem){
       if(asignTo == elem.firstname){
        elem.tasks.push(newTask) 
        elem.taskCounts.newTask = elem.taskCounts.newTask+1
       }
     })
     setUserData(data)
     console.log(data)
      
      setTaskTitle('')
      setCategory('')
      setTaskDate('')
      setTaskDescription('')
      setAsignTo('')

 
  }
  return (
     <div className='p-5 bg-[#1D2128] rounded mt-7'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full bg-gray-900  items-start justify-between '> 
         
         <div className='w-1/2'>

           <div>
            <h3 className='text-sm text-gray-300 font-medium  mb-0.5'>Task Title</h3>
          <input
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          type="text" placeholder='Make a Design' className='text-sm h-12 text-gray-300 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/></div>

            <div>
              <h3 className='text-sm text-gray-300 font-medium  mb-0.5'>Date</h3>
          <input 
           value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
          type="date" className='text-sm py-1 h-12 px-2 w-4/5 text-gray-300 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/></div>

          <div>
            <h3 className='text-sm text-gray-300 font-medium  mb-0.5'>Assign to</h3>
          <input
           value={asignTo}
          onChange={(e)=>{
            setAsignTo(e.target.value)
          }}
          type="text" placeholder='Employee Name' className='text-sm text-gray-300 h-12 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' /></div>

          <div>
            <h3 className='text-sm text-gray-300 font-medium  mb-0.5'>Category</h3>
          <input
           value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
          type="text" placeholder='design,dev,etc' className='text-sm text-gray-300 h-12 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' /></div>
         </div>

          <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 font-medium mb-0.5'>Description</h3>
          <textarea 
           value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}
          className='w-full h-75 text-gray-300 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id=""></textarea></div>

        
          <button className='bg-[#76C457] py-3 text-xl hover:bg-blue-300  hover:text-white px-5 rounded-xl text-sm mt-4 w-full active:scale-95 ml-5 '>Create Task</button>
        </form>

      </div>
  )
}

export default CreateTask