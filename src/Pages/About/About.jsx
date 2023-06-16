import React from 'react';
import main1 from '../../assets/Home/main1.png'
import './About.css'
const About = () => {
    return (
        <div>
            <div 
                className='w-screen relative text-black bg-image bg-no-repeat bg-cover  h-screen flex items-center justify-center'>
            <img className='fixed -top-10 right-0' src={main1} alt="" />
        <div className='text-center'>
          <h4 className='font-bold text-7xl my-4 text-white'>About us</h4>
    
            </div>

 
            </div>

    
        </div>
    );
};

export default About;