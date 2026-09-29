import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className=' rounded-xl px-10 py-10 w-[45%] bg-[#BD4444]'>
           <h2 className='text-3xl'>{data.taskCounts.newTask}</h2>
           <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className=' rounded-xl px-10 py-10 w-[45%] bg-[#E1E100]'>
           <h2 className='text-3xl'>{data.taskCounts.completed}</h2>
           <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className=' rounded-xl px-10 py-10 w-[45%] bg-[#007DCC]'>
           <h2 className='text-3xl'>{data.taskCounts.active}</h2>
           <h3 className='text-xl font-medium'>Active Task</h3>
        </div>

        <div className=' rounded-xl px-10 py-10 w-[45%] bg-[#FF9A00]'>
           <h2 className='text-3xl'>{data.taskCounts.failed}</h2>
           <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumbers