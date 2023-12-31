import "./Navigation.css";
import { useEffect, useRef, useState } from "react";
import { MenuIcon, Tv } from "../../../assets";
import { Logo, Noise } from "../../../components";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import { ContentPanel } from "../../../widgets";
import ArrowsButton from "../../../components/ArrowsButton/ArrowsButton";

const Navigation = () => {

  const navRef = useRef<HTMLDivElement | null>(null)

  const { state } = useGeneralContext();

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.querySelector("body")!.style.overflowY = "hidden";
    if (state.activeSplashScreen && navRef.current) {
      navRef.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }

    return () => {
      document.querySelector("body")!.style.overflowY = "scroll";
    }

  }, [state.activeSplashScreen]);

  return (
    <nav ref={navRef}>
      <Logo />
      {/* <ArrowsButton text="CLOSE MENU" /> */}
      <div className="nav-menu" onClick={() => setOpened(true)}>
        <span className="fs-20px s-extrabold color-white mr-7px">MENU</span>
        <MenuIcon className="nav-menu-icon" />
      </div>
      {
        opened &&
        <div className="navigation">
          <Noise />
          <img className="tv-image" src={Tv} alt="tv image" />
          <div className="navigation-links-container">
            <div className="navigation-links-wrapper">
              <ContentPanel
                hasAreaOneMask={true}
                areaOne={
                  <h1 className='fs-64px color-white lh-100 text-shadow-white'>PORTFOLIO</h1>
                }
              />
              <ContentPanel
                hasAreaOneMask={true}
                areaOne={
                  <h1 className='fs-64px color-white lh-100 text-shadow-white'>LINKEDIN</h1>
                }
              />
              <ContentPanel
                hasAreaOneMask={true}
                areaOne={
                  <h1 className='fs-64px color-white lh-100 text-shadow-white'>GITHUB</h1>
                }
              />
              <ContentPanel
                hasAreaOneMask={true}
                areaOne={
                  <h1 className='fs-64px color-white lh-100 text-shadow-white'>EMAIL</h1>
                }
              />
            </div>
            <ArrowsButton onClick={() => setOpened(false)} text="CLOSE MENU" />
          </div>
        </div>
      }
    </nav >
  )
}

export default Navigation