import React from 'react'
import banner from '../../assets/banner.png'

const HeroSection = () => {
  return (
    <>
      <div className='relative'>

        {/* Banner Image */}
        <div>
          <img src={banner} alt='Banner Image' className='w-full object-cover object-center' />
        </div>

        {/* Hero Text */}
        <div className='absolute top-[10%] left-[5%] text-white px-4 md:px-8'>
          <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-[#066a06] leading-tight'>
            Your one-stop shop for all your needs.
          </h1>
        </div>
      </div>
    </>
  )
}

export default HeroSection