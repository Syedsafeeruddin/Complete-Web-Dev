import React from 'react'
import {Header, TaskPanel, TaskList} from '../index.js'

function EmployeeDashboard({data}) {
  return (
    <div className='p-15 bg-[#ICICIC] h-screen'>
        <Header data={data}/>
        <TaskPanel data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard