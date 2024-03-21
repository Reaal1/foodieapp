import Ingredients from './Ingredients';
import Crochet from './Assets/Mask Group.svg';
import Veg10 from './Assets/image 26.svg';
import Fullgu from './Assets/Mask Group (1).svg';
import SimpleDe from './Assets/Mask Group (2).svg';
import Plantain from './Assets/Mask Group (3).svg';
import Hire from './Assets/Mask Group (4).svg';
import EllipseImage from './Assets/Ellipse 2.svg';
import EllipseImage1 from './Assets/Ellipse 2 (1).svg';
import EllipseImage2 from './Assets/Ellipse 2 (2).svg';
import EllipseImage3 from './Assets/Ellipse 2 (3).svg';
import EllipseImage4 from './Assets/Ellipse 2 (4).svg';
import EllipseImage5 from './Assets/Ellipse 2 (5).svg';
import DeliciousSub from './Delicioussub';
import Footer from './Footer';

import React from 'react';

const Bloglist = () => {
    return ( 
        <div className='Blog_section'>
            <div className='Blog_section_header_holder'>
            <p className='Blog_section_Header'>Blog & Article</p>
            <p className='Blog_section_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
            <div className='Blog_section_search'>
                <p className='Blog_section_search_paragraph'>Search article, news or recipe...</p>
                <button className='Blog_section_search_button'>Search</button>
            </div>
            <div className='Blog_holder'> 
                <div className='Blog_content_section'>
                    <div>
                    <div className='Blog_content_holder' >
                        <div className=''>
                        <img src={Crochet} alt="Crochet" />
                        </div>
                        <div>
                        <div className='Blog_content_text_container'>
                        <p className='Blog_content_header'>Crochet Projects for Noodle Lovers</p>
                        <p className='Blog_content_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>
                        </div>
                        <div className='Blog_content_text_container_lower'>
                        <div  className='Blog_content_text_container_image'>
                        <img src={EllipseImage} alt="" />
                        </div>
                        <p className='Blog_content_text_lower'>Wade Warren</p>
                        <hr className='Blog_content_text_lower_line' />
                        <p className='Blog_content_text_lower1'>12 November 2024</p>
                       
                        </div>
                        </div>
                    </div>
                    <div className='Blog_content_holder'>
                    <div >
                        <img className='Blog_content_photo' src={Veg10} alt="Vegetables" />
                        </div>
                        <div>
                        <div className='Blog_content_text_container'>
                        <p className='Blog_content_header'>10 Vegetarian Recipes To Eat This Months</p>
                        <p className='Blog_content_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>
                        </div>
                        <div className='Blog_content_text_container_lower'>
                        <div  className='Blog_content_text_container_image'>
                        <img src={EllipseImage1} alt="" />
                        </div>
                        <p className='Blog_content_text_lower'>Robert Fox</p>
                        <hr className='Blog_content_text_lower_line' />
                        <p className='Blog_content_text_lower1'>12 November 2024</p>
                        </div>
                        </div>
                    </div>
                    <div className='Blog_content_holder'>
                    <div >
                        <img src={Fullgu} alt="Full-guide" />
                        </div>
                        <div>
                        <div className='Blog_content_text_container'>
                        <p className='Blog_content_header'>Full Guide to Becoming a Professional Chef</p>
                        <p className='Blog_content_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>
                        </div>
                        <div className='Blog_content_text_container_lower'>
                        <div  className='Blog_content_text_container_image'>
                        <img src={EllipseImage2} alt="" />
                        </div>
                        <p className='Blog_content_text_lower'>Diane Russell</p>
                        <hr className='Blog_content_text_lower_line' />
                        <p className='Blog_content_text_lower1'>12 November 2024</p>
                        </div>
                    </div>
                    </div>
                    <div className='Blog_content_holder'>
                    <div>
                        <img src={SimpleDe} alt="Simply-Delicious" />
                        </div>
                        <div>
                        <div className='Blog_content_text_container'>
                        <p className='Blog_content_header'>Simple & Delicious Vegetarian Lasagna</p>
                        <p className='Blog_content_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>
                        </div>
                        <div className='Blog_content_text_container_lower'>
                        <div  className='Blog_content_text_container_image'>
                        <img src={EllipseImage3} alt="" />
                        </div>
                        <p className='Blog_content_text_lower'>Leslie Alexander</p>
                        <hr className='Blog_content_text_lower_line' />
                        <p className='Blog_content_text_lower1'>12 November 2024</p>
                        </div>
                        </div>
                    </div>
                    <div className='Blog_content_holder'>
                    <div >
                        <img src={Plantain} alt="Plantain" /> 
                        </div>
                        <div>
                        <div className='Blog_content_text_container'>
                        <p className='Blog_content_header'>Plantain and Pinto Stew with Aji Verde</p>
                        <p className='Blog_content_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>
                        </div>
                        <div className='Blog_content_text_container_lower'>
                        <div  className='Blog_content_text_container_image'>
                        <img src={EllipseImage4} alt="" />
                        </div>
                        <p className='Blog_content_text_lower'>Courtney Henry</p>
                        <hr className='Blog_content_text_lower_line'/>
                        <p className='Blog_content_text_lower1'>12 November 2024</p>
                        </div>
                        </div>
                    </div>
                    <div className='Blog_content_holder'>
                    <div >
                        <img src={Hire} alt="Hire-Me" /> 
                        </div>
                        <div>
                        <div className='Blog_content_text_container'>
                        <p className='Blog_content_header'>We’re Hiring a Communications Assistant!</p>
                        <p className='Blog_content_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>
                        </div>
                        <div className='Blog_content_text_container_lower'>
                        <div  className='Blog_content_text_container_image'>
                        <img src={EllipseImage5} alt="" />
                        </div>
                        <p className='Blog_content_text_lower'>Albert Flores</p>
                        <hr className='Blog_content_text_lower_line'/>
                        <p className='Blog_content_text_lower1'>12 November 2024</p>
                        </div>
                        </div>
                    </div>
                    </div>
                <Ingredients/>
            </div>
            </div>
            <div className='Blog_numbers'>
                <div className='Blog_numbers1'>
                <p>1</p>
                </div>
                <div className='Blog_numbers2'>
                <p>2</p>
                </div>
                <div className='Blog_numbers3'>
                <p>3</p>
                </div>
                <div className='Blog_numbers4'>
                <p>4</p>
                </div>
                <div className='Blog_numbers5'>
                <p>5</p>
                </div>
                <div className='Blog_numbers6'>
                <p>...</p>
                </div>
                <div className='Blog_numbers7'>
                <p>{"("}</p>
                </div>
            </div>
            <DeliciousSub/>
            <Footer/>
        </div>  
        
     );
}
 
export default Bloglist;