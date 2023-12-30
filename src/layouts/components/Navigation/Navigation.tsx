import { useEffect, useRef } from "react";
import { MenuIcon } from "../../../assets";
import { Logo } from "../../../components";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import "./Navigation.css";

const Navigation = () => {

  const navRef = useRef<HTMLElement | null>(null)

  const { state } = useGeneralContext();

  useEffect(() => {
    if (state.activeSplashScreen && navRef.current) {
      navRef.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }
  }, [state.activeSplashScreen]);

  return (
    <nav ref={navRef}>
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