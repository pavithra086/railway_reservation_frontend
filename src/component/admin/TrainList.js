import React from 'react';
import {   Link } from "react-router-dom";

import {useState,useEffect} from 'react';

//import { Table } from 'reactstrap';
const TrainList=()=>
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
         window.confirm('Are you sure you wish to delete this item?') ; this.onCancel(trainId)
       // alert("Are You Sure You Want To delete?");
       window.location.reload(false);
      
      
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
        width:'2200px' ,
        height:'900px' ,
    }}  >
   
  <div className="train-list"><li>   <Link to={`/admindashboard`} className="delete">ADMIN DASHBOARD</Link></li>
  

    <h3>LIST OF TRAINS</h3>
    <ul >
        <li>S.no</li>
        <li> TRAIN ID</li>
        <li>TRAIN NAME </li>
        <li>SOURCE </li>
        <li>DESTINATION</li> 
        <li>PRICE</li>
        <li>TIME OF ARRIVAL</li>
        <li>TIME OF DEPARTURE</li>
       
        <li>NUMBER OF SEATS</li>
        <li>TRAIN CLASS</li>
        <li> UPDATE TRAIN</li> 
        
        <li>DELETE TRAIN </li> 

        
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
      
    <li><Link to={`/updatetrain/${item.trainId}`}className='delete'>UPDATE</Link></li>
      


      
      <li><span onClick={()=>deleteOperation(item.trainId)}className='delete'  >DELETE</span></li>
      <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) } } />

    </ul>

    
) }


</div>
  </div>
  
)
    
}  
export default TrainList;














 // <li><Link to={`/updatetrain/${item.trainId}`}>Update</Link></li>



//  <li><Link to={`/trains/${item.trainId}`}>More details</Link></li>


