import "../styles/presentation.css";
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiX, SiUpwork } from "react-icons/si";

export function Presentation() {
  return (
    <div className="main-container-p">
      <div className="presentation">
        <div className="name">
          <h1>MARTIN</h1>
        </div>
        <div className="line-text">
          <div className="line"></div>
          <div className="subtitle">
            <p>web developer</p>
          </div>
          <div className="line"></div>
        </div>
      </div>

      <div className="presentation">
        <div className="line-text">
          <div className="line"></div>
          <div className="subtitle">
            <p>tech & geek</p>
          </div>
          <div className="line"></div>
        </div>

        <div className="name">
          <h1>CAYCHO</h1>
        </div>
      </div>

      <div className="text">
        <p>"Apasionado por crear experiencias web únicas."</p>
      </div>

      <div className="socials">
        <a href="https://github.com/mfrann" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_mfrann/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@mfrann" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://www.tiktok.com/@iuop_rs" target="_blank">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
