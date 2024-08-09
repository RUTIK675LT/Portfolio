import logo from "../assets/RutikDardaLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaMedium} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-5 flex items-center justify-between pt-3">
          <div className=" flex flex-shrink-0 items-center">
            <img className = "mx-2 w-20" src={logo} alt="Logo"></img>
          </div>
          <div className="m-8 flex items-center justify-center gap-3 text-xl">
            <a href="https://www.linkedin.com/in/rutikdarda" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://medium.com/@rutikrasik.darda" target="_blank">
              <FaMedium /> 
            </a>
            <a href="https://github.com/RUTIK675LT" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/rutik675lt/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@rutik9999" target="_blank">
              <FaYoutube />
            </a>
            
            
            
            
            
          </div>
        </nav>
      )
};

export default Navbar;