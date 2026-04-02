import React from 'react'

function TaskPanel({data}) {
  return (
    <>
    <div className='flex flex-wrap justify-between gap-5 w-full mt-5'>
        <div className='w-[49%] py-15 px-10  rounded-xl bg-red-400'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h2 className='text-2xl font-medium'>New Task</h2>
        </div>
        <div className='w-[49%] py-15 px-10 rounded-xl bg-blue-400'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h2 className='text-2xl font-medium'>New Task</h2>
        </div>
        <div className='w-[49%] py-15 px-10 rounded-xl bg-emerald-400'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h2 className='text-2xl font-medium'>New Task</h2>
        </div>
        <div className='w-[49%] py-15 px-10 rounded-xl bg-amber-400'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h2 className='text-2xl font-medium'>New Task</h2>
        </div>
    </div>
    </>
  )
}

export default TaskPanel