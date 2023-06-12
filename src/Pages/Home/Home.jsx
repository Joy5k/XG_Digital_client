import React from 'react';
import './Home.css';
import victor from '../../assets/Home/Vector.png'
const Home = () => {
    return (
        <div className='text-white bg-img bg-no-repeat bg-cover h-screen flex items-center justify-center'>
            <img className='fixed -top-10 right-0' src={victor} alt="" />
        <div className='text-center'>
          <h4 className='font-bold text-7xl my-4'>Cost Effective Digital <br /> Marketing Agency</h4>
          <p>Sed parturient rutrum etiam bibendum arcu, cursus proin justo id. Magna a amet et.</p>
                <button className='btn bg-blue-600 p-2 my-4 rounded-full text-white tracking-2'>Learn More</button>
            </div>
      </div>
      
    );
};

export default Home;