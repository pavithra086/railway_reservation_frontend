import  React from 'react';
import Header from '../header/Header';
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import MailList from "../mailList/MailList";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MailList/>
      <Footer />
    </div>

  );
};

export default Home;
