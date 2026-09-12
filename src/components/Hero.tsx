import React from 'react';
import HeroImage from "../assets/hero.png"

const Hero = () => {
    return (
        <section className="flex items-center justify-between px-20 py-20">
        <div className='w-1/2'>
            <h2 className='text-3xl font-bold'>Build Your Ideal</h2><br></br>
            <span className='text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span>
             <p className="mt-5 max-w-md  text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-7 flex gap-4">
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2.5 text-xs font-medium text-white shadow-sm">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-5 py-2.5 text-xs font-medium text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        <div className='w-1/2 '>
            <img src={HeroImage} alt="hero" className='w-80 '></img>
        </div>
        </section>
    );
};

export default Hero;