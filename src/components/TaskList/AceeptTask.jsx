import React from 'react'

const AceeptTask = ({data}) => {
 
  return (
      <div className='h-full shrink-0 w-[350px] p-5 bg-[#64eee5] rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 text-white px-3 py-1 rounded '>{data.category}</h3>
            <h4 className='text-sm '>{data.taskDate}</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
           <p className='text-sm mt-3'>
            {data.taskDescription}
           </p>
           <div className='flex justify-between mt-10'>
            <button className='bg-green-400 py-1 px-3 text-sm rounded-xl text-white mt-3'>Mark as Completed</button>
            <button className='bg-red-400 py-1 px-3 text-sm rounded-xl text-white mt-3'>Mark as Failed</button>
           </div>
       </div>
  )
}

export default AceeptTask