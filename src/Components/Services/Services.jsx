import React, { useRef } from "react";
import "./Services.scss";
import { animate, inView, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="servicesMobile">
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        animate={"animate"}
        ref={ref}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on growth, gaining practical knowledge <br /> and always
            moving forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Bussiness.
          </h1>
          <button>What We Do? </button>
        </div>
      </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "gray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident reprehenderit harum dignissimos repudiandae, ducimus
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "gray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident reprehenderit harum dignissimos repudiandae, ducimus
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "gray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident reprehenderit harum dignissimos repudiandae, ducimus
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "gray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident reprehenderit harum dignissimos repudiandae, ducimus
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
