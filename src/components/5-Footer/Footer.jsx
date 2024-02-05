import "./Footer.css";
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <p>© 2024 Ilyas Farkhane. All rights reserved.</p>
    </footer>
  );
}
