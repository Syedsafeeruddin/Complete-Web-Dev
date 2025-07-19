import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-center m-10'>User {userId}</div>
  )
}

export default User