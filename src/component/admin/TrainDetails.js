import axios from 'axios';
import {useState,useEffect} from 'react';
import React,{Component} from 'react';
import { useParams } from 'react-router-dom'
const TrainDetails = () => {
    const [trains,setTrains]=useState({
       
        trainName:"",
        source:"",
        destination:"",
        route:[
            {
                routeId:"",
                stationName:"",
                timeOfArrival:"",
                timeOfDeparture:"",
                totalDistance:"",
            },
        ],
        pricePerKms:"",
        daysofRunning:[],
        totalNumOfSeats:"",
        trainClass:[
            {
                className:"",
                price:"",
                numOfSeats:"",
            },],
        });
        useEffect(()=>{
            getTrains();
            getData();
           
         
           },[]);

           const getTrains =async()=>{
            let result=await fetch("/TRAIN-MANAGEMENT-SERVICE/train/listalltrains");
            result= await result.json();
            setTrains(result);
           }
          

    async  function getData(trainId)
    {
        let result=await fetch("/TRAIN-MANAGEMENT-SERVICE/train/viewtrainbyno/"+trainId);
  result= await result.json();
  setTrains(result);
  console.log(result);
    }


const {trainId} = useParams();
  return (
<div>
<h1>Product id: {trainId}</h1>
<h5>Train number <input type="number" id="trainId" value={trainId}/>  </h5>
<h5>{trainId.trainName} </h5>   
 
       
</div>
    
  );
};

export default TrainDetails;












/*<div>
<h1>Product id: {trainId}</h1>
<h5>Train number <input type="number" id="trainId" value={trainId}/>  </h5>
<h5>Train name <input type="text" id="trainId" value={trainId.trainName}/>  </h5>   
 <label class="content-items">{{ trains:trainName }}</label>
        <label class="content-items">{{trains:source }}</label>
        <label class="content-items">{{trains:destination }}</label>
       
</div>*/