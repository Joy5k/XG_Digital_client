import React from 'react';
import './Home.css';
import victor from '../../assets/Home/Vector.png'
import img1 from '../../assets/Home/image 3.png'
import circle from '../../assets/Home/image 1.png'
import img2 from '../../assets/Home/image 2.png'
const Home = () => {
    return (
        <div className='w-screen relative text-white bg-img bg-no-repeat bg-cover h-screen flex items-center justify-center'>
            <img className='fixed -top-10 right-0' src={victor} alt="" />
        <div className='text-center'>
          <h4 className='font-bold text-7xl my-4'>Cost Effective Digital <br /> Marketing Agency</h4>
          <p>Sed parturient rutrum etiam bibendum arcu, cursus proin justo id. Magna a amet et.</p>
                <button className='btn bg-blue-600 p-2 my-4 rounded-full text-white tracking-2'>Learn More</button>
            </div>

            <div className='flex justify-between  
            w-full absolute bottom-0 p-4 '>
  <div className='flex mx-auto w-1/2 '>
    <img className='w-52 h-48  ' src={img1} alt="" />
    <img className='w-36 h-36 mt-10' src={img2} alt="" />
  </div>
    <img className='w-52 h-48' src={circle} alt="" />
</div>

      </div>
      
    );
};

export default Home;