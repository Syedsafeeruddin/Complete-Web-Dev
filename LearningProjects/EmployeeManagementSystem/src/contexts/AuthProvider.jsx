import React, {createContext, useEffect, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../components/index.js'

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const {employee, admin} = getLocalStorage()
        setUserData({employee, admin});
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider