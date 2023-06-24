import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design',
    description: 'I design user interfaces that are easy to use and provide a great user experience.',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: 'I design user interfaces that are easy to use and provide a great user experience.',
    link: 'Learn more',
  },
  {
    name: 'Mobile Application',
    description: 'I design user interfaces that are easy to use and provide a great user experience.',
    link: 'Learn more',
  },
  {
    name: 'Video Editing',
    description: 'I design user interfaces that are easy to use and provide a great user experience.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-8 lg:mb-0'
          >
            <h2 className='h2 text-accent text-3xl mb-4'>What I do</h2>
            <h3 className='h3 max-w-[455px] text-xl mb-10'>I am an undergraduate with 2 years</h3>
            <button className='btn btn-sm text-base'>See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[124px] mb-6 flex items-center' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-lg tracking-wider font-primary font-semibold mb-3'>{name}</h4>
                      <p className='font-secondary leading-tight text-base'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-8 h-8 mb-4 flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
