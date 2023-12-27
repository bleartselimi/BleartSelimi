import { BleartSelimiProfile } from "../../../assets";
import Avatar from "../../core/Avatar/Avatar";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="fs-30px color-white">
      <div className="footer-avatar">
        <Avatar img={BleartSelimiProfile} />
        <span className="fs-20px m-semibold color-white ml-10px">Bleart Selimi</span>
      </div>
    </footer>
  )
}

export default Footer