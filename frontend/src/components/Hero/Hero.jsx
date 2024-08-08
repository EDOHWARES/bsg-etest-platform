import React from 'react';
import heroImage from '../../assets/images/girlreading.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero min-h-[80vh] px-10 py-4 bg-no-repeat bg-center bg-cover flex items-center justify-center'>
      <div className="content text-center text-white">
            <h1 className="text-7xl mb-5"><span className='border-t-4 border-t-yellow-400'>Master</span> Your Tests And Exams With <br /> Confidence!</h1>
            <p className='mb-5 text-gray-300'>Empower your academic journey with our e-test platform. <br />Practice with past questions, track your progress, and excel in your exams like never before.</p>
            <button className='bg-yellow-400 px-4 py-2 text-black text-xl font-bold hover:scale-105 duration-500'>Test Yourself</button>
      </div>
    </div>
  )
}

export default Hero
