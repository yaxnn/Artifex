import React from 'react';
import { assets } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to='/'>
    <div>
      <img src={assets.logo} alt="Artifex Logo" className='w-28 sm:w-30 lg:w-40'/>
    </div>
    </Link>

    









  );
};

export default Navbar;
