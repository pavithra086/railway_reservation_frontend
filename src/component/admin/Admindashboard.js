import React from 'react';
import { Navbar } from 'react-bootstrap';
import {   Link } from "react-router-dom";


const Admindashoard = () => {
  return (
   
    <div>
      
    
 
    <div className="navbar"> 
   
      <div className="navContainer">
       
        <div className="navItems">
      
        

            <Link className="navButton"  to="/viewbooking">
              VIEW BOOKING
            </Link>

            
            <Link className="navButton"  to="/">
           HOME
            </Link>

           
            <Link className="navButton"  to="/addtrain">
             ADD TRAIN
            </Link>
          
           
           
            <Link className="navButton"  to="/trainlist">
              TRAIN LIST
            </Link>
          
            
        </div>
      </div>
      <div className="container mt-3">
       
        </div>
        </div>

        <img
      className="header1Img"
      src="https://images7.alphacoders.com/598/598940.jpg"
      alt=""
    />




    </div>
    
  )
}

export default Admindashoard;