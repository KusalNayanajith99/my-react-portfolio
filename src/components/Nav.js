import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[72px] backdrop-blur-2xl 
        rounded-full max-w-[360px] mx-auto px-3 flex justify-between 
        items-center text-xl text-white/50'>
          <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[48px] h-[48px] flex items-center
          justify-center'>
            <BiHomeAlt size={24} />
          </Link>
          <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[48px] h-[48px] flex items-center
          justify-center'>
            <BiUser size={24} />
          </Link>
          <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[48px] h-[48px] flex items-center
          justify-center'>
            <BsClipboardData size={24} />
          </Link>
          <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[48px] h-[48px] flex items-center
          justify-center'>
            <BsBriefcase size={24} />
          </Link>
          <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[48px] h-[48px] flex items-center
          justify-center'>
            <BsChatSquareText size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
