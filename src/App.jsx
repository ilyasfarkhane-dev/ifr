import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-Hero/Hero";
import About from "./components/About/About";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-Contact/Contact";
import Footer from "./components/5-Footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const [showScrollBtn, setShowScrollBtn] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="devider" />
      <About/>
      <div className="devider" />
      <Main />
      <div className="devider" />
      <Contact />
      <div className="devider" />
      <Footer />

      <a
        style={{ opacity: showScrollBtn ? 1 : 0, transition: "1.1s" }}
        href="#up"
      >
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
