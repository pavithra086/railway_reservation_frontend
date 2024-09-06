import React from 'react';
import {   Link } from "react-router-dom";
import {Card, Input, Label, Form, Button, Col,Row,FormGroup,Container } from 'react-bootstrap';
const Userdashboard = () => {
  


  return (
    <>
    <div className="navbar">

      <div className="navContainer">
        <span className="logo">USER DASHBOARD</span>
        <div className="navItems">
       
           
           
           

            <Link className="navButton"  to="/">
            HOME
            </Link>
            <Link className="navButton"  to="/bookingemail">
            SEARCH BOOKING
            </Link>
           
           
            <Link className="navButton"  to="/trainlist1">
              AVILABLE TRAINS
            </Link>

           <Link className="navButton"  to="/listandbooking">
           AVAILABLE TRAINS AND BOOKING
            </Link>

            
            <Link className="navButton"  to="/searchtrain">
              SEARCH TRAIN
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





    </>

  )
}

export default Userdashboard;


/*
 <Link className="navButton"  to="/bookingform">
            BOOKING
            </Link>*/