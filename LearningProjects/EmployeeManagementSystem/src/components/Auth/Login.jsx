import React from 'react'
import {useState} from 'react'

function Login({handleLogin}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleForm = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 p-15 rounded-xl'>
        <h1 className='text-3xl font-bold mb-20 -mt-5'>Login</h1>
        <form 
        onSubmit={handleForm} 
        className='flex flex-col items-center justify-center gap-3'>
          <input 
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          className='outline-none bg-transparent hover:border-emerald-400 placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-xl' placeholder='Enter your email'/>
          <input 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          className='outline-none bg-transparent hover:border-emerald-400 placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-xl' placeholder='Enter your password'/>
          <button className='w-full font-medium hover:bg-emerald-600 hover:font-extrabold outline-none bg:transparent border-2 border-emerald-600 py-3 px-5 rounded-xl cursor-pointer'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login