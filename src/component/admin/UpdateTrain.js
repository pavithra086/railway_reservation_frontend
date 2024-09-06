import {   Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useParams}from 'react-router-dom';
import { render } from "react-dom";
import { Container } from "reactstrap";
//import "./Login.css";

 function Updatetrain() {
  const history=useNavigate();
const [msg,setMsg]=useState();
const [trainedit ,setTrainedit]=useState(
  { 
    trainName: "",
      source:"",
      destination:"",
      price:"",
      timeOfArrival:"",
      timeOfDeparture:"",
    
      totalNumOfSeats:"",
      className:""
}
);
  const Navigate=useNavigate();
  const {trainId}=useParams();
console.log(trainId);

useEffect(()=>{
  const edittrainId=async()=>{
const reqdata=await fetch ( `/TRAIN-MANAGEMENT-SERVICE/train/viewtrainbyno/${trainId}`);
const res=reqdata.json();
setTrainedit(await res);


  }
  edittrainId();
},[]
)
const handleEdit=(e)=>{

setTrainedit({...trainedit,[e.target.name]:e.target.value});
}

const handleTrainupdate= async (e)=>{
  e.preventDefault();
const response=await axios.put(`/TRAIN-MANAGEMENT-SERVICE/train/update/${trainId}`,trainedit)
setMsg(response.data.msg)

setTimeout(()=>{
  history.push("/trainlist");

},2000);




}
return(
< div className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/6213932.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'1200px' ,
        height:'900px' ,
    }}>

  <div className="container">
  
    


<form  onSubmit={handleTrainupdate}className="formCont">


<h2>
      UPDATE FUNCTION
    </h2>
   
    
<lable className="form-lable">TRAIN NAME </lable>
    <input
    type="text"
    name="trainName"
    className="form-control p-2"
     value={trainedit.trainName}
     onChange={(e)=>handleEdit(e)}/>
  

 
    <lable className="form-lable">SOURCE </lable>
    <input
    type="text"
    name="source"
    className="form-control p-2"
     value={trainedit.source}
     onChange={(e)=>handleEdit(e)}/>
  
  
    <lable className="form-lable">DESTINATION </lable>
    <input
    type="text"
    name="destination"
    className="form-control p-2"
     value={trainedit.destination}
     onChange={(e)=>handleEdit(e)}/>
 


  
    <lable className="form-lable">PRICE</lable>
    <input
    type="text"
    name="price"
    className="form-control p-2"
     value={trainedit.price}
     onChange={(e)=>handleEdit(e)}/>



  
    <lable className="form-lable">ARRIVAL TIME </lable>
    <input
    type="text"
    name="timeOfArrival"
    className="form-control p-2"
     value={trainedit.timeOfArrival}
     onChange={(e)=>handleEdit(e)}/>
  



  
    <lable className="form-lable">DEPARTURE TIME</lable>
    <input
    type="text"
    name="timeOfDeparture"
    className="form-control p-2"
     value={trainedit.timeOfDeparture}
     onChange={(e)=>handleEdit(e)}/>
  

  
    <lable className="form-lable">SEATS</lable>
    <input
    type="text"
    name="numOfSeats"
    className="form-control p-2"
     value={trainedit.totalNumOfSeats}
     onChange={(e)=>handleEdit(e)}/>
  
 
    <lable className="form-lable">TRAIN CLASS</lable>
    <input
    type="text"
    name="className"
    className="form-control p-2"
     value={trainedit.className}
     onChange={(e)=>handleEdit(e)}/>
 
<div>
  <button type="submit" className="btn btn-primary mt-4">SUBMIT</button></div>
  <Link   to="/trainlist">
              CHECK UPDATED LIST
            </Link>
</form>
</div>
</div>



);

 }
export default Updatetrain;





 


































/*
  const [Out, setOut] = useState([]);
  
  const [trainName, setTrainName] = useState("");

  const [source, setSource] = useState("");

  const [destination, setDestination] = useState("");

  const [price, setPrice] = useState("");


  const [timeOfArrival, setTimeOfArrival] = useState("");

  const [timeOfDeparture, setTimeOfDeparture] = useState("");

  const [days, setDays] = useState("");

  const [totalNumOfSeats, setTotalNumOfSeats] = useState("");
  const [className, setClassName] = useState("");


  const navigate = new useNavigate();

  useEffect(() => {
    axios
      .get(
        `/train/update/${localStorage.getItem(
          "trainId"
        )}`
      )

      .then(function (response) {
        setOut(response.data[0]);

      //  setTrainId(response.data[0].trainId);
        setTrainName(response.data[0].trainName);

        setSource(response.data[0].source);

        setDestination(response.data[0].destination);
        setPrice(response.data[0].price);

        setTimeOfArrival(response.data[0].timeOfArrival);

        setTimeOfDeparture(response.data[0].timeOfDeparture);

        setDays(response.data[0].days);

        setTotalNumOfSeats(response.data[0].totalNumOfSeats);
        
        setClassName(response.data[0].className);

        console.log(response.data);
      });
  }, []);

  function handleSubmit(e) {
    const Data = {
      trainId: localStorage.getItem("trainId"),
      TrainName: trainName,
      Source:source,
      Destination:destination,
      Price:price,
      TimeOfArrival:timeOfArrival,
      TimeOfDeparture:timeOfDeparture,
      Days:days,
      TotalNumOfSeats:totalNumOfSeats,
      ClassName:className

    };

    console.log(Data);

    axios
      .put(
        `/TRAIN-MANAGEMENT-SERVICE/train/update/${trainId}`(
          "trainId"
        )}`,
        Data
      )

      .then(function (response) {
        console.log(response.data);

        alert("Updated Successfully..");

        navigate("/AdminOperations");
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  return (
    <div className="Login">
      {/*            {" "} */
    /*  <form className="Userform">
        <h1>UPDATE TRAIN</h1>
       <br />
        <label id="fn">Train Number</label>
       {/* disabled value={Out.TrainNumber} */
        {/* onChange={event => setTrainNumber(event.target.value)} */}
        {/*      {" "} */}
      /*  <input
          required
          type="number"
          readOnly
          value={localStorage.getItem("trainId")}
        ></input>
         
         <label>TrainName</label>
         <input
          required
          type="text"
          defaultValue={Out.trainName}
          onChange={(event) => setTrainName(event.target.value)}
         
        ></input>

        <label>source</label>
        <input
          required
          type="text"
          defaultValue={Out.source}
          onChange={(event) => setSource(event.target.value)}
        ></input>
         <label>Destination</label>
        <input
          required
          type="text"
          defaultValue={Out.destination}
          onChange={(event) => setDestination(event.target.value)}
        ></input>
         <label>time Of Arrival</label>
        <input
          required
          type="datetime-local"
          defaultValue={Out.timeOfArrival}
          onChange={(event) => setTimeOfArrival(event.target.value)}
        ></input>
       <label>Arrival Time</label>
        <input
          required
          type="datetime-local"
          min={timeOfDeparture}
          disabled={timeOfDeparture.length ? false : true}
          defaultValue={Out.timeOfArrival}
          onChange={(event) => setTimeOfDeparture(event.target.value)}
        ></input>


         <label>Days</label>
        <input
          required
          type="text"
          defaultValue={Out.days}
          onChange={(event) => setDays(event.target.value)}
        ></input>
       


       <label>total num of seats</label>
        <input
          required
          type="number"
          defaultValue={Out.totalNumOfSeats}
          onChange={(event) => setTotalNumOfSeats(event.target.value)}
        ></input>

    
         <button onClick={(e) => handleSubmit(e)}>Update</button>
     
      </form>
      <br />
      <br />
    </div>
  );
}




export default Updatetrain;



































































































































































































































/*import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link, Navigate } from "react-router-dom";

export default class UpdateTrain extends Component {
  state = {
    id:this.props.location.state.trainId || '',
    flightNumber: this.props.location.state.trainNumber || '',
    source: this.props.location.state.source || '',
    destination: this.props.location.state.destination || '',
    price:this.props.location.state.price || '',
    timeOfArrival:this.props.location.state.timeOfArrival || '',
    timeOfDeparture:this.props.location.state.timeOfDeparture || '',
    days:this.props.location.state.days|| '',
    totalNumOfSeats:this.props.location.state.totalNumOfSeats || '',
    className:this.props.location.state.className|| '',
    isFlightFilled: false
  };

 
  handletrainId = event => {
    this.setState({ trainId: event.target.value });
  }


  handletrainNumber = event => {
    this.setState({ trainName: event.target.value });
  }

  handlesource = event => {
    this.setState({ source: event.target.value });
  }

  handledestination = event => {
    this.setState({ destination: event.target.value });
  }

  handleprice = event => {
    this.setState({ price: event.target.value });
    console.log(event.target.value, 'event.target.value');

  }
  handletimeOfArrival = event => {
    this.setState({ timeOfArrival: event.target.value });
    console.log(event.target.value, 'event.target.value');

  }
  handletimeOfDeparture = event => {
    this.setState({ timeOfDeparture: event.target.value });
    console.log(event.target.value, 'event.target.value');

  }
  handledays = event => {
    this.setState({ days: event.target.value });
    console.log(event.target.value, 'event.target.value');

  }
  handletotalNumOfSeats = event => {
    this.setState({ totalNumOfSeats: event.target.value });
    console.log(event.target.value, 'event.target.value');

  }
  handleclassName = event => {
    this.setState({ className: event.target.value });
    console.log(event.target.value, 'event.target.value');

  }




  handleSubmit = event => {
    event.preventDefault();

    const UpdateTrain = {
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
      .put(
        "http://localhost:8097/TRAIN-MANAGEMENT-SERVICE/train/update/{trainId}" +
        c,
        UpdateTrain
      )
      .then(response => response)
      .catch(error => error.message);
      window.alert("Train update successfully");
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
    
      isFlightFilled: true
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
      return <Navigate to="/update-flight" />;
    }

    return (
      <div className="bg">
          <div className="outer">
          <div className="inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Update Train</h3>

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

                

                <button className="btn btn-success">Update</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>
           
          </div>
          </div>
          </div>   
    );
  }
}*/