import "./About.css";
import { ReactTyped } from "react-typed";
export default function About() {
  return (
    <section className="about-section flex" id="about">
      <div className="about-text">
      
        <h1 className="title">
          {" "}
          <ReactTyped
            startWhenVisible
            strings={["About Me"]}
            typeSpeed={40}
          />
        </h1>
        <p className="sub-title">
          Hello, I am Ilyas Farkhane, a dedicated React Developer and UI/UX
          Designer. With a passion for blending creativity with functionality, I
          specialize in transforming design concepts into seamless, interactive
          user experiences. From crafting responsive interfaces to ensuring
          smooth React functionality, I am here to bring innovation to your
          digital projects.
        </p>
        <div className="about-button">
          <a href="#contact" className="sub-title">Contact Me</a>
        </div>
      </div>
      <div className="about-pic">
        <img src="./pic.png" alt="" />
      </div>
    </section>
  );
}
