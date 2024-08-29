import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState('rateCity');
    useEffect(()=>{
        !localStorage.getItem('login') && navigate('/') 
        
    },)

    const selectedTheme = (name) =>{
        setTheme(name)
    }
  return (
    <div>
        <Navbar />
        <Outlet selectedTheme={selectedTheme} theme={theme} /> 
        
    </div>
  )
}

export default ProtectedRoute
