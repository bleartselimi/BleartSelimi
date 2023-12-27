import { Logo } from "../..";
import { MenuIcon } from "../../../assets";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Logo />
      {/* <ArrowsButton text="CLOSE MENU" /> */}
      <div className="nav-menu">
        <span className="fs-20px s-black color-white mr-7px">MENU</span>
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Navigation