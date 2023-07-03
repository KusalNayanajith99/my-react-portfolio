import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
//img
import Img1 from "../assets/mora.png";
import Img2 from "../assets/mcc.png";
import Img3 from "../assets/ds.png";

const services = [
  {
    logo: Img1,
    institution: "University of Moratuwa",
    description:
      "Reading for B.Sc. (Hons) in Information Technology",
  },
  {
    logo: Img2,
    institution: "Matara Central College",
    description:
      "Studied upto G.C.E. Advanced Level (Biological stream) Studied upto G.C.E. Ordinary Level.",
  },
  {
    logo: Img3,
    institution: "MR/DS Senanayaka Vidyalaya",
    description:
      "Studied upto grade 5 Scolarship Examination.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-8 lg:mb-0"
          >
            <h2 className="h2 text-accent text-3xl mb-4">Education</h2>
            <h3 className="h3 max-w-[455px] text-xl mb-10">
            Passionate IT undergraduate and versatile full stack/mobile developer.
            </h3>
            <button className="btn btn-sm text-base">See my work</button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { logo, institution, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[124px] mb-6 flex items-center"
                    key={index}
                  >
                    <div className="max-w-[476px] flex items-center">
                      <img
                        src={logo}
                        alt={`logo${index}`}
                        className="mr-4"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <div>
                        <h4 className="text-2xl font-bold mb-1">
                          {institution}
                        </h4>
                        <p className="text-base">{description}</p>
                      </div>
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
