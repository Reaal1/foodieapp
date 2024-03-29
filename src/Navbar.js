import FoodieImg from './Assets/Foodieland..png';
import FbImg from './Assets/001-facebook.png';
import XImg from './Assets/003-twitter.png';
import IGImg from './Assets/004-instagram.png';
import menuIcon from './Assets/menubar.svg';
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
                <Link to="/recipes">Recipes</Link>
                <Link to="/BlogList">Blog</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/About">About us</Link>
                </div>
                <div className='socials'>
               <a > <img className='FbImage' src={FbImg} alt="" /> </a>
               <a > <img className='XImage' src={XImg} alt="" /> </a>
               <a > <img className='IGImage'  src={IGImg} alt="" /> </a>
                </div>
                <div className="menubar"> <img src={menuIcon} alt="" className="menu-icon"/></div>
            </nav>
           
            
            </div>
            
    
     );
}
 
export default Navbar;