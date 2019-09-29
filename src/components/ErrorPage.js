import React from 'react'
import {Link} from 'react-router-dom'

const Error =()=>{
    return(
        <diV>
        <h1 style={{fontSize: '20em'}}>404!</h1>
        <p><Link to='/'>Go Back To THe Home Page</Link></p>
        </diV>
    )
}

export default Error;