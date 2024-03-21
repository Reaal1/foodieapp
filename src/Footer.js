
import React from 'react';
import Foodieland2 from './Assets/Foodieland2.png' ;
import facebook2 from './Assets/001-facebookk.png'  ;
import X2 from './Assets/003-twitterr.png'  ;
import IGLogo from './Assets/004-instagramm.png'  ;



const Footer = () => {
    return ( 

        <footer className='footer_section'>
                <div className='footer_section_container'>
                <div><img className='footer_section_Image' src={Foodieland2} alt="Foodie_logo" />
                <p className='footer_section_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
                </div>
                <div className='footer_section_links'>
                    <a className='footer_section_links_a'  href="">Recipes</a>
                    <a className='footer_section_links_a' href="">Blog</a>
                    <a className='footer_section_links_a' href="">Contact</a>
                    <a className='footer_section_links_a' href="">About Us</a>
                </div>
                </div>
                <hr className='footer_section_line' />
                <div className='footer_section_certify_holder'>
                <div className='footer_section_certify'>
                    <div  className='footer_section_paragraph_certify_holder'>
                    <p className='footer_section_paragraph_certify'>© 2024 Kayode Okoli . Powered by <span className='footer_section_paragraph_certify_span'>React-JS</span>  </p>
                    </div>
                    <div className='footer_section-logo'>
                        <div><img className='footer_section_image' src={facebook2} alt="facebook2" /></div>
                        <div><img className='footer_section_image' src={X2} alt="X" /></div>
                        <div><img className='footer_section_image' src={IGLogo} alt="IG" /></div>
                    </div>
                </div>
                </div>
             </footer>
      
        
            
    )
    }
 
export default Footer;