
import React, {  useState } from 'react'
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import Navbar from "../component/navbar/Navbar";





const AdminLogin = () => {
    console.log("Hello!");
   
     
    const[userName, setUsername]= useState("");
    const[password, setPassword] =useState("");
    const navigate = useNavigate();
    const [jwt, setJwt] =useLocalState("", "jwt");
    
   

    function sendUserLoginReq(){

    
      
        const reqBody = {
            userName: userName,
            password: password,
        };
    
        fetch("/admin/auth/signin", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),
        })
        .then((response) => Promise.all([response.json(), response.headers]))
        
        
        .then(([body, headers]) => {
          setJwt( headers.get("authorization")) ;
            navigate("/admindashboard");
            console.log(`jwt is ${jwt}`);
            alert("ADMIN  Login successfull");
        })
        .catch((error) => {
          alert("Something went wrong enter valid credentials");
        });
     
     
      }   
       
 

/*
function Login() {
  const [jwt,setJwt] = useLocalState("","jwt");


useEffect(() => { 
  if(!jwt) {
   
        const reqBody = {
            userName : "Saath",
            password :"Saath12@",
        };
    
        fetch("/user/auth/signin", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),
        })
        .then((response) => Promise.all([response.json(), response.headers]))
        .then(([body, headers]) => {
            setJwt( headers.get("authorization")) ;
            useNavigate("/userdash")
           console.log(`jwt is ${jwt}`);
        });    
       }  
}, []); 


useEffect(() => {
console.log(`jwt is : ${jwt}`);
},[jwt]);
*/


  return (

    <>
     <Navbar />
     <div  className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/6213932.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'1300px' ,
        height:'500px' ,
    }}  > 
     
     
      <Container >
      
      <div className='formCont'>
      <h1 >Login To Website!</h1>
        <Row className="justify-content-center mt-5">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="fs-4">Username</Form.Label>
              <Form.Control
                type="userName"
                size="lg"
                placeholder="Enter the User Name"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="fs-4">Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Type in the Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md="8"
            lg="6"
            className="mt-2 d-flex flex-column gap-5 flex-md-row justify-content-md-between"
          >
            <Button
              id="submit"
              type="button"
              size="lg"
              onClick={() => sendUserLoginReq()}
            >
              Login
            </Button>
            <Button
              variant="secondary"
              type="button"
              size="lg"
              onClick={() => {
                navigate("/");
              }}
            >
              Exit
            </Button>
          </Col>
        </Row>
        </div>
      </Container>
      </div>
    </>


  );
  

  /*
 return(
 <div>
   <Navbar/>
  <h1>yo
  </h1>
  <div>{jwt}</div>
 </div>
 )
 */
  
};
  

export default AdminLogin;