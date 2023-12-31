import "./Navigation.css";
import { useEffect, useRef, useState } from "react";
import { ArrowTopRightIcon, MenuIcon, Tv } from "../../../assets";
import { Logo, Noise } from "../../../components";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import { ContentPanel } from "../../../widgets";
import ArrowsButton from "../../../components/ArrowsButton/ArrowsButton";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  const navRef = useRef<HTMLDivElement | null>(null)
  const navigationRef = useRef<HTMLDivElement | null>(null)

  const { state } = useGeneralContext();

  const [opened, setOpened] = useState(false);

  const modalState = () => {
    console.log(navigationRef.current);

    if (navigationRef.current) {
      if (!opened) {
        setOpened(true);
        navigationRef.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards";
      }
      else {
        navigationRef.current.style.animation = "fadeOut .3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards";
        setTimeout(() => {
          setOpened(false);
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (state.activeSplashScreen && navRef.current) {
      navRef.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }
  }, [state.activeSplashScreen]);

  return (
    <nav ref={navRef}>
      <Logo />
      <div className="nav-menu" onClick={modalState}>
        <span className="fs-20px s-extrabold color-white mr-7px">MENU</span>
        <MenuIcon className="nav-menu-icon" />
      </div>

      <div className="navigation" ref={navigationRef}>
        {
          opened &&
          <>
            <Noise />
            <img className="tv-image" src={Tv} alt="tv image" />
            <div className="navigation-links-container">
              <div className="navigation-links-wrapper">
                <NavLink to="/">
                  <ContentPanel
                    hasAreaOneMask={true}
                    areaOne={
                      <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>PORTFOLIO</h1>
                    }
                    areaTwo={
                      <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                    }
                    delay={1}
                  />
                </NavLink>
                <ContentPanel
                  hasAreaOneMask={true}
                  areaOne={
                    <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>LINKEDIN</h1>
                  }
                  areaTwo={
                    <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                  }
                  delay={1.25}
                />
                <ContentPanel
                  hasAreaOneMask={true}
                  areaOne={
                    <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>GITHUB</h1>
                  }
                  areaTwo={
                    <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                  }
                  delay={1.5}
                />
                <ContentPanel
                  hasAreaOneMask={true}
                  areaOne={
                    <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>EMAIL</h1>
                  }
                  areaTwo={
                    <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                  }
                  delay={1.75}
                />
              </div>
              <ArrowsButton onClick={modalState} text="CLOSE MENU" />
            </div>
          </>
        }
      </div>
    </nav >
  )
}

export default Navigation