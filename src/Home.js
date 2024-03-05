import HomeImage from './Assets/Featured Recipe.png';
import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='HomeImage_container'>
           <img className='HomeImage' src={HomeImage} alt="Recipe-Image" />
           </div>
        </div>
            
       
      );
}
 
export default Home;