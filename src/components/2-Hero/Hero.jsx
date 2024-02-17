import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import devAnimation from "../../animation/headAnim.json";
import Lottie from "lottie-react";
export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            src="./cop.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          MERN Full-Stack Developer 🚀.
        </motion.h1>
        <p className="sub-title">
          I’m Ilyas Farkhane, a MERN Full-Stack developer based in Casablanca
          City.
        </p>
        <div className="all-icons flex">
          <a
            className="icon icon-linkedin-square"
            href="https://www.linkedin.com/in/ilyas-farkhane/"
          />
          <a className="icon icon-twitter" href="https://twitter.com/" />
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/farkhane_ilyas_/"
          />
          <a
            className="icon icon-github"
            href="https://github.com/ilyasfarkhane-dev"
          />
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
