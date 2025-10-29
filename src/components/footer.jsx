import "../styles/footer.css";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiX, SiUpwork } from "react-icons/si";

export function Footer() {
  return (
    <footer className="main-container-f">
      <div className="content-f">
        <div className="text-f">Martin Caycho | Web Developer</div>
        <div className="social-f">
          <a href="https://github.com/mfrann" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_mfrann/">
            <FaInstagram />
          </a>
          <a href="https://www.upwork.com/freelancers/~0111a498c7abc0b2f8">
            <SiUpwork />
          </a>
          <a href="https://www.tiktok.com/@iuop_rs">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}
