import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import httpClient from '../http-common'
import {Card, Input, Label, Form, Button, Col,Row,FormGroup,Container } from 'react-bootstrap';


function AddTrain() {
  const [trainId, setTrainId] = useState('');
  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [timeOfArrival, setTimeOfArrival] = useState('');
  const [timeOfDeparture, setTimeOfDeparture] = useState('');
  const [totalNumOfSeats, setTotalNumOfSeats] = useState('');
  const [className, setClassName] = useState('');
  const [message, setMessage] = useState("");



  const handletrainId = (event) => {
    const trainId = event.target.value;
    setTrainId(trainId);
  };

  const handletrainName = (event) => {
    const trainName = event.target.value;
    setTrainName(trainName);
  };

  const handlesource = (event) => {
    const source = event.target.value;
    setSource(source);
  };
  const handledestination = (event) => {
    const destination = event.target.value;
    setDestination(destination);
  };
  const handleprice = (event) => {
    const price = event.target.value;
    setPrice(price);
  };

  const handletimeOfArrival = (event) => {
    const timeOfArrival = event.target.value;
    setTimeOfArrival(timeOfArrival);
  };

  const handletimeOfDeparture = (event) => {
    const timeOfDeparture = event.target.value;
    setTimeOfDeparture(timeOfDeparture);
  };





  const handletotalNumOfSeats = (event) => {
    const totalNumOfSeats = event.target.value;
    setTotalNumOfSeats(totalNumOfSeats);
  };

  const handleclassName = (event) => {
    const className = event.target.value;
    setClassName(className);
  };

  const submitTrain = async (e) => {
    e.preventDefault();
    const traindata = {

      trainId: trainId,
      trainName: trainName,
      source: source,
      destination: destination,
      price: price,
      timeOfArrival: timeOfArrival,
      timeOfDeparture: timeOfDeparture,

      totalNumOfSeats: totalNumOfSeats,
      className: className,
    };




    await
      httpClient.post(
        "/TRAIN-MANAGEMENT-SERVICE/train/addtrain",
        JSON.stringify(traindata)





      )

        .then((result) => {
          setMessage(result.data.msg);
          console.log(result.data);
          console.log(result.data.msg);
          alert("train added successfully");
        });
  };
  return (
    <div  className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/6213932.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'1300px' ,
        height:'900px' ,
    }}  >
      <Container >
      
    <div className="formCont" >
     
        <form onSubmit={submitTrain} className="formCont">
          <h2 >
            ADD TRAIN DATA
          </h2>
          
          <div >
          <Row className="justify-content-center mt-5">
          <label className="form-label">TRAIN ID</label>
          <input
              type="Name"
              name="trainId"
              placeholder="Enter train Id"
              onChange={(e) => handletrainId(e)}
            />
            </Row>
           </div>




           <div>
           <Row className="justify-content-center mt-5">
              <label className="form-label">TRAIN NAME</label>
              <input
                type="name"
                name="trainName"
                placeholder="Enter train Name"
               
                onChange={(e) => handletrainName(e)}
                
              />
              </Row>
            </div>



            <div>
              <label className="form-label">SOURCE</label>
              <input
                type="text"
                name="source"
                placeholder="Enter train Source Station"
                onChange={(e) => handlesource(e)}
              />
             </div>

             <div>
              <label className="form-label">DESTINATION</label>
              <input
                type="text"
                name="destination"
                placeholder="Enter train Destination Station"
                className="form-control p-2"
                onChange={(e) => handledestination(e)}
              />
       </div>


       <div>
              <label className="form-label">PRICE</label>
              <input
                type="number"
                name="price"
                placeholder="Enter train Per Seat Fare"
                className="form-control p-2"
                onChange={(e) => handleprice(e)}
              />
             </div>

             <div>
              <label className="form-label">TIME OF ARRIVAL</label>
              <input
                type="text"
                name="timeOfArrival"
                placeholder="Enter train Arrival Time"
                className="form-control p-2"
                onChange={(e) => handletimeOfArrival(e)}
              />
         </div>
         <div>
              <label className="form-label">TIME OF DEPARTURE</label>
              <input
                type="text"
                name="timeOfDeparture"
                placeholder="Enter train Departure Time"
                className="form-control p-2"
                onChange={(e) => handletimeOfDeparture(e)}
              />
           </div>



           <div>
              <label className="form-label">NUMBER OF SEATS AVAILABLE</label>
              <input
                type="number"
                name="totalNumOfSeats"
                placeholder="Enter Number of Seats Available"
                className="form-control p-2"
                onChange={(e) => handletotalNumOfSeats(e)}
              />
             </div>

             <div>
          
              <label className="form-label">TRAIN CLASS</label>
              <input
                type="text"
                name="className"
                placeholder="Enter Number of Seats Available"
                className="form-control p-2"
                onChange={(e) => handleclassName(e)}
              />
            </div>







            <div>

            <div className="col-md-3">
              <button type="submit" className="btn btn-primary mt-4">
                SUBMIT
              </button>
              <Link   to="/trainlist" className="delete">
              CHECK UPDATED LIST
            </Link>
            </div>
            </div>
        </form>
        {message ? (
          <div className="text-success text-white">
            {" "}
            <h5>{message} </h5>
          </div>
        ) : (
          <></>
        )}
      </div>
      </Container>

    </div>


  );
}

export default AddTrain;

















































































































/*
import { React, useState } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddTrain() 
{
  const [trainId, setTrainId] = useState('');
  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [timeOfArrival, setTimeOfArrival] = useState('');
  const [timeOfDeparture, setTimeOfDeparture] = useState('');
  
  const [days, setDays] = useState('');
  const [totalNumOfSeats, setTotalNumOfSeats] = useState('');
  const [className, setClassName] = useState('');

 async function addTrain()
  {
    const formData =new FormData();
    formData.append("trainId",trainId);
    formData.append("trainName",trainName);
    formData.append("source",source);
    formData.append("destination",destination);
    formData.append("price",price);
    formData.append("timeOfArrival",timeOfArrival);
    formData.append("timeOfDeparture",timeOfDeparture);
    formData.append("totalNumOfSeats",totalNumOfSeats);
    formData.append("className",className);
    let result=await fetch("/train/addtrain",{
      method:"POST",
      body:formData
    });
    alert("data has saved")


  }

  return (
    <>
      <div className='Login'>
        <div>

        </div>
       
        <div className="midcontainer">
          <form className='Userform'>
            <h3>ADDITION OF TRAIN DETAILS</h3>
            <label id="fn">Train Number</label>
            <input required type="number" onChange={e => setTrainId(e.target.value)}></input>
            <label>Train Name</label>
            <input required type="text" onChange={e => setTrainName(e.target.value)}></input>
            <label>Source</label>
            <input required type="text" onChange={e => setSource(e.target.value)}></input>
            <label>destination</label>
            <input required type="text" onChange={e => setDestination(e.target.value)}></input>
            <label>Price</label>
            <input required type="number" onChange={e => setPrice(e.target.value)}></input>
           
            <label>ArrivalTime Time</label>
            <input required type="text" onChange={e => setTimeOfArrival(e.target.value)}></input>
            <label>Departure Time</label>
            <input required type="text" onChange={e => setTimeOfDeparture(e.target.value)}></input>
           



            <label>Seat SeatAvailability</label>
            <input required type="number" onChange={e => setTotalNumOfSeats(e.target.value)}></input>
            <label>className</label>
            <input required type="text" onChange={e=> setClassName(e.target.value)}></input>
            



            
            <br/>
            <button onClick={addTrain}className="btn btn-primary">Add train</button>
            <br /><br />
          </form><br /><br />

        </div>
      
      </div>
    </>
    
  );
}

export default AddTrain;
*/

/*
import { React, useState } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTrain() {
  let navigate = useNavigate();
  const [trainId, setTrainId] = useState('');
  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [timeOfArrival, setTimeOfArrival] = useState('');
  const [timeOfDeparture, setTimeOfDeparture] = useState('');
  const [price, setPrice] = useState('');
  
  const [totalNumOfSeats, setTotalNumOfSeats] = useState('');
  const [className, setClassName] = useState('');

  async function Submit(e) {
    // try {
      const out = {
        "TrainId": trainId,
       "TrainName": trainName,
      "Source":source,
      "Destination":destination,
      "Price":price,
      "TimeOfArrival":timeOfArrival,
      "TimeOfDeparture":timeOfDeparture,
     
      "TotalNumOfSeats":totalNumOfSeats,
      "ClassName":className

      };
      console.log(out);
      
      axios.post(`/TRAIN-MANAGEMENT-SERVICE/train/addtrain` ,out)
        .then(function (response) {
          console.log(response.data);
          // alert(response.data);
         
        })
        
        .catch(function (error) {
          console.log("hello")
          console.error(error.response.data);
        });
        e.preventDefault();
    // } catch (error) {
    //   if (error) {
    //     console.log(error)
    //     alert(error)
    //   }
    // }
  }
 return (
    <>
      <div className='Login'>
        <div>

        </div>
       
        <div className="midcontainer">
          <form className='Userform'>
            <h3>ADDITION OF TRAIN DETAILS</h3>
            <label id="fn">Train Number</label>
            <input required type="number" onChange={e => setTrainId(e.target.value)}></input>
            <label>Train Name</label>
            <input required type="text" onChange={e => setTrainName(e.target.value)}></input>
            <label>Source</label>
            <input required type="text" onChange={e => setSource(e.target.value)}></input>
            <label>destination</label>
            <input required type="text" onChange={e => setDestination(e.target.value)}></input>
            <label>Price</label>
            <input required type="number" onChange={e => setPrice(e.target.value)}></input>
           
            <label>ArrivalTime Time</label>
            <input required type="text" onChange={e => setTimeOfArrival(e.target.value)}></input>
            <label>Departure Time</label>
            <input required type="text" onChange={e => setTimeOfDeparture(e.target.value)}></input>
           



            <label>Seat SeatAvailability</label>
            <input required type="number" onChange={e => setTotalNumOfSeats(e.target.value)}></input>
            <label>className</label>
            <input required type="text" onChange={e=> setClassName(e.target.value)}></input>
            



            
            <br/>
            <button  onClick={(e) => Submit(e)}>Add Train</button>
            <br /><br />
          </form><br /><br />

        </div>
      
      </div>
    </>
    
  );
}

export default AddTrain;

//<label>days </label>
//<input  type="text" onChange={event => setDays(event.target.value)}></input>
*/












































































/*import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export default class AddTrain extends Component {
  state = {
    trainId:'',
    trainName:'',
    source:'',
    destination:'',
    price:'',
    timeOfArrival:'',
    timeOfDeparture:'',
    days:'',
    totalNumOfSeats:'',
    className:'',
    isTrainFilled: false
  };

 
  handletrainId = event => {
    this.setState({ trainId: event.target.value });
  }


  handletrainName = event => {
    this.setState({trainName : event.target.value });
  }

  handlesource = event => {
    this.setState({ source: event.target.value });
  }

  handledestination = event => {
    this.setState({ destination: event.target.value });
  }

  handleprice = event => {
    this.setState({ price: event.target.value });

  }
  handletimeOfArrival = event => {
    this.setState({timeOfArrival: event.target.value });

  }
  handletimeOfDeparture = event => {
    this.setState({timeOfDeparture: event.target.value });

  }
  handledays = event => {
    this.setState({days: event.target.value });

  }
  handletotalNumOfSeats = event => {
    this.setState({totalNumOfSeats: event.target.value });

  }
  handleclassName = event => {
    this.setState({className: event.target.value });

  }







  handleSubmit = event => {
    event.preventDefault();

    const AddFlight = {
      trainId: this.state.trainId,
      trainName: this.state.trainName,
      source: this.state.source,
      destination: this.state.destination,
      price:this.state.price,
      timeOfArrival:this.state.timeOfArrival,
      timeOfDeparture:this.state.timeOfDeparture,
      days:this.state.days,
      totalNumOfSeats:this.state.totalNumOfSeats,
      className:this.state.className,



    
    };

    axios
      .post(
        "/TRAIN-MANAGEMENT-SERVICE/train/addtrain",
        AddFlight
      )
      .then(response => response)
      .catch(error => error.message);
      window.alert("Flight added successfully");
    this.setState({
      trainId:"",
      trainName:"",
      source:"",
      destination:"",
      price:"",
      timeOfArrival:"",
      timeOfDeparture:"",
      days:"",
      totalNumOfSeats:"",
      className:"",
    
      isTrainFilled: true
    });
  };

  cancel(){
    this.props.history.push('/AllFlightadmin');
    }

  render() {
    if (this.state.isFlightFilled) {
      return <Navigate to="/AllFlightadmin" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Navigate to="/add-flight" />;
    }

    return (
      <div className="bg">
          <div className="outer">
          <div className="inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Add Train</h3>

                <div className="form-group">
                    <label>Train Id</label>
                    <input type="number" className="form-control" placeholder="Enter Flight id"  
                   onChange={this.handleid} value={this.state.trainId} required />
                </div>
               
                
                <div className="form-group">
                    <label>Train Name</label>
                    <input type="text" className="form-control" placeholder="Enter Flight Number"  
                   onChange={this.handleflightNumber} value={this.state.trainName} required />
                </div>

                <div className="form-group">
                    <label>source</label>
                    <input type="text" className="form-control" placeholder="Enter Origin"  
                    onChange={this.handleorigin} value={this.state.source} required />
                </div>

                <div className="form-group">
                    <label>Destination</label>
                    <input type="text" className="form-control" placeholder="Enter Destination"  
                    onChange={this.handledestination} value={this.state.destination} required />
                </div>

                <div className="form-group">
                    <label>price</label>
                    <input type="number" className="form-control"  
                    onChange={this.handleflightDate} value={this.state.price} required />
                </div>

                <div className="form-group">
                    <label>time of arrival</label>
                    <input type="time" className="form-control"  
                    onChange={this.handleflightDate} value={this.state.timeOfArrival} required />
                </div>
                <div className="form-group">
                    <label>time of Departure</label>
                    <input type="time" className="form-control"  
                    onChange={this.handleflightDate} value={this.state.timeOfDeparture} required />
                </div>
                <div className="form-group">
                    <label>days</label>
                    <input type="text" className="form-control"  
                    onChange={this.handleflightDate} value={this.state.days} required />
                </div>
                <div className="form-group">
                    <label>total Num Of Seats</label>
                    <input type="number" className="form-control"  
                    onChange={this.handleflightDate} value={this.state.totalNumOfSeats} required />
                </div>
                <div className="form-group">
                    <label>className</label>
                    <input type="text" className="form-control"  
                    onChange={this.handleflightDate} value={this.state.className} required />
                </div>






                

                <button className="btn btn-success">Add</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

            </form>
           
          </div>
          </div>
          </div>   
    );
  }
}

*/





















































































































































































/*

import React, { Component } from "react";

import axios from "axios";
import {  Link } from "react-router-dom";

import { Navigate } from 'react-router';

 class AddTrain extends Component {
  state = {
    trainId:"",
    trainName:"",
    source:"",
    destination:"",
    price:"",
   
            timeOfArrival:"",
            timeOfDeparture:"",
   
    days:[],
    totalNumOfSeats:"",
    
            className:"",
          
    isTrainCreated: false
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

  handlesource = event => {
    const { value } = event.target;
    this.setState({ source: value.toUpperCase() });
  };

  handledestination = event => {
    const { value } = event.target;
    this.setState({ destination: value.toUpperCase() });
  };
  handleprice= event => {
    const { value } = event.target;
    this.setState({ pricePerKms: value.toUpperCase() });
  };


 
  handletimeofarrival = event => {
    const { value } = event.target;
    this.setState({ timeOfArrival: value.toUpperCase() });
  };
  handletimeOfDeparture = event => {
    const { value } = event.target;
    this.setState({ timeOfDeparture: value.toUpperCase() });
  };
  

  handletotaldistance = event => {
    const { value } = event.target;
    this.setState({ totalDistance: value.toUpperCase() });
  };
  
  handledays = event => {
    const { value } = event.target;
    this.setState({ days: value.toUpperCase() });
  };
  handletotalnumofseats = event => {
    const { value } = event.target;
    this.setState({ totalNumOfSeats: value.toUpperCase() });
  };
 
  handleclassname = event => {
    const { value } = event.target;
    this.setState({ className: value.toUpperCase() });
  };
 
  



  
  
  




  handleSubmit = event => {
    event.preventDefault();

    const newTrain = {
      trainid: this.state.trainId,
      trainName: this.state.trainName,
      source:this.state.source,
      destination:this.state.destination,
      price:this.state.price,
     
     
      timeOfArrival:this.state.route.timeOfArrival,
      timeOfDeparture:this.state.route.timeOfDeparture,
    
      days:this.state.days,
      totalNumOfSeats:this.state.totalNumOfSeats,
     
      className:this.state.trainClasses.className,
     




     
    
    };

    axios
      .post(
        "/TRAIN-MANAGEMENT-SERVICE/train/addtrain",
        
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Train created successfully");
    this.setState({
        trainid: "",
        trainName: "",
        source:"",
    destination:"",
    price:"",
   
           
            timeOfArrival:"",
            timeOfDeparture:"",
          
        days:[],
        totalNumOfSeats:"",
        
                className:"",
              
    
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
                      <label htmlFor="inputState">Price </label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handleprice}
                        value={this.state.price}
                        required
                      />
                    </div>

                    
                   


                    <div className="col">
                      <label htmlFor="trainName">Time of arrival</label>
                      <input
                        type="text"
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
                        type="text"
                        className="form-control"
                        id="trainName"
                        onChange={this.handletimeOfDeparture}
                        value={this.state.route.timeOfDeparture}
                        required
                      />
                    </div>
   
   
                   
                    <div className="col">
                      <label htmlFor="trainName">days </label>
                      <input
                        type="text"
                        className="form-control"
                        id="trainName"
                        onChange={this.handledays}
                        value={this.state.days}
                        required
                      />
                    </div>

                    

                    
                    <div className="col">
                      <label htmlFor="trainName">total no seats</label>
                      <input
                        type="number"
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
                        type="text"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleclassname}
                        value={this.state.className}
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

export default AddTrain;
*/


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