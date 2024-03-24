import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./Single.scss";
import { motion } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  //   console.log(item.link)

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 style={{ y }}>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
              <button>Live Link</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Single;
