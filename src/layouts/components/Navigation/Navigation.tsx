import "./Navigation.css";
import { useEffect, useRef } from "react";
import { Logo } from "../../../components";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {

  const { state, menuOpend } = useGeneralContext();

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (state.globalLoadingState && navRef.current) {
      navRef.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }
  }, [state.globalLoadingState]);

  return (
    <>
      <nav ref={navRef}>
        <Logo />
        <div className="nav-menu" onClick={() => menuOpend(true)}>
          <span className="fs-20px s-black color-white mr-7px">MENU</span>
          <div className="nav-menu-icon">
            <span className="nav-menu-icon-rect-one" />
            <span className="nav-menu-icon-rect-two" />
          </div>
        </div>

      </nav >
      {
        state.openedMenu &&
        <NavigationMenu />
      }
    </>
  )
}

export default Navigation