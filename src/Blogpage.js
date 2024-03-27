import React from 'react';
import ContactEllipse from './Assets/Ellipse 2 (6).svg';
import BlogImage from './Assets/Mask Group (5).svg';
import LadyKitchen from './Assets/Rectangle 23.svg';
import faceBook1 from './Assets/001-facebook.svg';
import x9 from './Assets/003-twitter.svg';
import InstaGram from './Assets/004-instagram.svg';
import DeliciousSub from './Delicioussub';
import Footer from './Footer';
const Blogpage = () => {
    return ( 
        <div className='Blogpage_section'>
            
            <h1 className='Blogpage_header'>Full Guide to Becoming a Professional Chef</h1>
            <div className='Blogpage_header_lower'>
            <img src={ContactEllipse} alt="" />
            <p className='Blogpage_name_lower'>John Smith</p>
            <hr className='Blogpage_header_lower_line'/>
            <p className='Blogpage_header_lower_date'>15 March 2024</p>
            </div>
            <p className='Blogpage_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            <div className='Blogpage_image_holder'>
            <img className='Blogpage_image' src={BlogImage} alt="" />
            </div>
            <div className='Blogpage-header_content'>
            <div className='Blogpage-content_container'>
            <div className='Blogpage-content_paragraphs'>
            <p className='Blogpage-header'>How did you start out in the food industry?</p>
            <p className='Blogpage-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
            <div className='Blogpage-content_paragraphs'>
            <p className='Blogpage-header'>What do you like most about your job?</p>
            <p className='Blogpage-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
           <p className='Blogpage-header'>Do you cook at home on your days off?</p>
            <img className='Blogpage_lady' src={LadyKitchen} alt="" />
            <p className='Blogpage-paragraph1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            <p className='Blogpage-header1'>What would your advice be to young people looking to get their foot in the door?</p>
            <p className='Blogpage-paragraph1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            <div className='Blogpage-container'>
                <p className='Blogpage-container_text'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</p>
            </div>
            <p className='Blogpage-header'>What is the biggest misconception that people have about being a professional chef?</p>
            <p className='Blogpage-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
            <div className='Blogpage_share_socials' >
                <p className='Blogpage_share_socials_header'>SHARE THIS ON:</p>
                <div className='Blogpage_socials'>
                <img src={faceBook1} alt="" />
                </div>
                <div className='Blogpage_socials'>
                <img src={x9} alt="" />
                </div>
                <div className='Blogpage_socials'>
                <img src={InstaGram} alt="" />
                </div>
          </div>
          </div>
          <DeliciousSub/>
       <Footer/>
        </div>
     );
}
 
export default Blogpage;