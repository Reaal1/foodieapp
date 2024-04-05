import React from 'react';
import Picture from './Assets/Group 13936.svg';
import Vector7 from './Assets/Vector 7.svg';
import DeliciousSub from './Delicioussub';
import Footer from './Footer';
import DeliciousRecipies from './Delicousrecipes';

const Contact = () => {
    
    return ( <div>
    <div className='Contact_section'>
        <div className='Contact_Image_holder'>
            <img className='Contact_Image' src={Picture} alt="" />
        </div>
        <div className='Contact_General_input_holder'>
        <h1 className='Contact_header'>Contact Us</h1>
        <div className='Contact-input_selector_holder'>
        <div className='Contact_input_holder'>
        <div>
        <p className='Contact_input_paragraph'>NAME</p>
        <input type="text" placeholder="Enter your name..." className="Contact_input_container" />
        </div>
        <div>
        <p className='Contact_input_paragraph'>EMAIL ADDRESS</p>
        <input type="text" placeholder="Your Email Address..." className="Contact_input_container" />
        </div>
        </div>
        <div className='Contact_input_holder'>
        <div>
        <p className='Contact_input_paragraph'>SUBJECT</p>
        <input type="text" placeholder="Enter Subject..." className="Contact_input_container" />
        </div>
        <div>
        <p className='Contact_input_paragraph'>ENQUIRY TYPE</p>
        <div>
        <input type="text" placeholder="Advertising" className="Contact_input_container" />
        <img className='Contact_vector' src={Vector7} alt="" />
        </div>
        </div>
        </div>
        <div>
        <p className='Contact_input_paragraph1'>MESSAGES</p>
        <input type="text" placeholder="Enter your Messages..." className="Contact_input_container1" />
        </div>
        <div className='Contact_button_holder'>
        <button className='Contact_button'>Submit</button>
        </div>
        </div>
        </div>
        </div>
     <DeliciousSub/>
     <DeliciousRecipies/>
       <Footer/>
 </div>
    )
}
 
export default Contact;