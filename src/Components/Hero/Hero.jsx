import React from "react";
import "./Hero.scss";
import { animate, motion } from "framer-motion";

//Framer motion variants
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "50vw",
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      //   repeatType: "mirror",
      duration: 30,
      //   delay: -3,
    },
  },
};

//Component
const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          className="textContainer"
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ASHUTOSH SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Web-App Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* <a href="#Projects"> */}
              <motion.button  onClick={() => scrollToSection("Projects")} variants={textVariants}>
                See Latest Works
              </motion.button>
            {/* </a> */}
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Skilled And Passionate Developer
      </motion.div>
      <div className="imageContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
