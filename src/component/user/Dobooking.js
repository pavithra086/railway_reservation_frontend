import {   Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useParams}from 'react-router-dom';
import { render } from "react-dom";
import { Container } from "reactstrap";
//import "./Login.css";

 function Dobooking() {
const [msg,setMsg]=useState();
const [totalNumOfSeats, setTotalNumOfSeats] = useState('');
const [userId, setuserId] = useState('');
const [amount, setamount] = useState('');
const [trainedit ,setTrainedit]=useState(
  { 
    trainId:"",
    userId:"",
    trainName: "",
    passengerName:"",
    email:"",
    phone:"",
   
      source:"",
      destination:"",

      className:"",
      
    
      totalNumOfSeats:"",
      amount:""
}
);

  const Navigate=useNavigate();
  const {trainId}=useParams();

console.log(trainId);




//amount=trainedit.totalNumOfSeats*trainedit.price;



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
const response=await axios.post(`/BOOKING-MANAGEMENT-SERVICE/book/addbooking`,trainedit)
setMsg(response.data.msg)

setTimeout(()=>{
 

},2000);




}


let p="http://localhost:9094/pgredirect/"+trainedit.userId+"/"+trainedit.totalNumOfSeats*trainedit.price;
return(
< div className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/6213932.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'1200px' ,
        height:'1200px' ,
    }}>

  <div className="container">
  
    


<form  onSubmit={handleTrainupdate}className="formCont">


<h2>
    DO BOOKING 
    </h2>
    <lable className="form-lable">TRAIN ID</lable>
    <input
    type="text"
    name="totalnumofSeats"
    className="form-control p-2"
     value={trainedit.trainId}
     onChange={(e)=>handleEdit(e)}/>


  <lable className="form-lable">USER ID </lable>
    <input
    type="text"
    name="userId"
    className="form-control p-2"
     value={trainedit.userId}
     onChange={(e)=>handleEdit(e)}/>
  
    
  <lable className="form-lable">TRAIN NAME</lable>
    <input
    type="text"
    name="totalnumOfSeats"
    className="form-control p-2"
     value={trainedit.trainName}
     onChange={(e)=>handleEdit(e)}/>

  <lable className="form-lable">PASSENGER NAME </lable>
    <input
    type="text"
    name="passengerName"
    className="form-control p-2"
     value={trainedit.passengerName}
     onChange={(e)=>handleEdit(e)}/>

<lable className="form-lable">EMAIL</lable>
    <input
    type="text"
    name="email"
    className="form-control p-2"
     value={trainedit.email}
     onChange={(e)=>handleEdit(e)}/>

<lable className="form-lable">PHONE</lable>
    <input
    type="text"
    name="phone"
    className="form-control p-2"
     value={trainedit.phone}
     onChange={(e)=>handleEdit(e)}/>
 
 <lable className="form-lable">SOURCE</lable>
    <input
    type="text"
    name="totalnumOfSeats"
    className="form-control p-2"
     value={trainedit.source}
     onChange={(e)=>handleEdit(e)}/>

  
  
<lable className="form-lable">DESTINATION</lable>
    <input
    type="text"
    name="totalnumOfSeats"
    className="form-control p-2"
     value={trainedit.destination}
     onChange={(e)=>handleEdit(e)}/>
 
 <lable className="form-lable">TRAIN per seat price</lable>
    <input
    type="text"
    name="price"
    className="form-control p-2"
     value={trainedit.price}
     onChange={(e)=>handleEdit(e)}/>
  
<lable className="form-lable">TRAIN CLASS</lable>
    <input
    type="text"
    name="totalnumOfSeats"
    className="form-control p-2"
     value={trainedit.className}
     onChange={(e)=>handleEdit(e)}/>
  
 




  
  <label className="form-label">SEATS AVAILABLE u want to book </label>
              <input
                type="number"
                name="totalNumOfSeats"
                placeholder="Enter Number of Seats Available"
                className="form-control p-2"
                onChange={(e) => handleEdit(e)}
              />
  
 
  <lable className="form-lable">PRICE</lable>
    <input
    type="text"
    name="numOfSeats"
    className="form-control p-2"
     value={trainedit.totalNumOfSeats*trainedit.price}
     onChange={(e)=>handleEdit(e)}/>
  
   
 
<div>
  <button type="submit" className="btn btn-primary mt-4">SUBMIT</button></div>
  <button className="btn btn-primary m-2"
        onClick={(e)=>{
          window.open(p);
          window.location.href="/";
          
          
  

          ///Navigate("/http://localhost:9094/pgdirect/"+cartTotal);
        }}>DO PAYMENT</button>
</form>
</div>
</div>



);

 }
export default Dobooking;



