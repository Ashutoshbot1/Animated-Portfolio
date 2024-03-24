import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const styles = {
  services: { background: "linear-gradient(180deg, #111132,#0c0c1d)" },
  portfolio: { background: "linear-gradient(180deg, #0c0c1d,#111132)" },
};
const planetImage = {
  services: "url('/planets.png')",
  portfolio: "url('/sun.png')",
};

const Parallax = ({ type }) => {
  // Returns an object which has current property
  // Current property points to targated element
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  console.log(ref);
  return (
    <div className="parallax" ref={ref} style={styles[type]}>
      <motion.h1 style={{ y: yText }}>
        {" "}
        {type === "services" ? "Academics" : "Projects Below"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: planetImage[type],
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
