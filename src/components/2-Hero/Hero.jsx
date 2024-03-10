import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import devAnimation from "../../animation/headAnim.json";
import Lottie from "lottie-react";
import resume from "../../../public/images/ilyasfarkhane.pdf";
import reactAnim from "../../animation/reactAnim.json";
import TopAnimatiom from "../../animation/topAnimation.json";
// import Favicon from "react-favicon";
import { ReactTyped } from "react-typed";
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
          transition={{ duration: 3 }}
          className="title"
        >
          {"< Ilyas Farkhane />"}
        </motion.h1>

        <p className="sub-title">
          {"$_   "}
          {""}
          <ReactTyped
            strings={[
              "REACT JS Developer",
              "MERN Stack Developer",
              "UI/UX Designer",
            ]}
            typeSpeed={50}
            loop
            backSpeed={20}
            showCursor={true}
          />
        </p>
        <div className="stack-icons flex">
          <img src="./mongo.png" alt="" />
          <img src="./ex.png" alt="" />
          <img src="./react.png" alt="" />
          <img src="./node.png" alt="" />
          <img src="./figma.png" alt="" />
        </div>

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
        <div className="cv">
            <a href={resume} download="ILYAS FARKHANE">
              Download_My_CV
            </a>
          </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={TopAnimatiom}
        />
      </div>
    </section>
  );
}
