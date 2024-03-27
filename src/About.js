import DeliciousSub from './Delicioussub';
import Footer from './Footer';
import Chef from './Assets/Group 880.png';
import React from 'react';

const About = () => {
    return ( 
        <div className='About_us_section_container'>
            <div className='About_us_section'>
            <div className='About_us_container'>
            <div className='About_us_section_container_header'>
            <h2 className='About_us_section_header'>What is Foodieland about?</h2>
            <p className='About_us_section_paragraph'>Lorem ipsum dolor sit amet.</p>
            <p className='About_us_section_paragraph1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia veritatis nobis reprehenderit ad perferendis nulla voluptatem labore! In rerum dolores fugit saepe vero, sapiente et veniam totam numquam temporibus impedit culpa vitae sequi adipisci? Voluptates corporis magnam maxime, voluptatem eaque cumque iure, magni dignissimos eum repellat velit vel accusamus ducimus at quam neque commodi. Ut, ullam. Laborum, similique. Excepturi, ipsam assumenda voluptate voluptatum harum distinctio laudantium tempore animi. In delectus, veniam quasi repudiandae assumenda sit libero nulla aspernatur nemo eligendi ad illo consectetur optio. Debitis consequatur quis saepe quo doloribus necessitatibus dignissimos aliquid aspernatur voluptatibus, vitae, molestias quae cupiditate.</p>
        </div>
        <div className='About_us_section_image'>
        <div className='About_us_Chef_section_Image_holder'>
        <img className='About_us_Chef_section_Image' src={Chef} alt="Chef-Image" />
        </div>
        <p className='About_us_section_paragraph2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam voluptates maxime quod, sint fuga iure delectus quis minus impedit architecto ea voluptas vel nostrum vero officiis eligendi. Soluta amet dolor, a odit tempore, nemo veritatis tenetur alias blanditiis sunt aliquid? Aut aliquam eaque ea porro? Eum nesciunt sed exercitationem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam repellendus distinctio vel, consequuntur adipisci magni nam nobis quasi itaque error.</p>
        </div>
        
        <div className='About_us_objective_section'>
            <div className='About_us_objective'>
           <h3 className='About_us_objective_header'> Our Objectives </h3>
           <p className='About_us_objective_paragraph'>Lorem ipsum dolor sit.</p>
           <p className='About_us_objective_paragraph1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eum optio sequi error, ducimus culpa rerum voluptate exercitationem soluta magnam fugiat, ad quidem. Et, aliquam obcaecati. Ut, ad. Modi tenetur fugit ducimus et laborum est quos possimus cupiditate expedita exercitationem eligendi quasi nihil quas, porro eum delectus sunt. Magni, praesentium.</p>
        </div>
        <div>
            <p className='About_us_objective_paragraph'>Lorem ipsum dolor sit.</p>
            <p className='About_us_objective_paragraph1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam molestiae asperiores. Voluptatem alias neque voluptates beatae quod sed tempore quo blanditiis autem incidunt eum, totam assumenda doloribus distinctio velit consequuntur odit? Inventore totam placeat impedit amet dolorum nulla? Blanditiis iure velit dolores neque. Delectus dolor quisquam et vel ipsum.</p>
        </div>
        <div>
            <p className='About_us_objective_paragraph'>Lorem ipsum dolor sit.</p>
            <p className='About_us_objective_paragraph1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id numquam corporis ipsum sapiente magni provident amet laudantium quos cupiditate a veniam ex sint quibusdam asperiores aliquid odit nihil, repudiandae, quis atque nesciunt officia consequuntur libero ullam. Suscipit, minima distinctio. Placeat voluptatem voluptates debitis nam earum ipsum, adipisci esse animi.</p>
        </div>
        </div>
        </div>
        <div className='About_us_section_right_container'>
            <h2 className='About_us_section_right_container_header'>TESTIMONIALS</h2>
            <div className='About_us_section_right_testimonial_container'>
                <p className='About_us_section_right_testimonial_paragraph'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Neque molestiae facere quas officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus atque vel quidem porro officia aperiam. Est amet ipsam numquam"</p>
                <p className='About_us_section_right_testimonial_author1'>Teniola Okoli</p>
            </div>
            <div className='About_us_section_right_testimonial_container'>
                <p className='About_us_section_right_testimonial_paragraph'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi laboriosam nemo eum, nulla nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus atque vel quidem porro officia aperiam. Est amet ipsam numquam"</p>
                <p className='About_us_section_right_testimonial_author2'>Opeyemi Otemuye</p>
            </div>
            <div div className='About_us_section_right_testimonial_container'>
                <p className='About_us_section_right_testimonial_paragraph'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolores, blanditiis excepturi nihil eligendi expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus atque vel quidem porro officia aperiam. Est amet ipsam numquam"</p>
                <p className='About_us_section_right_testimonial_author3'>Barz!</p>
            </div>
            <div div className='About_us_section_right_testimonial_container'>
                <p className='About_us_section_right_testimonial_paragraph'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim, similique aut eos sequi facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus atque vel quidem porro officia aperiam. Est amet ipsam numquam"</p>
                <p className='About_us_section_right_testimonial_author4'>Bhad Boi OML!</p>
            </div>
        </div>
        </div>
        <DeliciousSub/>
       <Footer/>
        </div>
     );
}
 
export default About;