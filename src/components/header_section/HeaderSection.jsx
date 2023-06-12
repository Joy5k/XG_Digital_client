import React from 'react';
import './HeaderSection.css';
import main1 from '../../assets/Home/main1.png'
import main2 from '../../assets/Home/main2.png'
import camera from '../../assets/Home/camera.png'
const HeaderSection = () => {
    return (
        <div>
            <div className='margin-top h-screen relative'>
                <div className='side_color'></div>

                <p style={{ color: 'cyan' }} className=' text-center  font-bold'>WHAT WE OFFER</p>
                <h3 className='font-bold text-6xl text-center mb-10'>Provide Web, Mobile And <br /> Custom Design Solution</h3>

                <div className='flex w-full mx-auto margin-top'>
                    <div class='w-1/2 flex flex-col '>
                        {/* cart */}
                        <div className="card card-side bg-base-100  shadow-xl mx-auto w-10/12 m-4 ml-10
                    ">
  <figure><img className='h- rounded-none' src={main1} alt="Movie"/></figure>
  <div className=" w-96 ml-3 ">
      <div className='h-44 mt-10'>
                                <h2 className="card-title">Web Development</h2>
    <p>Dis integer faucibus vitae sit vivamus. Nullam adipiscing convallis sodales feugiat quam magna nec ornare. Ut mus.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-center rounded-l-full">Read More</button>
    </div>
    </div>
          </div>
                    </div>
     <div className='bg-gray-900 width h-64 text-center mx-auto p-4 rounded-lg '>
                            <img  className='text-center mx-auto rounded-lg' src={camera} alt="" />
                            <p className='text-white font-semibold my-4'>Video Production</p>
                            <a style={{ color: 'cyan' }}  className='' href="/" target="_blank" >
                                Watch Video
                            </a>
        </div>
                    </div>
                    <div className='w-1/2 mx-auto'>
                        <img className='mx-auto' src={main2} alt="" />
                   </div>
             </div>
            </div>
        </div>
    );
};

export default HeaderSection;