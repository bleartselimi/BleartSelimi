import { MenuIcon } from "../../../assets";
import { Logo } from "../../../components";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Logo />
      {/* <ArrowsButton text="CLOSE MENU" /> */}
      <div className="nav-menu">
        <span className="fs-20px s-extrabold color-white mr-7px">MENU</span>
        <MenuIcon className="nav-menu-icon" />
      </div>
    </nav>
  )
}

export default Navigation