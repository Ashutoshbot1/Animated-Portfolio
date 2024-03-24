import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Single from "./Single/Single";

const items = [
  {
    id: 1,
    title: "Movix",
    img: "/movix.png",
    desc: "' use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:",
    link:"https://movie-movix-app.netlify.app/",
  },
  {
    id: 2,
    title: "CryptoTracker",
    img: "/crypto.png",
    desc: "'Lorem  will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:",
    link:"https://live-cryptotracker-webapp.netlify.app/"
  },
  {
    id: 3,
    title: "Podpulse",
    img: "/podPulse.png",
    desc: "“Lorem  will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:",
    link:"https://podpulse-podcast-app.netlify.app/"
  },
  {
    id: 4,
    title: "Type-Speed Test",
    img: "/typing.png",
    desc: "“Lorem ipsum” services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:",
    link:""
  },
];



const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Project Work</h1>
        <motion.div className="progressbar" style={{scaleX}}></motion.div>
      </div>

      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
