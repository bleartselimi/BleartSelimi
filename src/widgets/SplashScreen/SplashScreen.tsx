import { useEffect, useRef } from "react";
import "./SplashScreen.css";
import { useGeneralContext } from "../../hooks/useGeneralContext";

const SplashScreen = () => {

  const splashScreenRef = useRef<HTMLDivElement | null>(null);

  const { state } = useGeneralContext();

  useEffect(() => {
    if (state.activeSplashScreen) {

    }
  }, [state.activeSplashScreen]);

  return (
    <div className="splash-screen" ref={splashScreenRef}>
      <h1 className="splash-screen-logo m-black color-white">BS</h1>
    </div>
  )
}

export default SplashScreen