import { ContentPanelType } from "./ContentPanelType";
import "./ContentPanel.css";
import { useEffect, useRef, useState } from "react";

const ContentPanel = ({ className, areaOne, hasAreaOneMask, areaTwo, areaThree, areaFour }: ContentPanelType) => {

    const lineRef = useRef<HTMLImageElement | null>(null);
    const panelBodyContainer = useRef<HTMLImageElement | null>(null);
    const panelBodyWrapper = useRef<HTMLImageElement | null>(null);
    const panelBody = useRef<HTMLImageElement | null>(null);
    const areaOneRef = useRef<HTMLImageElement | null>(null);
    const panelFooter = useRef<HTMLImageElement | null>(null);
    //We are adding a area one mask since the text shadows are being cut from the parent overflow
    const areaOneMaskRef = useRef<HTMLImageElement | null>(null);

    const contentPanelAimation = () => {
        if (lineRef.current && panelBodyContainer.current && panelBody.current) {
            panelBodyContainer.current.style.height = panelBody.current.clientHeight + "px";

            lineRef.current.classList.add("active");

            setTimeout(() => {
                if (lineRef.current && panelBodyWrapper.current && panelBody.current && areaOneMaskRef.current) {
                    lineRef.current.style.top = "calc(100% - 1px)";
                    panelBodyWrapper.current.style.height = panelBody.current.clientHeight + "px";
                    areaOneMaskRef.current.style.opacity = "1";
                    setTimeout(() => {
                        if (panelFooter.current) panelFooter.current.style.transform = "translateY(0%)";
                    }, 1000)
                }
            }, 1000)
        }
    }

    const resizeEvent = () => {
        contentPanelAimation();
    }

    useEffect(() => {
        contentPanelAimation();

        window.addEventListener('resize', resizeEvent);

        return () => window.removeEventListener('resize', resizeEvent)
    }, []);

    return (
        <div className={`content-panel-container ${className}`}>
            {
                hasAreaOneMask &&
                <div className="area-one-mask" ref={areaOneMaskRef}>{areaOne}</div>
            }
            <div className="content-panel-body-container" ref={panelBodyContainer}>
                <div className="content-panel-body-wrapper" ref={panelBodyWrapper}>
                    <div className="content-panel-body" ref={panelBody}>
                        <div className={`area-one ${hasAreaOneMask ? "has-mask" : ""}`} ref={areaOneRef}>{areaOne}</div>
                        <div className="area-two">{areaTwo}</div>
                    </div>
                </div>
                <div className="content-panel-line" ref={lineRef}></div>
            </div>
            <div className="content-panel-footer-wrapper">
                <div className="content-panel-footer" ref={panelFooter}>
                    <div className="area-three">{areaThree}</div>
                    <div className="area-four">{areaFour}</div>
                </div>
            </div>
        </div >
    )
}

export default ContentPanel