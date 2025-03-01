import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import profileLogo from "../../public/edits.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  min-h-screen'>
        <div className='mt-15 pt-20 min-h-screen'>
          <h2 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 to-pink-500 '>
            About-US
          </h2>
          <p className='mt-12  font-bold text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 to-pink-500 text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aspernatur nesciunt commodi quae praesentium ea ratione quia esse maxime quod, eveniet, totam natus minima libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed iure inventore sunt?
          </p>

          <Link to='/' className='mt-20 pt-20 flex justify-center font-mono text-3xl text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 to-pink-500 container mx-auto md:px-20 px-4 hover:text-blue-200 hover:scale-105 duration-200 cursor-pointer '>  Created by Rizwan..
          </Link>
          <Link to="/" className=' mt-10 flex justify-center  cursor-pointer '>
            <img
              src={profileLogo}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover hover:scale-105 duration-200"

            />
          </Link>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
