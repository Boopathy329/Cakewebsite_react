import React from 'react'
import { useState } from 'react'
import '../Components/Singup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const ContactUs = () => {
  
  const [action,setAction] = useState("Sign Up");
  return (
    <div className='container-1'>
    <div className='header-1'>
     <div className='text-1'>{action}</div>
     <div className='underline-1'></div>
    </div>
    <div className='inputs-1'>
        {action==="Login"?<div></div>:<div className='input-1'>
            <img src={user_icon} alt="" />  
            <input type="text"  placeholder='Name'/>
        </div>}
     
        <div className='input-1'>
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
        </div>
        <div className='input-1'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
        </div>
    </div>
   
    {action==="Sign Up"?<div></div>: <div className='forgot-password'>Lost password? <span>Click Here!</span>
    </div>}
    <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit" } onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
    </div>
 
    </div>
  )
}

export default ContactUs

















// import React from 'react'


// function ContactUs  ()  {
//   return (
//     <>
//       <h3 style={{textAlign:"center"}}>Contact Us</h3>
//       <p style={{textAlign:"center"}}>Need Help? <span>Contact</span></p>
//     <div>


//      {/* <div class="container" data-aos="fade-up">

//   <div class="mb-3">
//   <iframe style={{border: "0", width: "100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120697.34852845206!2d72.77863188265533!3d19.028878826235974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ea93fae4d5%3A0xd94508ff3653739d!2sFood%20King%20Restaurant!5e0!3m2!1sen!2sin!4v1712643630226!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// </div>
// <div class="row gy-4">
//   <div class="col-md-6  ps-5">
//     <div class="info-item d-flex align-items-center">
//       <i class="icon bi bi-map flex-shrink-0"></i>
//       <div>
//         <h3>Our Address</h3>
//         <p>A108 Adam Street, Mumbai, NY 535022</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-6  ps-5">
//     <div class="info-item d-flex align-items-center">
//       <i class="icon bi bi-envelope flex-shrink-0"></i>
//       <div>
//         <h3>Email Us</h3>
//         <p>contact@example.com</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-6 ps-5">
//     <div class="info-item  d-flex align-items-center">
//       <i class="icon bi bi-telephone flex-shrink-0"></i>
//       <div>
//         <h3>Call Us</h3>
//         <p>+1 5589 55488 55</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-6  ps-5 pb-4">
//     <div class="info-item  d-flex align-items-center">
//       <i class="icon bi bi-share flex-shrink-0"></i>
//       <div>
//         <h3>Opening Hours</h3>
//         <div><strong>Mon-Sat:</strong> 11AM - 23PM;
//           <strong>Sunday:</strong> Closed
//         </div>
//       </div>
//     </div>
//   </div>

// </div>
// <form action="forms/contact.php" method="post" role="form" class="php-email-form p-3 p-md-4 bg-body-tertiary mb-2">
//   <div class="row ">
//     <div class="col-xl-6 form-group pb-3">
//       <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
//     </div>
//     <div class="col-xl-6 form-group pb-3">
//       <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
//     </div>
//   </div>
//   <div class="form-group pb-3">
//     <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
//   </div>
//   <div class="form-group pb-3">
//     <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
//   </div>
//   <div class="my-3">
//     <div class="loading">Loading</div>
//     <div class="error-message"></div>
//     <div class="sent-message">Your message has been sent. Thank you!</div>
//   </div>
//   <div class="text-center"><button type="submit" class="main-btn rounded-3">Send Message</button></div>
// </form>

// </div> */}
//     </div>
//     </>
//   )
// }

// export default ContactUs


