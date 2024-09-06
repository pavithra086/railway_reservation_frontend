import "./mailList.css"
import {   Link } from "react-router-dom";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">For any Queries and Appreciation</h1>
      <span className="mailDesc">Send us the mail!!</span>
      
   
        <button> <Link className="navButton"  to="/contact">
             CONTACT
            </Link></button>
      
    </div>
  )
}

export default MailList