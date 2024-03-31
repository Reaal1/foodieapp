import React from 'react';
import FruitSalad  from './Assets/Group 866.png';
import WagyfuBeef from './Assets/Group 867.png';
import JanapneseRice from './Assets/Group 868.png';
import VegeterianTaco from './Assets/Group 869.png';
import ChickenSalad from './Assets/Group 870.png';
import Sandwiches from './Assets/Group 871.png';
import VeganLettuce from './Assets/Group 872.png';
import ChickenRamen from './Assets/Group 873.png';

const DeliciousRecipies = () => {
    return ( 

        <div className='Delicious_recipies_holder'>
            <div className='Delicious_recipies_header_holder'>
                <p  className='Delicious_recipies_header'>
                Try this delicious recipe to make your day
                </p>
                <p className='Delicious_recipies_paragraph'>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                </p>
                </div>
                <div className='Delicious_recipies_container'>
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
             </div>
     );
}
 
export default DeliciousRecipies ;