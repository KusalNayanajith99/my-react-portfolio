import React from 'react';
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
        <button className='btn btn-sm'>Contact me</button>
      </div>
    </div>
  </header>;
};

export default Header;
