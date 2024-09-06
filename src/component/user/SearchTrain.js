import React, { useState, useEffect } from 'react';
import {   Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from 'axios';

function SearchTrain()
{
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[destination,setDestination] = useState('');
   
  useEffect( ()=>{
    trainData();

    

  },[]);
 
  const trainData=async()=>{
    const reqData =await fetch("/TRAIN-MANAGEMENT-SERVICE/train/listalltrains");
    
    const resData= await reqData.json();
    console.log(resData);
    setGettraindata(await resData)
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
 // console.log(query);
 return await axios.get(`/TRAIN-MANAGEMENT-SERVICE/train/listalltrains/${destination}`)
 .then((response)=>{setGettraindata(response.data);})
 .catch((err)=>console.log(err));
}

const handleReset=async(e)=>{
  window.location.reload(false);
}
  


  return(
    <React.Fragment>             
    <div  className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpapercave.com/wp/wp8731587.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'2000px' ,
        height:'700px' ,
    }}> 

      
         <Container>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>SEARCH TRAINS BY ENTERING THE  DESTINATION</h3>  <h5><Link to={`/userdashboard`} className="delete">UserDashboard</Link></h5>
              <form onSubmit={handleSubmit}>              
                <div className="col-md-7">                
                <input type="text" name='name' value={destination}   className="form-control" onChange={(e)=>setDestination(e.target.value)} placeholder='Search...' />
              </div>          
            
              <div className="col-md-1">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
<div className="col-md-1">
<button type="submit" onClick={()=>handleReset()}className="btn btn-primary">Reset</button>
</div>

</form>
</div>



            <div className='col-md-12'>
            <div className="train-list">
             
                <ul>
                  <li>SR.NO </li>
                 
                  <li>TRAIN ID</li>
                  <li>TRAIN NAME</li>
                  <li>SOURCE</li>
                  <li>DESTINATION</li>
                  <li>AMOUNT</li>
                  <li>TIME OF ARRIVAL</li>
                  <li>TIME OF DEPARTURE</li>
                  <li>TOTAL NUMBER OF SEATS</li>
                  <li>TRAIN CLASS</li>
                  <li>DoBooking</li>
                  
                </ul>
            
             
                {
                  gettraindata.length >0 ?(
                    gettraindata.map((getTrain,index)=>(
                   <ul key={index}>
                  <li>{index+1} </li>
                  
                  <li>{getTrain.trainId}</li>
                  <li>{getTrain.trainName}</li>
                  <li>{getTrain.source}</li>
                  <li>{getTrain.destination}</li>
                  <li>{getTrain.price}</li>
                  <li>{getTrain.timeOfArrival}</li>
                  <li>{getTrain.timeOfDeparture}</li>
                  <li>{getTrain.totalNumOfSeats}</li>
                  <li>{getTrain.className}</li>
                  <li><Link to={`/dobooking/${getTrain.trainId}`}className='delete'>DO BOOKING</Link></li>
                 
                  </ul>

                    )
                    )
                  
                  ):(

                    <tr>
                      <td>Trains Not Available for Particular Destination!!!</td>
                    </tr>
                  )
                }
                  
                  
                </div>    
             
            </div>
        </div>
      </Container>
      </div>
        </React.Fragment>
        
    );
}



  

export default SearchTrain;