
import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import httpClient from "./http-common";
import {Card, Input, Label, Form, Button, Col,Row,FormGroup,Container } from 'react-bootstrap';
import AuthService from './services/AuthService'
const required = value => {

  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const userName = value => {
  if (value.length < 4 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const password = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const phone = value => {
  if (value.length < 10) {
    return (
      <div className="alert alert-danger" role="alert">
        The phone number must be of 10 numbers
      </div>
    );
  }
};








function SignUp() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState("");
  

  const handleuserName = (event) => {
    const  userName = event.target.value;
    setUserName(userName);
  };

  const handlepassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleemail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlephone = (event) => {
    const phone = event.target.value;
    setPhone(phone);
  };
  



  

  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {

      userName: userName,
   password: password,
      email: email,
     phone:phone,
      
    };

   



    await
      httpClient.post(
        "/PASSENGER-MANAGEMENT-SERVICE/user/auth/signup",
        JSON.stringify(userdata)





      )

        .then((result) => {
          setMessage(result.data.msg);
          console.log(result.data);
          console.log(result.data.msg);
          alert("user Signed Up  successfully");
        });
  };
  return (
    <div  className='mainDiv'  style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/6213932.jpg")`, 
      backgroundRepeat: 'no-repeat',
        width:'1200px' ,
        height:'700px' ,
    }} >
      <Container >
<div className="formCont" >
     
        <form onSubmit={submitUser} className="formCont">
          <h2 >
           WELCOME
          </h2>
          
          <div >
          <label className="form-label">USER NAME</label>
          <input
              type="userName"
              name="userName"
              
              placeholder="Enter the UserName"

              onChange={(e) => handleuserName(e)}
              validations={[required, userName]}
            />
           </div>




           <div>
              <label className="form-label">PASSWORD</label>
              <input
                type="name"
                name="password"
                className="form-control p-2"
                placeholder="Enter the Password"
                onChange={(e) => handlepassword(e)}

              />
            </div>



            <div>
              <label className="form-label">EMAIL </label>
              <input
                type="text"
                name="email"
                className="form-control p-2"
                placeholder="Enter the Email Address"
                onChange={(e) => handleemail(e)}
              />
             </div>

             <div>
              <label className="form-label">PHONE</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter the Phone Number"
                className="form-control p-2"
                onChange={(e) => handlephone(e)}
              />
       </div>


      

           



          







            <div>

            <div className="col-md-3">
              <button type="submit" className="">SIGNUP </button>
              
             
              <div>
              <Link   to="/userlogin">
             LOGIN 
            </Link>
            </div>
            </div>
            <div>
            <Link   to="/">
             HOME
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

export default SignUp;
















