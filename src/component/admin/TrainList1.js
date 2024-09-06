import React from 'react';
import {   Link } from "react-router-dom";

import {useState,useEffect} from 'react';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
//import { Table } from 'reactstrap';
const TrainList1=()=>
{
  const[trains,setTrains]=useState([]);
  useEffect(()=>{
   getTrains();
   getData();
  

  },[]);
  
 const getTrains =async()=>{
  let result=await fetch("http://localhost:8097/TRAIN-MANAGEMENT-SERVICE/train/listalltrains");
  result= await result.json();
  setTrains(result);
 }

 
console.warn(trains);
 async function deleteOperation(trainId)
    {
      let result=await  fetch("/TRAIN-MANAGEMENT-SERVICE/train/delete/"+trainId,{
        method:'DELETE'});
      result=await result.json();
      
      console.warn(result);
      getData();
      
      
    }
  

   


  async  function getData()
    {
        let result=await fetch("http://localhost:8097/TRAIN-MANAGEMENT-SERVICE/train/listalltrains");
  result= await result.json();
  setTrains(result);
    }



    
  return(
<div  className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpapercave.com/wp/wp8731587.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'2000px' ,
        height:'900px' ,
    }}  >
  <div className="train-list"><li>   <Link to={`/userdashboard`}>USER DASHBOARD</Link></li>
    <h3>LIST OF TRAINS</h3>
    <ul >
    <li>  S.NO </li>
        <li> TRAIN ID</li>
        <li>TRAIN NAME </li>
        <li>SOURCE </li>
        <li>DESTINATION</li> 
        <li>PRICE</li>
        <li>TIME OF ARRIVAL</li>
        <li>TIME OF DEPARTURE</li>
       
        <li>NUMBER OF SEATS</li>
        <li>TRAIN CLASS</li>

        
    </ul>
    
   {
    trains.map((item,index)=>
    <ul>
      <li>{index+1}</li>
      <li>{item.trainId}</li>
      <li>{item.trainName}</li>
      <li>{item.source}</li>
      <li>{item.destination}</li> 
      <li>{item.price}</li> 
      <li>{item.timeOfArrival}</li> 
      <li>{item.timeOfDeparture}</li> 
      
      <li>{item.totalNumOfSeats}</li>
      <li>{item.className}</li>  
      
  
    
    </ul>

    
) }

</div>
    
  </div>
)
    
}  
export default TrainList1;














 // <li><Link to={`/updatetrain/${item.trainId}`}>Update</Link></li>



//  <li><Link to={`/trains/${item.trainId}`}>More details</Link></li>


