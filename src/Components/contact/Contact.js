import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j42rlwu', 'template_hgl42lc', form.current, {
        publicKey: 'dGz9H5OPkY_SNZiYr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
   
    <form action="" id="contact"className="contact" ref={form} onSubmit={sendEmail}>
       <h2 className="input-title">Get In Touch</h2>
    <p className="contact-desc">I'm always excited to connect with like-minded individuals, potential collaborators, or anyone interested in my work.</p>
    
        <div className="inputdiv">
           
           
         <h2 className="nametitle">Name</h2>   
        <input type="text" name="from_name" id="namebox" placeholder='Enter Your Name ' />
        <h2 className="emailtitle">Email</h2>
        <input type="email" name="from_email" id="email" className="email" placeholder='Enter your Email '/>
        <h2 className="message">Message</h2>
        <textarea placeholder='Enter your Message or Feedback' className='textarea' name='message'></textarea>
        <button className="submitbtn" type='submit' value="send">Submit</button>
        </div>
    </form>
  )
}

export default Contact
