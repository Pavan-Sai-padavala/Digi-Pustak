import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:'10px'}}>
       <h2 style={{margin:'20px'}}>
            DigiPustak
        </h2>
        <div style={{margin:'20px'}} >
            <h4 style={{margin:'30px',display:'inline'}}><Link  to="/signin">SIGN IN</Link></h4>
            <h4 style={{margin:'30px',display:'inline'}}><Link  to="/signup">SIGN UP</Link></h4>
        </div>
    </div>
  )
}

export default NavBar