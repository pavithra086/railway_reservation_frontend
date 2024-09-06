

import Navbar from './component/navbar/Navbar';
import './App.css';
import  Home  from './component/home/Home';
import React from 'react';
import Jwttoken from './component/admin/Jwttoken';
import AdminDashboard from './component/admin/Admindashboard';
import Userdashboard from './component/user/UserDashboard';
import TrainList from './component/admin/TrainList'
import TrainDetails from './component/admin/TrainDetails';
import AddTrain from './component/admin/AddTrain';
import BookingForm from './component/booking/BookingForm';
import Searchds from './component/user/Searchds'
import HomeSlider  from './component/slider/Slider';
import SearchTrain from './component/user/SearchTrain';
import ViewBooking from './component/booking/ViewBooking';
//import bgImage from './videos/video-1.mp4';
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./component/user/UserLogin";

import Register from './component/user/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TrainListbyId from './component/admin/TrainListbyId';
import UpdateTrain from './component/admin/UpdateTrain';

import Bookingbyemail from './component/user/Bookingemail';
import Bookingemail from './component/user/Bookingemail';
import SignUp from './SignUp';
import TrainList1 from './component/admin/TrainList1';
import Listandbooking from './component/user/Listandbooking';
import Dobooking from './component/user/Dobooking';
import Contact from './component/Contact';
function App() {
  return (
    
    <BrowserRouter>

    <Routes>
    
      <Route path="/" element={<Home/>}/>
     
      <Route path="navbar/" element={<Navbar/>}/>
      <Route path="/jwttoken" element={<Jwttoken/>}/>
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
      <Route path="/trainlist" element={<TrainList/>}/>
      <Route path="/trainlist1" element={<TrainList1/>}/>
      <Route path="/trains/:trainId" element={<TrainDetails/>}/>
      <Route path="/addtrain" element={<AddTrain/>}/>
      <Route path="/bookingform" element={<BookingForm/>}/>
      
      <Route path="/trainlistbyid" element={<TrainListbyId/>}/>
      <Route path="/home"  element={<HomeSlider/>} />
      
      <Route path="/adminlogin"  element={<AdminLogin/>}/>
      <Route path="/updatetrain/:trainId"  element={<UpdateTrain />}/>
      <Route path="/userdashboard" element={<Userdashboard />}/>
      <Route path="/searchtrain" element={<SearchTrain />}/>
   <Route  path="/signup" element={<SignUp/>}/>
      <Route path="/viewbooking" element={<ViewBooking/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
     <Route path="/trainlist1" element={<TrainList1/>}/>
       <Route path='/bookingemail' element={<Bookingemail/>}/>
       <Route path='/searchds' element={<Searchds/>}/>
       <Route path ='/listandbooking' element={<Listandbooking/>}/>
       <Route path ='/dobooking/:trainId' element={<Dobooking/>}/>
       <Route path='/contact' element={<Contact/>}/>
           </Routes>
  </BrowserRouter>
  );
}

export default App;
