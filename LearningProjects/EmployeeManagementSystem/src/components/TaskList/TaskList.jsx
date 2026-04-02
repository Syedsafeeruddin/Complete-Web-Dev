import React from 'react'

function TaskList({data}) {
  return (
    <div id='taskList' className='h-[50%] w-full px-5 py-5 mt-10 rounded-xl flex items-center justify-start gap-5 overflow-x-auto'>
        <div className='h-full w-[400px] bg-amber-500 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-lg font-bold'>High</h3>
                <h4 className='text-bold text-lg font-semibold'>8-10-2025</h4>
            </div>
            <h2 className='mt-3 text-2xl font-bold'>A Task</h2>
            <p className='text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam, ab blanditiis veniam deleniti delectus. Sunt id vitae reprehenderit quaerat!</p>
        </div>
        <div className='h-full w-[400px] bg-amber-500 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-lg font-bold'>High</h3>
                <h4 className='text-bold text-lg font-semibold'>8-10-2025</h4>
            </div>
            <h2 className='mt-3 text-2xl font-bold'>A Task</h2>
            <p className='text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam, ab blanditiis veniam deleniti delectus. Sunt id vitae reprehenderit quaerat!</p>
        </div>
        <div className='h-full w-[400px] bg-amber-500 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-lg font-bold'>High</h3>
                <h4 className='text-bold text-lg font-semibold'>8-10-2025</h4>
            </div>
            <h2 className='mt-3 text-2xl font-bold'>A Task</h2>
            <p className='text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam, ab blanditiis veniam deleniti delectus. Sunt id vitae reprehenderit quaerat!</p>
        </div>
        <div className='h-full w-[400px] bg-amber-500 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-lg font-bold'>High</h3>
                <h4 className='text-bold text-lg font-semibold'>8-10-2025</h4>
            </div>
            <h2 className='mt-3 text-2xl font-bold'>A Task</h2>
            <p className='text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam, ab blanditiis veniam deleniti delectus. Sunt id vitae reprehenderit quaerat!</p>
        </div>
        <div className='h-full w-[400px] bg-amber-500 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-lg font-bold'>High</h3>
                <h4 className='text-bold text-lg font-semibold'>8-10-2025</h4>
            </div>
            <h2 className='mt-3 text-2xl font-bold'>A Task</h2>
            <p className='text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam, ab blanditiis veniam deleniti delectus. Sunt id vitae reprehenderit quaerat!</p>
        </div>
    </div>
  )
}

export default TaskList