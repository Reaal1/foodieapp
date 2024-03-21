import React from 'react';
import ManEllipse from './Assets/Ellipse 2.png';
import TimeEllipse from './Assets/Timer.png';
import TimeEllipse1 from './Assets/Timer.png';
import CutleryEllipse from './Assets/ForkKnife.png';
import Print from './Assets/Group 901.png';
import Share from './Assets/Group 900 (1).png';
import RecipePhoto from './Assets/Group 13937.png';
import Ingredients from './Ingredients';
import LadyImage from './Assets/Rectangle 23.png';
import DeliciousSub from './Delicioussub' ;
import DeliciousRecipies from './Delicousrecipes' ;
import Footer from './Footer';




const Recipes = () => {
    return (
     <div className='Recipes_section'>
        <h1 className='Recipes_section_header'>Recipes Header</h1>
        <div className='Recipes_section_menu'>
        <div className='Recipes_section_menu_sub'>
            <div className='Recipes_submenu_sub_holder '>
             <div><img className='Recipes_submenu_sub_holder-Image' src={ManEllipse} alt="Man-Image" /></div>
            <div className='Recipes_submenu_etas'>
            <p className='Recipes_submenu_name1'>John Smith</p>
            <p className='Recipes_submenu_sub_time1'>15 March 2022</p>
            </div >
            </div>
            <hr className='Recipes_submenu_sub_line'></hr>
            <div className='Recipes_submenu_sub_holder'>
            <div>  <img  src={TimeEllipse} alt="Time-Image" /> </div>
            <div className='Recipes_submenu_etas'>
            <p className='Recipes_submenu_name'>PREP TIME</p>
            <p className='Recipes_submenu_sub_time'>15 Minutes</p>
            </div>
            </div>
            <hr className='Recipes_submenu_sub_line'></hr>
            <div className='Recipes_submenu_sub_holder'>
            <div><img className='Recipes_submenu_sub_holder-Image' src={TimeEllipse1} alt="Time-Image" /></div>
            <div className='Recipes_submenu_etas'>
            <p className='Recipes_submenu_name'>COOK TIME</p>
            <p className='Recipes_submenu_sub_time'>15 Minutes</p>
            </div>
            </div>
            <hr className='Recipes_submenu_sub_line'></hr>
            <div className='Recipes_submenu_sub_holder'>
            <div><img className='Recipes_submenu_sub_holder-Image' src={CutleryEllipse} alt="cutlery-Image" /></div>
            <div className='Recipes_submenu_sub_holder'>
            <p>Chicken</p>
            </div>
           </div>
        </div>
        <div className='Recipes_submenu_lower_section'>
            <div className='Recipes_submenu_lower_container'>
          <div className='Recipes_submenu_lower_image'>< img className='Recipes_submenu_lower_image_class' src={Print} alt="PrintImage" /></div>
            <p className='Recipes_submenu_lower_name'>PRINT</p>
            </div>
            <div className='Recipes_submenu_lower_container'>
            <div className='Recipes_submenu_lower_image'>  <img className='Recipes_submenu_lower_image_class' src={Share} alt="ShareImage" /></div>
            <p className='Recipes_submenu_lower_name'>SHARE</p>
        </div>
        </div>
        </div>
        <div className='Nutrition_section'>
            <div className='Nutrition_section_image_container'>
               <img className='Nutrition_section_image' src={RecipePhoto} alt="Food" /> 
            </div>
       
            <div className='Nutrition_section_details'>
                <h3 className='Nutrition_section_header'>Nutrition Information</h3>
                <div className='Nutrition_section_header_holder'>
                <div className='Nutrition_section_sub' >
                <p className='Nutrition_section_sub_paragraph'>Calories</p>
                <p className='Nutrition_section_sub_end'>219.9kcal</p>
                </div>
                <hr className='Nutrition_section_sub_lines'/>
                <div className='Nutrition_section_sub'>
                <p className='Nutrition_section_sub_paragraph'>TotalFat</p>
                <p className='Nutrition_section_sub_end'> 10.7g</p>
                </div>
                <hr className='Nutrition_section_sub_lines' />
                <div className='Nutrition_section_sub'>
                <p className='Nutrition_section_sub_paragraph'>Protein</p>
                <p className='Nutrition_section_sub_end'>7.9g</p>
                </div>
                <hr className='Nutrition_section_sub_lines' />
                <div className='Nutrition_section_sub'>
                <p className='Nutrition_section_sub_paragraph'>Carbohydrate</p>
                <p className='Nutrition_section_sub_end'>22.3g</p>
                </div>
                <hr className='Nutrition_section_sub_lines' />
                <div className='Nutrition_section_sub'>
                <p className='Nutrition_section_sub_paragraph'>Cholesterol</p>
                <p className='Nutrition_section_sub_end'>37.4mg</p>
                </div>
                </div>
                <hr  className='Nutrition_section_sub_lines'/>
                <p className='Nutrition_section_sub_paragraph1' >adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua.</p>
                 </div>
        </div>
        <div className='Nutrition_section_sub_end_paragraph'>
            <p className='Nutrition_section_sub_end_paragraph1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='Ingredients_section'>
            <div className='Ingredients_section_content'>
            <p className='Ingredients_section_Header'>Ingredients </p>
            <p className='Ingredients_section_Header1'>For main dish</p>

            <div className='Ingredients_section_checkbox_holder'>
            <div className='Ingredients_section_checkbox'>
            <div className='round'>  
            <input className='Ingredients_section_check' checked type="checkbox" />
            <label for="checkbox"></label>
            </div>
            
                <p className='Ingredients_section_paragraph'>Lorem ipsum dolor sit amet</p>
            </div>
            
            <hr className='Ingredients_section_line'/>
            <div className='Ingredients_section_checkbox'>
            <div className='round'>  
                <input className='Ingredients_section_check' checked type="checkbox" />
                <label for="checkbox"></label>
                </div>
                <p className='Ingredients_section_paragraph'>Lorem ipsum dolor sit amet</p>
            </div>
            <hr className='Ingredients_section_line'/>
            <div className='Ingredients_section_checkbox'>
                <div className='round'>
                <input className='Ingredients_section_check' checked type="checkbox" />
                <label for="checkbox"></label>
                </div>
                <p className='Ingredients_section_paragraph'>Lorem ipsum dolor sit amet</p>
            </div>
            <hr className='Ingredients_section_line'/>
            <div className='Ingredients_section_checkbox' >
            <div className='round'>
                <input className='Ingredients_section_check' checked type="checkbox" />
                <label for="checkbox"></label>
                </div>
                <p className='Ingredients_section_paragraph'>Lorem ipsum dolor sit amet</p>
            </div>
            <hr className='Ingredients_section_line'/>
            <div className='Ingredients_section_checkbox'>
            <div className='round'>
                <input className='Ingredients_section_check' checked type="checkbox" />
                <label for="checkbox"></label>
                </div>
                <p className='Ingredients_section_paragraph'>Lorem ipsum dolor sit amet</p>
            </div>
              <hr className='Ingredients_section_line'/>
              <div className='Ingredients_section_checkbox' >
            <div className='round'>
                <input className='Ingredients_section_check' checked type="checkbox" />
                <label for="checkbox"></label>
                </div>
                <p className='Ingredients_section_paragraph'>Lorem ipsum dolor sit amet</p>
            </div>
            <hr className='Ingredients_section_line'/>
            <div className='Ingredients_section_checkbox' >
            <div className='round'>
                <input className='Ingredients_section_check' checked type="checkbox" />
                <label for="checkbox"></label>
                </div>
                <p className='Ingredients_section_paragraph'>Lorem ipsum dolor sit amet</p>
            </div>
            <hr className='Ingredients_section_line'/>
            </div>
            </div>
            <Ingredients/>
            
        </div>
        <div className='Direction-section_holder'>
        <p className='Directions-header'>Directions</p>
        </div>
        <div className='Direction-section'>
            <ol className='Direction-section_ol'>
                <li className='Direction-section_paragraph'><p className='Direction-section_paragraph_content'>Lorem ipsum dolor sit amet</p>
                <div className='Direction-section_paragraph_container'>
                <p className='Direction-section_ol_paragraph'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                 <div className='Direction-section_ol_image_holder'><img className='Direction-section_ol_image' src={LadyImage}  alt="Lady" /></div>
                <p className='Direction-section_ol_paragraph'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                </li>
                <hr className='Direction-section_ol_line'/>
                <li className='Direction-section_paragraph'><p p className='Direction-section_paragraph_content'>Lorem ipsum dolor sit amet</p>
                <div className='Direction-section_paragraph_container'>
                <p className='Direction-section_ol_paragraph'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                </li>
                <hr className='Direction-section_ol_line'/>
                <li className='Direction-section_paragraph'><p p className='Direction-section_paragraph_content'>Lorem ipsum dolor sit amet</p>
                <div className='Direction-section_paragraph_container'>
                <p className='Direction-section_ol_paragraph'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                </li>
                <hr className='Direction-section_ol_line'/>
            </ol>
            
        </div>
        <DeliciousSub/>
        <DeliciousRecipies/>
        <Footer/>
     </div>

      );
}
 
export default Recipes;