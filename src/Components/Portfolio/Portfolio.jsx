import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Single from "./Single/Single";

const items = [
  {
    id: 1,
    title: "Movix",
    img: "/movix.png",
    desc: "Streamlined movie and TV show discovery with dynamic carousels, powerful search, and personalized content customization features.",
    link:"https://movie-movix-app.netlify.app/",
  },
  {
    id: 2,
    title: "CryptoTracker",
    img: "/crypto.png",
    desc: "Real-time cryptocurrency tracking with interactive comparison, comprehensive market overview, and personalized watchlist functionality.",
    link:"https://live-cryptotracker-webapp.netlify.app/"
  },
  {
    id: 3,
    title: "Podpulse",
    img: "/podPulse.png",
    desc: "Advanced podcast platform offering secure authentication, seamless storage, dynamic user experience, and custom audio player integration.",
    link:"https://podpulse-podcast-app.netlify.app/"
  },
  {
    id: 4,
    title: "Type-Speed Test",
    img: "/typing.png",
    desc: "Assess and improve typing proficiency with accurate speed measurements, varied test durations, and detailed performance analysis.",
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
