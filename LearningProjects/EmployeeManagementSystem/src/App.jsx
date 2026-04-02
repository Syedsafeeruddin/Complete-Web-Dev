import React, { useContext, useState, useEffect } from 'react'
import { Login, EmployeeDashboard, AdminDashboard } from './components/index.js'
import { AuthContext } from './contexts/AuthProvider.jsx'

function App() {
  const [userRole, setUserRole] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('loggedInUser')
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser)
  //     setUserRole(parsedUser.role)
  //     if (parsedUser.role === 'employee') {
  //       const employee = authData?.employee?.find(e => e.email === parsedUser.email)
  //       if (employee) {
  //         setLoggedInUserData(employee)
  //       }
  //     }
  //   }
  // }, [authData])

  const handleLogin = (email, password) => {
    if (authData && authData.admin.find((e) => e.email === email && e.password === password)) {
      setUserRole('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', ...admin }))
    } else if (authData) {
      const employee = authData.employee.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUserRole('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', ...employee }))
      } else {
        alert('Invalid email or password')
      }
    }
  }

  return (
    <>
      {!userRole && <Login handleLogin={handleLogin} />}
      {userRole === 'admin' && <AdminDashboard />}
      {userRole === 'employee' && <EmployeeDashboard data={loggedInUserData} />}
    </>
  )
}

export default App
