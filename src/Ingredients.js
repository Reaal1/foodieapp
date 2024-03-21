import MeatBall  from './Assets/Mask Group0.png';
import Creamy  from './Assets/Mask Group (1).png';
import ChickenRice from './Assets/Mask Group (2).png';
import Advert from './Assets/Adverts.png';
import React from 'react';

const Ingredients = () => {
    return ( 
        <div className='Ingredients_lower_section'>
        <p className='Ingredients_lower_section_paragraph'>Other Recipe</p>
        <div className='Ingredients_lower_content_holder'>
      <div className='Ingredients_lower_section__recipes'>
        <img className='Ingredients_specs' src={MeatBall} alt="Meat-Ball" />
        <div className='Ingredients_lower_section__recipes_author'>
        <p className='Ingredients_lower_paragraph'>Chicken Meatball with Creamy Chees...</p>
        <p className='Ingredients_lower_paragraph_author'>By Andreas Paula</p>
        </div>
      </div>
      <div className='Ingredients_lower_section__recipes'>
        <img  className='Ingredients_specs' src={Creamy} alt="Creamy" />
        <div className='Ingredients_lower_section__recipes_author'>
      <p className='Ingredients_lower_paragraph'>The Creamiest Creamy Chicken an...</p>
      <p className='Ingredients_lower_paragraph_author'>By Andreas Paula</p>
      </div>
      </div>
      <div className='Ingredients_lower_section__recipes'>
        <img className='Ingredients_specs' src={ChickenRice} alt="Chicken" />
        <div className='Ingredients_lower_section__recipes_author'>
        <p className='Ingredients_lower_paragraph'>The Best Easy One Pot Chicken and Rice</p>
        <p className='Ingredients_lower_paragraph_author'>By Andreas Paula</p>
        </div>
        </div>
        <div className='Advert-section'>
           <img className='Advert' src={Advert} alt="ads" />
            </div>
        </div>
    </div>
     );
}
 
export default Ingredients;