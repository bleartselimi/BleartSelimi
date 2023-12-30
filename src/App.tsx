import './App.css';
import './responsive.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { MainLayout } from './layouts';
import { Grocha, Portfolio } from './pages';
import { useEffect } from 'react';
import { useGeneralContext } from './hooks/useGeneralContext';
import { MainLayout } from './layouts';

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

  const documentReadyStateAnimationEvent = () => {
    dispatch({ type: "SPLASH_SCREEN_STATE", payload: true });
    const splashScreenElement = document.querySelector(".splash-screen") as HTMLElement | null;
    const bodyElement = document.querySelector("body") as HTMLElement | null;
    setTimeout(() => {
      bodyElement!.style.overflowY = 'auto';
      splashScreenElement!.style.transition = "all .3s cubic-bezier(0.645, 0.045, 0.355, 1)";
      splashScreenElement!.style.opacity = "0";
      splashScreenElement!.style.visibility = "collapse";
      setTimeout(() => {
        dispatch({ type: "SPLASH_SCREEN_STATE", payload: true });
      }, 500)
    }, 2500)
  }

  useEffect(() => {
    documentReadyStateAnimationEvent();
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
