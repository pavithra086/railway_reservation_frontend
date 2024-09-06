import React, { Component, Fragment } from "react";
import axios from "axios";
import {   Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default class Register extends Component {
  state = {
    userName: "",
    gender: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    termsAndConditions: false,
    isIncorrectPassword: false,
    isSignUp: false
  };

  handleUserName = event => {
    const { value } = event.target;
    if (value.match("^[a-zA-Z ]*$") != null) {
      this.setState({ userName: value.toUpperCase() });
    }
  };

  handleGender = event => {
    const { value, id } = event.target;
    if (value === id) {
      this.setState({ gender: value });
    }
  };

  handleEmail = event => {
    const { value } = event.target;
    this.setState({ email: value });
  };

  handleCreatePassword = event => {
    const { value } = event.target;
    this.setState({ createPassword: value });
  };

  handleConfirmPassword = event => {
    const { value } = event.target;
    this.setState({ confirmPassword: value });
  };

  handleTermsAndConditions = event => {
    const { id, name } = event.target;
    if (name === id) {
      this.setState({ termsAndConditions: !this.state.termsAndConditions });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.createPassword !== this.state.confirmPassword) {
      window.alert("Create & Confirm Password not Matched");
    }

    // Creating newUser Object...
    const newUser = {
      userName: this.state.userName,
      gender: this.state.gender,
      email: this.state.email,
      createPassword: this.state.createPassword,
      confirmPassword: this.state.confirmPassword,
      termsAndConditions: this.state.termsAndConditions
    };

    // send data into database
    axios
      .post("http://localhost:4000/railwayReservationSystem/signUp", newUser)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => error.message);

    this.setState({
      userName: "",
      gender: "",
      email: "",
      createPassword: "",
      confirmPassword: "",
      termsAndConditions: false,
      signUpDate: Date.now,
      isSignUp: true
    });
  };

  render() {
    if (this.state.isSignUp) {
      return <Navigate to="/signIn" />;
    }

    return (
      < div className='mainDiv'  style={{ 
        backgroundImage: `url("https://wallpaperaccess.com/full/6213932.jpg")`, 
        backgroundRepeat: 'no-repeat',
          width:'1200px' ,
          height:'900px' ,
      }}>
        
          <div className="mainDiv">
            <div className="container">
              
               
                  
                
              
              <div className="formCont">
              <h3>Sign IN</h3>
               <div onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputUserName"
                      aria-describedby="userNameHelp"
                      placeholder="user_name"
                      value={this.state.userName}
                      onChange={this.handleUserName}
                     
                      //
                    />
                 

                  

                      

                
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="inputCreatePassword"
                      placeholder="create password"
                      value={this.state.createPassword}
                      onChange={this.handleCreatePassword}
                      required
                    />
                  </div>
                 
                  
                  
                  </div>
                  <button >
                    
                  
                  <li><Link to={"/userdashboard"}>SIGNIN</Link></li>
                  </button>
               
              </div>
            </div>
          </div>
     </div>
     </div>  
    );
  }
}

