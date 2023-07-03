import React from 'react';
import { Link } from 'react-scroll';
//images
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        {/* <a herf="/"> */}
        <img src={Logo} alt='image4' style={{ width: '150px', height: '40px' }} />
        {/* </a> */}
        {/* button */}
        <Link to='contact' smooth={true} spy={true} className='btn btn-sm flex items-center justify-center cursor-pointer'>
          Contact me
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;
