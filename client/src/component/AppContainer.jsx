import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import NavBar from './NavBar/NavBar'


export default function AppContainer() {
    
    return (
        <div>
            
            <Router>
            <NavBar/>
        
        
    </Router>
    
        </div>
    )
}
