import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwAya93yHjw6efBBWjIxTNCGvxkDhV97TasGRmRFIUeCp5-pRQEeqP8xnRPueByfgAu-A/exec';
    const form = e.target;
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        showAlert("Message Sent Successfully!");
        form.reset();
      })
      .catch(error => {
        showAlert("Error occurred. Please try again later.");
        console.error('Error!', error.message);
      });
  };

  const showAlert = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Reach Me!
              </h2>
              <p className="max-w-sm mb-16">
                Should you wish to reach out, kindly utilize the provided contact form to connect with me
              </p>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="Name"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="Email"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              name="Message"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
        {message && (
          <div className="text-white text-center mt-4">{message}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
