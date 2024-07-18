import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { ArrowsButton, Noise } from "../../../components"
import { ContentPanel } from "../../../widgets"
import { ArrowTopRightIcon, Tv } from "../../../assets"
import { useGeneralContext } from "../../../hooks/useGeneralContext";

const NavigationMenu = () => {

    const { state, transitionIn, menuOpend } = useGeneralContext();

    const navigationRef = useRef<HTMLDivElement | null>(null);

    const navigationState = () => {
        if (state.openedMenu) {
            document.querySelector("body")!.style.overflowY = "auto";
            navigationRef.current!.style.animation = "fadeOut .5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards";
            setTimeout(() => menuOpend(false), 500)
        }
    }

    useEffect(() => {
        document.querySelector("body")!.style.overflowY = "hidden";

        return () => {
            document.querySelector("body")!.style.overflowY = "auto";
        }
    }, [])

    return (
        state.openedMenu &&
        <div className="navigation" ref={navigationRef}>
            <Noise />
            <img className="tv-image" src={Tv} alt="tv image" />
            <div className="navigation-links-container">
                <div className="navigation-close-button">
                    <ArrowsButton onClick={navigationState} text="CLOSE MENU" />
                </div>
                <div className="navigation-links-wrapper">
                    {
                        window.location.hash !== "" && window.location.hash !== "#/" &&
                        <div onClick={() => {
                            if (window.location.hash !== "" && window.location.hash !== "#/") {
                                transitionIn("/", true)
                            }
                        }}>
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
                        </div>
                    }
                    {
                        window.location.hash !== "" && window.location.hash !== "#/articles" &&
                        <div onClick={() => {
                            if (window.location.hash !== "" && window.location.hash !== "#/articles") {
                                transitionIn("/articles", true)
                            }
                        }}>
                            <ContentPanel
                                className="navigation-content-panel"
                                hasAreaOneMask={true}
                                areaOne={
                                    <h1 className='navigation-link-title fs-64px color-white lh-100 text-shadow-white'>ARTICLES</h1>
                                }
                                areaTwo={
                                    <ArrowTopRightIcon className="navigation-link-icon" width={40} height={40} fill="#ffffff" />
                                }
                                delay={0.5}
                            />
                        </div>
                    }
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