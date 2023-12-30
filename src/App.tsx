import './App.css';
import './responsive.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Grocha, Portfolio } from './pages';
import { useEffect } from 'react';
import { useGeneralContext } from './hooks/useGeneralContext';

declare global {
  interface Window {
    documentReadyStateAnimationEvent: (readyStateValue?: string) => void;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Portfolio />
      },
      {
        path: "/grocha",
        element: <Grocha />
      }
    ],
  },
]);

const App = () => {

  const { dispatch } = useGeneralContext();

  window.documentReadyStateAnimationEvent = (readyStateValue) => {
    const splashScreenElement = document.querySelector(".splash-screen") as HTMLElement | null;
    const bodyElement = document.querySelector("body") as HTMLElement | null;
    if (splashScreenElement && readyStateValue) {
      splashScreenElement.style.opacity = "1";
      splashScreenElement.style.visibility = "visible";
      setTimeout(() => {
        if (splashScreenElement && bodyElement) {
          bodyElement.style.overflowY = 'auto';
          splashScreenElement.style.transition = "all .3s cubic-bezier(0.645, 0.045, 0.355, 1)";
          splashScreenElement.style.opacity = "0";
          splashScreenElement.style.visibility = "collapse";
          dispatch({ type: "SPLASH_SCREEN_STATE", payload: true });
          sessionStorage.setItem('dontShowSplashScreen', 'true');
        }
      }, 1500)
    }
  }

  useEffect(() => {
    window.documentReadyStateAnimationEvent();
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
