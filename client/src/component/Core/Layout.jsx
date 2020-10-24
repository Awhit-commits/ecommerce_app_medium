import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Layout  = ({title = "Title",
description = "Description",
className,children} )=>(
    <div>
        <Jumbotron>
            <h2>{title}</h2>
            <p className = "lead"> {description}</p>
        </Jumbotron>
        <div className = {className}> {children}</div>
    </div>
    
)

export default Layout