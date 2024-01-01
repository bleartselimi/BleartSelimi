import "./Navigation.css";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../../../components";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {

  const { state } = useGeneralContext();

  const navRef = useRef<HTMLDivElement | null>(null);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (state.activeSplashScreen && navRef.current) {
      navRef.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }
  }, [state.activeSplashScreen]);

  return (
    <nav ref={navRef}>
      <Logo />
      <div className="nav-menu" onClick={() => setOpened(true)}>
        <span className="fs-20px s-extrabold color-white mr-7px">MENU</span>
        <div className="nav-menu-icon">
          <span className="nav-menu-icon-rect-one" />
          <span className="nav-menu-icon-rect-two" />
        </div>
      </div>
      {
        opened &&
        <NavigationMenu opened={opened} setOpened={setOpened} />
      }
    </nav >
  )
}

export default Navigation