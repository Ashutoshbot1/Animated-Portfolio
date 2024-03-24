import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const personalDetails={
  email:"ashutosh21jh@gmail.com",
  linkedin:"https://www.linkedin.com/in/ashutosh21s/",
  hackerRank:"https://www.hackerrank.com/profile/sashutoshkumar01",
  leetcode:"https://leetcode.com/ashutoshbot/",
};

const Navbar = () => {
  return (
    <div className="navbar">
      {/* {Sidebar} */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ashutosh Singh
        </motion.span>
        <div className="social">
          <a href={`mailto:${personalDetails.email}`} target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9CaSbQYfUXvs7WUORXnzcExw5rgSveyuEg&usqp=CAU" alt="" />
          </a>
          <a href={personalDetails.linkedin} target="_blank">
            <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png" alt="LinkedIn" />
          </a>
          <a href={personalDetails.leetcode} target="_blank" >
            <img src="/leetcode.png" alt="" />
          </a>
          <a href={personalDetails.hackerRank} target="_blank">
            <img src="/HackerRank.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
