import React from 'react';
import {   Link } from "react-router-dom";



import "./navbar.css"

const Navbar = () => {
  return (
    
    <div className="navbar">
      <div className="navContainer">
        <span ><i class="fa-solid fa-train-subway-tunnel"></i></span>
        <div className="navItems">
        <Link className="navButton"  to="/">
             HOME
            </Link>
            
           
       
            <Link className="navButton"  to="/adminlogin">
              ADMIN SIGNIN
            </Link>
            <Link className="navButton"  to="/searchds">
            SEARCH  DEST/SOURCE
            </Link>
            
           
            <Link className="navButton"  to="/signup">
             USER SIGNUP
            </Link>
            <Link className="navButton"  to="/contact">
             contact
            </Link>
           
        </div>
      </div>
      <div className="container mt-3">
       
        </div>
    </div>
    
  )
}

export default Navbar