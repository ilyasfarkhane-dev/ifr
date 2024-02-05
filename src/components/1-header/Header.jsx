import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);
  const [showMosdal, setShowMosdal] = useState(false);
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setShowMosdal(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            mode === "dark" ? "light" : "dark"
          );
          setMode(localStorage.getItem("currentMode"));
        }}
        className="mode flex "
      >
        {mode === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showMosdal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowMosdal(false);
                }}
              />
            </li>
            <li>
              <a
                href=""
                onClick={() => {
                  setShowMosdal(false);
                }}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => {
                  setShowMosdal(false);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={() => {
                  setShowMosdal(false);
                }}
              >
                Articles
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => {
                  setShowMosdal(false);
                }}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
