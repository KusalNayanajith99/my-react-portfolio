import React from "react";
import { Link } from 'react-scroll';
//images
import Image from "../assets/cover.gif";
//icons
import { FaGithub, FaYoutube, FaLinkedin , FaMedium , FaHackerrank } from "react-icons/fa";
//type of animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[75px]"
            >
              KUSAL <span>NAYANAJITH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary
          font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Undergraduate",
                  2000,
                  "YouTuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am an IT undergraduate who is enthusiastic, passionate and self
              motivated to achieve my goals. An ambitious person who has
              developed a mature and responsible approach to take that I
              undertake.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to='about' smooth={true} spy={true} className='btn btn-lg flex items-center justify-center cursor-pointer'>
                More About me
              </Link>
              <a href="/" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/kusal-nayanajith-0a6630219/" >
                <FaLinkedin />
              </a>
              <a href="https://github.com/KusalNayanajith99">
                <FaGithub />
              </a>
              <a href="https://www.youtube.com/channel/UC2J5cc12Pv-4Y_ICibxTedQ">
                <FaYoutube />
              </a>
              <a href="https://medium.com/@kusalnayanajith88">
                <FaMedium />
              </a>
              <a href="https://www.hackerrank.com/kusalnayanajith2?hr_r=1">
                <FaHackerrank />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
