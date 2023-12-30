import "./Footer.css";
import { Link } from "react-router-dom";
import { BleartSelimiProfile, EmailIcon, GithubIcon } from "../../../assets";
import { Avatar, EmailButton, GitHubButton } from "../../../components";

const Footer = () => {
  return (
    <footer className="fs-30px color-white">
      <div className="footer-wrapper">
        <Link target="_blank" to="https://www.linkedin.com/in/bleart-selimi-677338224/" className="footer-avatar">
          <Avatar img={BleartSelimiProfile} />
          <span className="fs-20px m-semibold color-white ml-10px">Bleart Selimi</span>
        </Link>
        <div className="footer-social-media">
          <GitHubButton to="https://github.com/Bleartselimi/">
            <span className="m-semibold color-white fs-20px mr-7px">Github</span>
            <GithubIcon />
          </GitHubButton>
          <EmailButton to="mailto: bleart.selimi@outlook.com">
            <span className="m-semibold color-white fs-20px mr-7px">Email</span>
            <EmailIcon />
          </EmailButton>
        </div>
      </div>
    </footer>
  )
}

export default Footer