import './App.css';
import './responsive.css';
import { useEffect } from 'react';
import { useGeneralContext } from './hooks/useGeneralContext';
import Routing from './routes';

const App = () => {

  const { dispatch } = useGeneralContext();

  const documentReadyStateAnimationEvent = () => {
    const splashScreenElement = document.querySelector(".splash-screen") as HTMLDivElement | null;
    if (splashScreenElement) {
      splashScreenElement.style.opacity = "1";
      splashScreenElement.style.visibility = "visible";
      setTimeout(() => {
        if (splashScreenElement) {
          splashScreenElement.style.transition = "all .3s cubic-bezier(0.645, 0.045, 0.355, 1)";
          splashScreenElement.style.opacity = "0";
          splashScreenElement.style.visibility = "collapse";
          setTimeout(() => {
            dispatch({ type: "GLOBAL_LOADING_STATE", payload: true });
          }, 500)
        }
      }, 1500)
    }
  }

  useEffect(() => {
    documentReadyStateAnimationEvent();
  }, [])

  return (
    <Routing />
  )
}

export default App
