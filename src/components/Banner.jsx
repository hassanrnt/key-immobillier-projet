import React from 'react';
// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 x1:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 x1:ml-[135] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-violet-700'>Rent</span>Your Dream House with Us.
        </h1>
        <p className='max-w-[480px] mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum alias dolorem quos quae illo repudiandae pariatur nostrum accusantium enim ipsam, quisquam ab minus eius animi consectetur aspernatur accusamus! Beatae.
        </p>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search />
  </section>;
};

export default Banner;
