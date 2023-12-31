import React from 'react';
import { Link } from 'react-scroll';
//CountUp
import CountUp from 'react-countup';
//intersection observer hook
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
//import CV
import CV from '../assets/myCV.pdf';

const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* image */}
          <motion.div 
            variants={fadeIn('right',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
            className='flex-1 bg-removebg bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left',0.5)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1'><h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>
            I'm an Undergraduate in University of Moratuwa, Faculty of Information Technology.
          </h3>
          <p className='mb-6'>An ambitious person who
            has developed a mature and responsible approach to take that I
            undertake.
          </p>
          {/* stats */}
          <div className='flex gap-x- lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={3} duration={3} /> : 
                  null
                }rd
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Year <br />
                Undergraduate
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={3} duration={3} /> : 
                  null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Projects <br />
                Completed
              </div>
            </div>

            {/* <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={12} duration={3} /> : 
                  null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Satisfied <br />
                Clients
              </div>
            </div> */}

          </div>
          <div className='flex gap-x-8 items-center'>
            {/* <button className='btn btn-lg'>See my work</button> */}
            <Link to='work' smooth={true} spy={true} className='btn btn-lg flex items-center justify-center cursor-pointer'>
              See my work
            </Link>
            <a href={CV} download className='text-gradient btn-link'>
              Download CV
            </a>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
