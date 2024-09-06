import React from 'react';
import {   Link } from "react-router-dom";

import {useState,useEffect} from 'react';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/Navbar';
//import { Table } from 'reactstrap';
const ViewBooking=()=>
{
  const[booking,setBooking]=useState([]);
  useEffect(()=>{
   getBooking();
   getData();
  

  },[]);
  
 const getBooking =async()=>{
  let result=await fetch("/BOOKING-MANAGEMENT-SERVICE/book/listallbooking");
  result= await result.json();
  setBooking(result);
 }

 
/*console.warn(books);
 async function deleteOperation(bookingId)
    {
      let result=await  fetch("/TRAIN-MANAGEMENT-SERVICE/train/delete/"+trainId,{
        method:'DELETE'});
      result=await result.json();
      console.warn(result);
      getData();
      
    }*/
  

   


  async  function getData()
    {
        let result=await fetch("/BOOKING-MANAGEMENT-SERVICE/book/listallbooking");
  result= await result.json();
  setBooking(result);
    }



    
  return(
           
    <div
      style={{
        backgroundColor: 'skyblue ',
        width: '2000px',
        height: '1500px'
      }}
    >
  <div className="booking-list">  <Link to={`/admindashboard`} className="delete">ADMIN DASHBOARD</Link>

    <h3>BOOKING LIST</h3>
    <ul>
             
               
                <li>TRAIN NAME</li>
                <li> PASSENGER NAME</li>
                <li> PASSENGER EMAIL</li>
                <li>  SOURCE</li>
                <li> DESTINATION</li>
                <li> SEATS</li>
                <li> PHONE NUM</li>
                <li>TRAIN  CLASS </li>
                <li> PRICE</li>
             
                   
                </ul>
                
                    {
                        booking.map(
                            items =>

                            <ul key = {items.trainName}>
                                <li> {items.trainName} </li>
                                <li>{items.passengerName}</li>
                            <li>{items.email}</li>
                            <li>{items.source}</li>
                            <li>{items.destination}</li>
                            <li>{items.seats}</li>
                            <li>{items.phone}</li>
                            <li>{items.className}</li>
                            <li>{items.amount}</li>
                              
                              
                        
 
                                
                            </ul>
                        )
                        }
                
              
            
    
    
  </div>
  </div>
)
    
}  
export default ViewBooking;
