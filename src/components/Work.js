import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';

import { FaGithub } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa';
//img
import Img1 from '../assets/Food-store.png';
import Img2 from '../assets/miracularz.png';
import Img3 from '../assets/my-portfolio.png';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />Work</h2>
              <p className='max-w-sm mb-16'>
              Explore my latest impactful and innovative web development projects.
              </p>
              <button className='btn btn-sm'>View all Projects</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Application</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Online Food Store System</span>
              </div>
              <div className='absolute  bottom-0 opacity-0 left-12 group-hover:bottom-6 transition-all duration-700 z-50 delay-100 group-hover:opacity-100'>
                  <a href='https://github.com/KusalNayanajith99/food-store' target='_blank'>
                  <FaGithub size={24} />
                  </a>      
           </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left',0.2)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
            className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
  
              <span className='text-gradient'>Web & Mobile Application</span>
             
            </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Vehicle Valuation System</span>
              </div>
              <div className='absolute  bottom-0 opacity-0 left-12 group-hover:bottom-6 transition-all duration-700 z-50 delay-100 group-hover:opacity-100'>
                  <a href='https://dev.azure.com/Miraculerz/vvs-business-logics' target='_blank'>
                  <FaGit size={24} />
                  </a>      
           </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>This Website</span>
              </div>
              <div className='absolute  bottom-0 opacity-0 left-12 group-hover:bottom-6 transition-all duration-700 z-50 delay-100 group-hover:opacity-100'>
                  <a href='https://github.com/KusalNayanajith99/my-react-portfolio' target='_blank'>
                  <FaGithub size={24} />
                  </a>      
           </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>My Portfolio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
