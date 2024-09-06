import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">welcome to</span>
        <span className="headerTitleLg">RAILWAY RESERVATION</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/6213932.jpg"
        alt=""
      />
    </div>
  );
}














































/*
import React from "react";
import {
  faBed,
  faCalendarDays,
  faPhone,
  faAddressCard,
  faQuestion,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);



  const navigate = useNavigate();



  const handleSearch = () => {
    navigate("/trains", { state: { destination, date } });
  };

  return (
   
    <div    className='header' >
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faAddressCard} />
            <span>About Us</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTrain} />
            <span>Trains</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faQuestion} />
            <span>FAQ</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPhone} />
            <span>Customer Service</span>
          </div>

        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              welcome to Railway Reservation
            </h1>
            <p className="headerDesc">
              grab your tickets
            </p>
            <button className="headerBtn">Book now</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Enter the source?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Enter your destination?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>

  );
};

export default Header;




/*<div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>*/// style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" , height:1200,width:1200 }}*/