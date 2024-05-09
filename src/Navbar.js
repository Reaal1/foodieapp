import FoodieImg from './Assets/Foodieland..png';
import FbImg from './Assets/001-facebook.png';
import XImg from './Assets/003-twitter.png';
import IGImg from './Assets/004-instagram.png';
import menuIcon from './Assets/menubar.svg';
import { Link } from 'react-router-dom';
import React from 'react';
const Navbar = () => {
       /* var hamburger = document.querySelector(".menubar");
    const navMenu = document.querySelector(".links");
    hamburger.addEventListener("click",() =>{
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
});

document.querySelectorAll(".react-link").forEach(n => n.addEventListener("click",()=>{
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
}));*/
    return ( 
        
       < div className='Navbar_holder'>
            <nav className='navbar'>
                <Link to="/" className='FoodieImg_container' >
               <img className='FoodieImage' src={FoodieImg} alt="Foodie-Logo" /> 
               </Link>
               <div className='links'>
               <Link to="/" className="react-link">Home</Link>
                <Link to="/recipes" className="react-link">Recipes</Link>
                <Link to="/BlogList" className="react-link">Blog</Link>
                <Link to="/Contact" className="react-link">Contact</Link>
                <Link to="/About" className="react-link">About-us</Link>
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