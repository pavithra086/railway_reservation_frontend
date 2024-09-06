import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact=()=>{
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pvqp2g6', 'template_91804bc', form.current, 'b1tmDueVI_O4k4Lgq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <section>
<div className="mainDiv">
    <h2 >Contact Us</h2>
    <form ref={form} onSubmit={sendEmail}className="formCont">
        <input type="text"
        placeholder="Full Name"
        name="userName" required/>
     <input type="text"
        placeholder="Email"
        name="email" required/>
        <input type="text"
        placeholder="Subject"
        name="email" required/>

        <textarea name="message"
        cols="30" rows="10"></textarea>
        <button classname="--btn-primary">Send Message</button>
    </form>

</div>
        </section>
    )
}
export default Contact;