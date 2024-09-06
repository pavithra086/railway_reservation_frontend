import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios';

function ViewBookEmail()
{
  const [gettraindata, setGettraindata]= useState([]);
  const[trainId ,setTrainId]= useState('');
  const [query, setQuery] = useState('');
  const[email,setEmail] = useState('');
   
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

  


  return(

        <React.Fragment>              
         <Container>
          <div style={{
        backgroundColor: 'lightblue',
        width: '1500px',
        height: '1500px'
      }}>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>Search record Datatable in React Js</h3>  
              <form onSubmit={handleSubmit}>              
                <div className="col-md-6">                
                <input type="text" name='name' value={email}   className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder='Search...' />
              </div>          
            
<div className="col-md-1">
<button type="submit" className="btn btn-primary">SUBMIT</button>
</div>
<div className="col-md-1">
<button type="submit" className="btn btn-primary">RESET</button>
</div>
</form>
</div>



            <div className='col-md-12'>
            <table className="table">
              <thead>
                <tr>
                  <th>Sr.. No </th>
                  <th>train id</th>
                  <th>train Name</th>
                  <th>source</th>
                  <th>destination</th>
                  <th>price</th>
                 
                  <th>Total no of seats</th>
                  <th>Class name</th>
                </tr>
              </thead>
              <tbody>
                {
                  gettraindata.length >0 ?(
                    gettraindata.map((getTrain,index)=>(
                   <tr key={index}>
                  <td>{index+1} </td>
                  <td>{getTrain.trainId}</td>
                  <td>{getTrain.trainName}</td>
                  <td>{getTrain.source}</td>
                  <td>{getTrain.destination}</td>
                  <td>{getTrain.price}</td>
                  <td>{getTrain.timeOfArrival}</td>
                  <td>{getTrain.timeOfDeparture}</td>
                  <td>{getTrain.totalNumOfSeats}</td>
                  <td>{getTrain.className}</td>

                 
                  </tr>

                    )
                    )
                  
                  ):(

                    <tr>
                      <td>Records not found</td>
                    </tr>
                  )
                }
                  
                  
                    
              </tbody>
            </table>
            </div>
        </div>
        </div>
      </Container>

        </React.Fragment>
    );
}



  

export default ViewBookEmail;