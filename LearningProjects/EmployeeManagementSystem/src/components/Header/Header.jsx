import React from 'react'

function Header({data}) {
  console.log(data);
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'>{data?.name || "No name found"}</span></h1>
        <button className='font-medium hover:bg-red-400 hover:font-bold outline-none bg:transparent border-2 border-red-400 py-3 px-5 rounded-xl cursor-pointer'>Log out</button>
    </div>
  )
}

export default Header