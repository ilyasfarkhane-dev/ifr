import "./Main.css";
import { useState } from "react";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [curentActive, setCurentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex " id="projects">
      <section className="flex  left-section ">
        <button
          onClick={() => {
            setCurentActive("all");
            return setArr(myProjects);
          }}
          className={curentActive === "all" ? "active" : null}
        >
          All Project
        </button>
        <button
          onClick={() => {
            setCurentActive("css");
            const newArr = myProjects.filter((item) => {
              return item.categorie === "css";
            });
            setArr(newArr);
          }}
          className={curentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setCurentActive("js");
            const newArr = myProjects.filter((item) => {
              return item.categorie === "javascript";
            });
            setArr(newArr);
          }}
          className={curentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setCurentActive("react");
            const newArr = myProjects.filter((item) => {
              return item.categorie === "react" || item.categorie === "mui";
            });
            setArr(newArr);
          }}
          className={curentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            setCurentActive("node");
            const newArr = myProjects.filter((item) => {
              return item.categorie === "node" || item.categorie === "express";
            });
            setArr(newArr);
          }}
          className={curentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>
      <section className="flex  right-section ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imagePath}
                className=" card "
              >
                <img src={item.imagePath} width={260} height={149} alt="" />
                <div style={{ width: "260px" }} className=" box">
                  <div className="title">
                    <h1>{item.projectTitle}</h1>
                    <p className="sub-title">
                    {item.desc}
                  
                    </p>
                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <a
                          className="icon-link"
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          
                        </a>
                        <a
                          className="icon-github"
                          href={item.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </div>
                      {/* <a className="link flex" href="">
                        more
                        <span className="icon-arrow-right"></span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
