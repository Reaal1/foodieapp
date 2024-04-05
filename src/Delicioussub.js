import SaladImage1 from './Assets/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png'  ;
import EggsImage from './Assets/Photo.png'  ;
import React from 'react';

const  DeliciousSub= () => {
    return (

        <div className='Delicious_sub'>
                    <p className='Delicious_sub_header'>Deliciousness to your inbox</p>
                    <p className='Delicious_sub_paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod 
                        <br />tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                    <div className='Delicious_sub_input'>
                        <div className='Delicious_sub_input_holder'>
                        <p className='Delicious_sub_input_email'>Your email address...</p>
                        <div className='Delicious_sub_button1' >
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
      );
}
 
export default DeliciousSub ;