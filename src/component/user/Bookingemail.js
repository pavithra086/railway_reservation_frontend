import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios';
import {   Link } from "react-router-dom";
function Bookingemail()
{
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[email,setEmail] = useState('');
   
  useEffect( ()=>{
    trainData();

    

  },[]);
 
  const trainData=async()=>{
    const reqData =await fetch("/BOOKING-MANAGEMENT-SERVICE/book/listallbooking");
    
    const resData= await reqData.json();
    console.log(resData);
    setGettraindata(await resData)
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
 // console.log(query);
 return await axios.get(`/BOOKING-MANAGEMENT-SERVICE/book/listallbookings/${email}`)
 .then((response)=>{setGettraindata(response.data);})
 .catch((err)=>console.log(err));
}
const handleReset=async(e)=>{
  window.location.reload(false);
}
  
  


  return(
    <div>

          <div  className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpapercave.com/wp/wp8731587.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'2200px' ,
        height:'1500px' ,
    }}> 
          
         <Container>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
            <h5><Link to={`/userdashboard`} className="delete">UserDashboard</Link></h5>
              <h3 className='mb-3'>SEARCH BOOKING BY ENTERING EMAIL ID</h3>  
              <form onSubmit={handleSubmit}>              
                <div className="col-md-7">                
                <input type="text" name='name' value={email}   className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder='Search...' />
              </div>          
            
<div className="col-md-1">
<button type="submit" className="btn btn-primary">SUBMIT</button>
</div>
<div className="col-md-1">
<button type="submit" onClick={()=>handleReset()}className="btn btn-primary">Reset</button>
</div>
</form>
</div>



            <div className='booking-list'>
            <div className="table">
          <ul>
                
                  <li>SR. NO </li>
                  <li>BOOKING ID</li>
                  <li>TRAIN NAME</li>
                  <li>PASSENGER NAME</li>
                  <li>EMAIL</li>
                  <li>PHONE NUMBER</li>
                 
                  <li>SOURCE</li>
                  <li>DESTINATION</li>
                  <li>TRAIN CLASS</li>
                  
                  <li>TOTAL NUM OF SEATS </li>
                 
                </ul>
             
              
                {
                  gettraindata.length >0 ?(
                    gettraindata.map((getTrain,index)=>(
                   <ul key={index}>

                  <li>{index+1} </li>
                  <li>{getTrain.userId}</li>
                  <li>{getTrain.trainName}</li>
                  <li>{getTrain.passengerName}</li>
                  <li>{getTrain.email}</li>
                  <li>{getTrain.phone}</li>
               
                  <li>{getTrain.source}</li>
                  <li>{getTrain.destination}</li>
                  <li>{getTrain.className}</li>
                  
                  <li>{getTrain.seats}</li>
                 

                 
                  </ul>

                    )
                    )
                  
                  ):(

                    <tr>
                      <td>BOOKING WITH PARTICULAR EMAIL ID IS NOT FOUND</td>
                    </tr>
                  )
                }
                  
                  
                    
             
           </div>
            </div>
        </div>
      </Container>
</div>
</div>
    );
}



  

export default Bookingemail;