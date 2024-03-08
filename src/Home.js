import HomeImage from './Assets/Featured Recipe.png';
import LeftImage from './Assets/Rectangle 5.png';
import RightImage from './Assets/Rectangle 6.png';
import BreakFast from './Assets/Group 836.png';
import Vegan from './Assets/Group 837.png';
import Meat from './Assets/Group 838.png';
import Dessert from './Assets/Group 839.png';
import Lunch from './Assets/Group 840.png';
import WagyfuImage from './Assets/Group 858.png';
import SalmonImage from './Assets/Group 859.png';
import PancakeImage from './Assets/Group 860.png';
import SaladImage from './Assets/Group 861.png';
import CreamCheeseImage from './Assets/Group 862.png';
import AdImage from './Assets/Ads.png';
import OrangeImage from './Assets/Group 863.png';
import PotChickenImage from './Assets/Group 864.png';
import BaconPastaImage from './Assets/Group 865.png';
import Chocolate from './Assets/Group 841.png';
import Chef from './Assets/Group 880.png';
import Post from './Assets/Post.png';
import Post1 from './Assets/Post (1).png';
import Post2 from './Assets/Post (2).png';
import Post3 from './Assets/Post (3).png';
import IG from './Assets/005-instagram.png';
import FruitSalad  from './Assets/Group 866.png';
import WagyfuBeef from './Assets/Group 867.png';
import JanapneseRice from './Assets/Group 868.png';
import VegeterianTaco from './Assets/Group 869.png';
import ChickenSalad from './Assets/Group 870.png';
import Sandwiches from './Assets/Group 871.png';
import VeganLettuce from './Assets/Group 872.png';
import ChickenRamen from './Assets/Group 873.png';
/*import SubscribeImage from './Assets/Mask Group.png';*/
import Foodieland2 from './Assets/Foodieland2.png' ;
import facebook2 from './Assets/001-facebookk.png'  ;
import X2 from './Assets/003-twitterr.png'  ;
import IGLogo from './Assets/004-instagramm.png'  ;
import SaladImage1 from './Assets/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png'  ;
import EggsImage from './Assets/Photo.png'  ;
import React from 'react';

const Home = () => {
    return (
        <div>
        <div className='HomeImages_container_Holder'>
           
            <div className='LeftImage_container'>
           <img className='LeftImage' src={LeftImage} alt="Left-Image" />
           </div>
            <div className='HomeImage_container'>
           <img className='HomeImage' src={HomeImage} alt="Recipe-Image" />
           </div>
           <div className='RightImage_container'>
           <img className='RightImage' src={RightImage} alt="Right-Image" />
           </div>
           </div>
           <div className='Foodie_categories'>
            <div className='Foodie_header_holder'>
             <p className='Foodie_header'>Categories</p>
             <div className='Foodie_subheader_body'>
             <p className='Foodie_subheader'>View All Categories</p>
             </div>
             </div>
             <div className='Meal-choice'>
            <div className='Meal-choice_image'> <img className='Breakfast_image' src={BreakFast} alt="Breakfast" /></div> 
            <div className='Meal-choice_image'>  <img className='Vegan_image'  src={Vegan} alt="Vegan" /></div> 
            <div className='Meal-choice_image'> <img className='Meat_image' src={Meat} alt="Meat" /></div> 
            <div className='Meal-choice_image'> <img className='Dessert_image' src={Dessert} alt="Dessert" /></div> 
            <div className='Meal-choice_image'> <img className='Lunch_image' src={Lunch} alt="Lunch" /></div> 
            <div className='Meal-choice_image'> <img className='Chocolate_image' src={Chocolate} alt="Chocolate" /></div> 
           </div>
           </div>
           <div className='Recipes_section'>
            <div className='Recipes_header_holder'>
            <h3 className='Recipes_header'>Simple and tasty recipes</h3>
            <p className='Recipes_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut 
            <br /> labore et dolore magna aliqut enim ad minim</p>
            </div>
            <div className='Recipes-Image_container'>
            <div className='Recipes-Image_container_subs'> 
            <div>  <img className='Recipes-Image' src={WagyfuImage} alt="Wagyfu-Image" /></div>
            <div>  <img className='Recipes-Image' src={SalmonImage} alt="Salmon-Image" /></div>
            <div>  <img className='Recipes-Image' src={PancakeImage} alt="Pancake-Image" /></div>
            </div>
            <div className='Recipes-Image_container_subs'>
            <div> <img className='Recipes-Image' src={SaladImage} alt="Salad-Image" /></div>
            <div> <img className='Recipes-Image' src={CreamCheeseImage} alt="CreamCheese-Image" /></div>
            <div> <img className='Recipes-Image' src={OrangeImage} alt="Orange-Image" /></div>
            </div>
            <div className='Recipes-Image_container_subs'>
            <div> <img className='Recipes-Image' src={PotChickenImage} alt="PotChicken-Image" /></div>
            <div> <img className='Recipes-Image' src={BaconPastaImage} alt="BaconPasta-Image" /></div>
            <div> <img className='Recipes-Image' src={AdImage} alt="Ad-Image" /></div>
            </div>
           </div>
           <div className='Chef_section_holder'>
            <div className='Chef_section'>
               <p className='Chef_section_header'>Everyone can be a
               chef in their own kitchen</p>
               <p className='Chef_section_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed 
               <br />do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
               <button className='Chef_section_button'>Learn More</button>
            </div>
            <div className='Chef_section_Image_holder'>
                <img className='Chef_section_Image' src={Chef} alt="Chef-Image" />
            </div>
           </div>
           </div>
           <div className='Instagram_section_holder'>
            <div className='Instagram_section_header'>
            <p className='Instagram_header'>Check out @Foodieland on 
            <br />Instagram </p>
            <p className='Instagram_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore 
             <br />   et dolore magna aliqut enim ad minim</p>
           </div>
           <div className='Instagram_section_Image'>
           <div> <img className='Instagram_section_post_Image' src={Post} alt="Post" /></div>
           <div> <img className='Instagram_section_post_Image' src={Post1} alt="Post1" /></div>
           <div> <img className='Instagram_section_post_Image' src={Post2} alt="Post2" /></div>
           <div> <img className='Instagram_section_post_Image' src={Post3} alt="Post3" /></div>
           </div>
           <div className='Instagram_section_button'>
           <div><button className='Instagram_button'>Visit Our Instagram <img className='Ig-Image' src={IG} alt="IG" /> </button></div>
           </div>
           </div>
           <div className='Delicious_recipies_holder'>
            <div className='Delicious_recipies_header_holder'>
                <p  className='Delicious_recipies_header'>
                Try this delicious recipe to make your day
                </p>
                <p className='Delicious_recipies_paragraph'>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                </p>
                </div>
                <div className='Delicious_recipies_Image_holder'>
                <div> <img className='Delicious_recipies_Image' src={FruitSalad} alt="Delicious_recipies" /></div>
                <div> <img className='Delicious_recipies_Image' src={WagyfuBeef} alt="Delicious_recipies1" /></div>
                <div> <img className='Delicious_recipies_Image' src={JanapneseRice} alt="Delicious_recipies2" /></div>
                <div> <img className='Delicious_recipies_Image' src={VegeterianTaco} alt="Delicious_recipies3" /></div>
                </div>
                <div className='Delicious_recipies_Image_holder'>
                <div> <img className='Delicious_recipies_Image' src={ChickenSalad} alt="Delicious_recipies4" /></div>
                <div> <img className='Delicious_recipies_Image' src={Sandwiches} alt="Delicious_recipies5" /></div>
                <div> <img className='Delicious_recipies_Image' src={VeganLettuce} alt="Delicious_recipies6" /></div>
                <div> <img className='Delicious_recipies_Image' src={ChickenRamen} alt="Delicious_recipies7" /></div>
                </div>
             </div>
           { /*<div className='Subscribe_section'>
                <div className='Subscribe_Image_section'>
                    <div className='Subscribe_ImageImg_holder'>
                    <img className='Subscribe_ImageImg' src={SubscribeImage} alt="SubscribeImage" />
                    </div>
                    <div className='Subscribe_section_header_holder'>
                    <p className='Subscribe_section_header'>Deliciousness to your inbox</p>
                    <p className='Subscribe_section_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
                    <br />incididunt ut labore et dolore magna aliqut enim ad minim</p>
                    <div className='Subscribe_section_collector'>
                    <div className='Subscribe_section_collector_sub' >
                        <p className='Subscribe_button_section'>Your email address...</p>
                        <button className='Subscribe_button'>subscribe</button>
                        </div>
                        </div>
                    </div>
                </div>
                </div> */}
                <div className='Delicious_sub'>
                    <p className='Delicious_sub_header'>Deliciousness to your inbox</p>
                    <p className='Delicious_sub_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod 
                        <br />tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                    <div className='Delicious_sub_input'>
                        <div className='Delicious_sub_input_holder'>
                        <p className='Delicious_sub_input_email'>Your email address...</p>
                        <div className='Delicious_sub_button' >
                        <button className='Delicious_sub_button'>Subscribe</button>
                    </div>
                    </div>
                    </div>
                    <div className='Delicious_sub_Image_holder'>
                    <div className='Delicious_sub_salad_holder'>
                    <img className='Delicious_sub_salad' src={SaladImage1} alt="Salad" />
                    </div>
                    <div className='Delicious_sub_eggs_holder'>
                    <img className='Delicious_sub_eggs' src={EggsImage} alt="Eggs" />
                    </div>
                    </div>
                </div>
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
        </div>
        
            
       
      );
}
 
export default Home;