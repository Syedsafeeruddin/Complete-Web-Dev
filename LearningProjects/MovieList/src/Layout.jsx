import React from 'react'
import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
        <NavBar/ >
        <Outlet />
    </>
  )
}

export default Layout