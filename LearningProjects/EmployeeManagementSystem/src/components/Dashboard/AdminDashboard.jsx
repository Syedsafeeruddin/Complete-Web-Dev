import React from 'react'
import { Header, CreateTask, AllTask } from '../index.js'

function AdminDashboard() {
  return (
    <div className="min-h-screen w-full p-10 bg-black text-white">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
