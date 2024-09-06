
import {   Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import httpClient from "../http-common";

import {Card, Input, Label, Form, Button, Col,Row,FormGroup,Container } from 'react-bootstrap';
import axios from "axios";

function BookingForm() {
  const [userId, setuserId] = useState('');
  
  const [trainName, setTrainName] = useState('');
  
  const [passengerName ,setPassengerName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

 
  const [totalNumOfSeats, setTotalNumOfSeats] = useState('');
  const [amount, setamount] = useState('');
  const [className, setClassName] = useState('');
 
  const [message, setMessage] = useState(""); 

  
  
  

  const handleuserId = (event) => {
    const userId = event.target.value;
    setuserId(userId);
  };
  
 
  const handletrainName = (event) => {
    const trainName = event.target.value;
    setTrainName(trainName);
  };

  const handlepassengerName = (event) => {
    const passengerName = event.target.value;
    setPassengerName(passengerName);
  };

  const handleemail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlephone = (event) => {
    const phone = event.target.value;
    setPhone(phone);
  };
 


  



  const handlesource = (event) => {
    const source = event.target.value;
    setSource(source);
  };
  const handledestination = (event) => {
    const destination = event.target.value;
    setDestination(destination);
  };
  const handleclassName = (event) => {
    const className = event.target.value;
    setClassName(className);
  };
  const handletotalNumOfSeats = (event) => {
    const totalNumOfSeats = event.target.value;
    setTotalNumOfSeats(totalNumOfSeats);
  };
  const handleamount = (event) => {
    const amount = event.target.value;
    setamount(amount);
  };


  





  

 
  const submitBooking = async (e) => {
    e.preventDefault();
    
    const bookingdata = {
     userId:userId,
      
      trainName: trainName,
     passengerName:passengerName,
      email:email,
      phone:phone,

     
      
     source:source,
     destination:destination,
     className:className,
     totalNumOfSeats:totalNumOfSeats,
     amount:amount
     
    

     
    };
    
    

    await 
    httpClient.post(
        "BOOKING-MANAGEMENT-SERVICE/book/addbooking",
        JSON.stringify(bookingdata),
        await console.log("hello")
       
        
      )
      
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
        
      }
      )
      ;
  };
  let p="http://localhost:9094/pgredirect/"+userId+"/"+amount;
  return (
    <React.Fragment>
      <div className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/3844951.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'1200px' ,
        height:'900px' ,
    }}>
     <container>
        <div className="formCont" >
         
       
           

            <form onSubmit={submitBooking} className="formCont">
            <h2 >
           Do Booking
          </h2>
         <div>
                <label className="form-label">USER ID </label>
                <input
                  type="number"
                  name="userId"
                  className="form-control p-2"
                 onChange={(e) => handleuserId(e)}
                 
                />
              </div>
             
              
             

              
              <div>
                <label className="form-label">TRAIN NAME</label>
                <input
                  type="name"
                  name="trainName"
                  className="form-control p-2"
                  
                 onChange={(e) => handletrainName(e)}
                />
              </div>
              
               
             

              <div>
                <label className="form-label">PASSENGER NAME </label>
                <input
                  type="text"
                  name="passengerName"
                  className="form-control p-2"
                  onChange={(e) => handlepassengerName(e)}
                />
              </div>

              <div>
              <label className="form-label">EMAIL</label>
                <input
                  type="text"
                  name="email"
                  className="form-control p-2"
                  onChange={(e) => handleemail(e)}
                />
              
              </div>
              <div>
                <label className="form-label">PHONE</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control p-2"
                  onChange={(e) => handlephone(e)}
               />
         </div>
            
           
                

             
                
            

            
            



         <div>
                <label className="form-label">SOURCE</label>
                <input
                  type="text"
                  name="source"
                  className="form-control p-2"
                  
                  onChange={(e) => handlesource(e)}
                />
                </div>
              

              <div>
                <label className="form-label">DESTINATION</label>
                <input
                  type="text"
                  name="destination"
                  className="form-control p-2"
                
                  onChange={(e) => handledestination(e)}
                />
              </div>




             
              <div>
              
                <label className="form-label">TRAIN CLASS</label>
                <input
                  type="text"
                  name="className"
                  className="form-control p-2"
                  onChange={(e) => handleclassName(e)}
                />
             </div>

             <div>
              
                <label className="form-label">NUMBER OF SEATS</label>
                <input
                  type="number"
                  name="totalNumOfSeats"
                  className="form-control p-2"
                  onChange={(e) => handletotalNumOfSeats(e)}
                />
            </div>
            
            <div>
              
                <label className="form-label">AMOUNT</label>
                <input
                  type="number"
                  name="totalNumOfSeats"
                  className="form-control p-2"
                  onChange={(e) => handleamount(e)}
                />
            </div>
            
             
             
           





             
            <button className="btn btn-primary m-2"
        //onClick={(e)=>{
         // window.location.href="/userdashboard";
          
          
  

          ///Navigate("/pgdirect/"+cartTotal);
        //}}
        >
        Book Now</button>



          <button className="btn btn-primary m-2"
        onClick={(e)=>{
          window.open(p);
          window.location.href="/";
          
          
  

          ///Navigate("/http://localhost:9094/pgdirect/"+cartTotal);
        }}>DO PAYMENT</button>
  

          
        

</form>

               
              </div>
           
          {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )}
          
          </container>
        </div>
        
    </React.Fragment>
   
  );
}

export default BookingForm;


 
    







































































/*
import React, { Component } from "react";

import axios from "axios";
import {  Link } from "react-router-dom";

import { Navigate } from 'react-router';

export default class BookingForm extends Component {
  state = {
    trainId: "",
    trainName: "",
    passengerName:"",
    email:"",
    phone:"",
    bookingDate:"",
    journeyDate:"",

    sourceStation:"",
    destinationStation:"",
    trainClass:"",
    totalNumOfSeats:"",
    price:"",
          
    isBookingCreated: false
  };

  handleTrainid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainId: value.toUpperCase() });
    }
  };


  handleTrainName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainName: value.toUpperCase() });
    }
  };

  handlepassengerName = event => {
    const { value } = event.target;
    this.setState({ passengerName: value.toUpperCase() });
  };

  handleemail = event => {
    const { value } = event.target;
    this.setState({ email: value.toUpperCase() });
  };
  handlephone= event => {
    const { value } = event.target;
    this.setState({ phone: value.toUpperCase() });
  };

  handlebookingDate = event => {
    const { value } = event.target;
    this.setState({ bookingDate: value.toUpperCase() });
  };

  
  
  handlejourneyDate = event => {
    const { value } = event.target;
    this.setState({ journeyDate: value.toUpperCase() });
  };
  handlesourceStation = event => {
    const { value } = event.target;
    this.setState({ sourceStation: value.toUpperCase() });
  };
  

  
  
  
  handledestinationStation = event => {
    const { value } = event.target;
    this.setState({ destinationStation: value.toUpperCase() });
  };
 
 
  handletrainClass = event => {
    const { value } = event.target;
    this.setState({ trainClass: value.toUpperCase() });
  };
  handletotalnumofseats = event => {
    const { value } = event.target;
    this.setState({ totalNumOfSeats: value.toUpperCase() });
  };
  
  
  



  
  
  




  handleSubmit = event => {
    event.preventDefault();

    const newTrain = {
      trainid: this.state.trainId,
      trainName: this.state.trainName,
      passengerName:this.state.passengerName,
      email:this.state.email,
      phone:this.state.phone,
     
      bookingDate:this.state.bookingDate,
      journeyDate:this.state.journeyDate,
      sourceStation:this.state.sourceStation,
      destinationStation:this.state.destinationStation,
      trainClass:this.state.trainClass,
      totalNumOfSeats:this.state.totalNumOfSeats,
      price:this.state.className,
     



     
    
    };

    axios
      .post(
        "/TRAIN-MANAGEMENT-SERVICE/train/addtrain",
        newBooking
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("booking created successfully");
    this.setState({

        trainId: "",
        trainName: "",
        passengerName:"",
        email:"",
        phone:"",
        bookingDate:"",
        journeyDate:"",

        sourceStation:"",
        destinationStation:"",
        trainClass:"",
        totalNumOfSeats:"",
        price:"",
    
        
  
    
      isTrainCreated: true
    });
  };

  render() {
   // if (this.state.isTrainCreated) {
    //  return <Navigate to="/trainlist" />;
   // }
   

    return (
      <div>
        
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Create Train</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Train Id</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainid"
                        onChange={this.handleTrainid}
                        value={this.state.trainId}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">Train Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleTrainName}
                        value={this.state.trainName}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Source</label>
                      <input
                        id="from"
                        className="form-control"
                        onChange={this.handlesource}
                        value={this.state.source}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">Destination</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handledestination}
                        value={this.state.destination}
                        required
                      />
                    </div>


                    <div className="col">
                      <label htmlFor="inputState">Price per kms</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handlepricePerKms}
                        value={this.state.pricePerKms}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="trainName">route id</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handlerouteid}
                        value={this.state.route.routeId}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">station name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handlestationname}
                        value={this.state.route.stationName}
                        required
                      />
                    </div>


                    <div className="col">
                      <label htmlFor="trainName">Time of arrival</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handletimeofarrival}
                        value={this.state.route.timeOfArrival}
                        required
                      />
                    </div>

                    
                    <div className="col">
                      <label htmlFor="trainName">Time of Departure</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handletimeOfDeparture}
                        value={this.state.route.timeOfDeparture}
                        required
                      />
                    </div>
   
   
                   
                    <div className="col">
                      <label htmlFor="trainName">days running</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handledaysofrunning}
                        value={this.state.daysOfRunning}
                        required
                      />
                    </div>

                    

                    
                    <div className="col">
                      <label htmlFor="trainName">total no seats</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handletotalnumofseats}
                        value={this.state.totalNumOfSeats}
                        required
                      />
                    </div>

                    
                    <div className="col">
                      <label htmlFor="trainName">classname</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleclassname}
                        value={this.state.className}
                        required
                      />
                    </div>

                    
                    <div className="col">
                      <label htmlFor="trainName">price</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleprice}
                        value={this.state.price}
                        required
                      />
                    </div>

                    
                    <div className="col">
                      <label htmlFor="trainName">no of seats</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handlenumofseats}
                        value={this.state.numOfSeats}
                        required
                      />
                    </div>

                  






                  </div>
                  <br />
                
              
                  <br />
                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Create Train
                    </button>
                    
                    <p>Delete Train?<Link to="/delTrain"> Click Here</Link></p>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


/* <div className="col">
                      <label htmlFor="trainName">Total distance</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handletotaldistance}
                        value={this.state.totalDistance}
                        required
                      />
                      
                    </div>*/