import { useRef } from "react";
import { Link, NavLink } from "react-router-dom"
import { ArrowsButton, Noise } from "../../../components"
import { ContentPanel } from "../../../widgets"
import { ArrowTopRightIcon, Tv } from "../../../assets"
import { NavigationMenuType } from "./NavigationMenuType";

const NavigationMenu = ({ opened, setOpened }: NavigationMenuType) => {

    const navigationRef = useRef<HTMLDivElement | null>(null);

    const navigationState = () => {
        if (opened) {
            navigationRef.current!.style.animation = "fadeOut .5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards";
            setTimeout(() => setOpened(false), 500)
        }
    }

    return (
        opened &&
        <div className="navigation" ref={navigationRef}>
            <Noise />
            <img className="tv-image" src={Tv} alt="tv image" />
            <div className="navigation-close-button">
                <ArrowsButton onClick={navigationState} text="CLOSE MENU" />
            </div>
            <div className="navigation-links-container">
                <div className="navigation-links-wrapper">
                    <NavLink to="/">
                        <ContentPanel
                            className="navigation-content-panel"
                            hasAreaOneMask={true}
                            areaOne={
                                <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>PORTFOLIO</h1>
                            }
                            areaTwo={
                                <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                            }
                            delay={0.5}
                        />
                    </NavLink>
                    <Link to="https://www.linkedin.com/in/bleart-selimi-677338224/" target="_blank">
                        <ContentPanel
                            className="navigation-content-panel"
                            hasAreaOneMask={true}
                            areaOne={
                                <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>LINKEDIN</h1>
                            }
                            areaTwo={
                                <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                            }
                            delay={0.6}
                        />
                    </Link>
                    <Link to="https://github.com/Bleartselimi/" target="_blank">
                        <ContentPanel
                            className="navigation-content-panel"
                            hasAreaOneMask={true}
                            areaOne={
                                <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>GITHUB</h1>
                            }
                            areaTwo={
                                <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                            }
                            delay={0.7}
                        />
                    </Link>
                    <Link to="mailto: bleart.selimi@outlook.com">
                        <ContentPanel
                            className="navigation-content-panel"
                            hasAreaOneMask={true}
                            areaOne={
                                <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>EMAIL</h1>
                            }
                            areaTwo={
                                <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                            }
                            delay={0.8}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationMenu