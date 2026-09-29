import React from 'react'

const NewTask = ({data}) => {
  return (
   
        <div className='h-full shrink-0 w-[350px] p-5 bg-[#f3791c] rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 text-white px-3 py-1 rounded '>{data.category}</h3>
            <h4 className='text-sm '>{data.taskDate}</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
           <p className='text-sm mt-3'>
            {data.taskDescription}
           </p>
           <div className='mt-4'>
            <button className='bg-blue-500 rounded-xl px-3 py-1 mt-12 text-sm text-white'>Accept Task</button>
           </div>
       </div>
  )
}

export default NewTask