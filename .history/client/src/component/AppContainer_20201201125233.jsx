import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
// import Login from './Auth/Login/Login'
import LoginForm from './Auth/Login/LoginForm'
// import Signup from './Auth/Sign Up/Signup'
import SignUpForm from './Auth/Sign Up/SignUpForm'
import Home from './Core/Home'
import NavBar from './NavBar/NavBar'
import UserDashboard from './Dashboard/UserDashboard'
import PrivateRoute from './Auth/Private Route/PrivateRoute'


export default function AppContainer() {
    
    return (
        <div>
            
            <Router>
            <NavBar/>
            <Route path = "/" exact component = {Home}></Route>
            <Route path = "/signup"><SignUpForm/></Route>
            <Route path = "/login"><LoginForm/></Route>
            <PrivateRoute path="/dashboard"  component = {UserDashboard}/>

        
        
    </Router>
    
        </div>
    )
}
