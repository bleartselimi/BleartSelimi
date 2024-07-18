import "./ContentPanel.css";
import { ContentPanelType } from "./ContentPanelType";
import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";

const ContentPanel = ({ className = "", areaOne, hasAreaOneMask = false, areaTwo, areaThree, areaFour, delay = 0 }: ContentPanelType) => {

    const { state } = useGeneralContext();
    
    const contentPanelContainer = useRef<HTMLDivElement | null>(null);
    const panelBodyContainer = useRef<HTMLDivElement | null>(null);
    const panelBodyWrapper = useRef<HTMLDivElement | null>(null);
    const panelBody = useRef<HTMLDivElement | null>(null);
    const areaOneMask = useRef<HTMLDivElement | null>(null);
    const contentPanelFooter = useRef<HTMLDivElement | null>(null);

    const contentPanelAimation = () => {
        if (panelBodyContainer.current && panelBody.current) panelBodyContainer.current.style.height = panelBody.current.clientHeight + "px";
        setTimeout(() => {
            if (contentPanelContainer.current && contentPanelFooter.current && areaOneMask.current) {
                areaOneMask.current.style.bottom = contentPanelFooter.current.clientHeight + 15 + "px"; //15px is the bottom padding
                contentPanelContainer.current.classList.add("active");
            }
            setTimeout(() => {
                if (panelBodyWrapper.current && panelBody.current) {
                    panelBodyWrapper.current.style.height = panelBody.current.clientHeight + "px";
                }
            }, 1000)
        }, delay * 1000)
    }

    const resizeEvent = () => contentPanelAimation();

    useEffect(() => {
        if (panelBodyContainer.current && panelBody.current) panelBodyContainer.current.style.height = panelBody.current.clientHeight + "px";
        if (state.globalLoadingState) {
            contentPanelAimation();

            window.addEventListener('resize', resizeEvent);

            return () => window.removeEventListener('resize', resizeEvent)
        }
    }, [state.globalLoadingState]);

    return (
        <div className={`content-panel-container ${className}`} ref={contentPanelContainer}>
            {
                //We are adding a area one mask since the text shadows are being cut from the parent overflow
                hasAreaOneMask &&
                <div className="area-one-mask" ref={areaOneMask}>{areaOne}</div>
            }
            <div className="content-panel-body-container" ref={panelBodyContainer}>
                <div className="content-panel-body-wrapper" ref={panelBodyWrapper}>
                    <div className="content-panel-body" ref={panelBody}>
                        <div style={{ paddingRight: areaOne ? '60px' : "unset" }} className={`area-one ${hasAreaOneMask ? "has-mask" : ""}`}>{areaOne}</div>
                        <div className="area-two">{areaTwo}</div>
                    </div>
                </div>
                <div className="content-panel-line"></div>
            </div>
            <div className="content-panel-footer-wrapper" ref={contentPanelFooter}>
                <div className="content-panel-footer">
                    <div className="area-three">{areaThree}</div>
                    <div className="area-four">{areaFour}</div>
                </div>
            </div>
        </div>
    )
}

export default ContentPanel