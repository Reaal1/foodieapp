import FoodieImg from './Assets/Foodieland..png';
import FbImg from './Assets/001-facebook.png';
import XImg from './Assets/003-twitter.png';
import IGImg from './Assets/004-instagram.png';
import { Link } from 'react-router-dom';
import React from 'react';
const Navbar = () => {
    return ( 
        
       < div className='Navbar_holder'>
            <nav className='navbar'>
                <div className='FoodieImg_container'>
               <img className='FoodieImage' src={FoodieImg} alt="Foodie-Logo" /> 
               </div>
               <div className='links'>
               <Link to="/">Home</Link>
                <Link to="/Recipes-Details">Recipes</Link>
                <Link to="/BlogList">Blog</Link>
                <Link to="/Contact-Page">Contact</Link>
                <Link to="/create">About us</Link>
                </div>
                <div className='socials'>
               <a > <img className='FbImage' src={FbImg} alt="" /> </a>
               <a > <img className='XImage' src={XImg} alt="" /> </a>
               <a > <img className='IGImage'  src={IGImg} alt="" /> </a>
                </div>
                
            </nav>
            
            </div>
            
    
     );
}
 
export default Navbar;