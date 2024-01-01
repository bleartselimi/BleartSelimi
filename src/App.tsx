import './App.css';
import './responsive.css';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useGeneralContext } from './hooks/useGeneralContext';
import { Grocha, LinkMobile, Portfolio } from './pages';
import { MainLayout } from './layouts';

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
      },
      {
        path: "/link-mobile",
        element: <LinkMobile />
      },
      {
        path: "*",
        element: <Portfolio />
      }
    ],
  },
]);

const App = () => {

  const { dispatch } = useGeneralContext();

  const documentReadyStateAnimationEvent = () => {
    const splashScreenElement = document.querySelector(".splash-screen") as HTMLDivElement | null;
    const bodyElement = document.querySelector("body") as HTMLBodyElement | null;
    if (splashScreenElement) {
      splashScreenElement.style.opacity = "1";
      splashScreenElement.style.visibility = "visible";
      setTimeout(() => {
        if (splashScreenElement && bodyElement) {
          bodyElement.style.overflowY = 'auto';
          splashScreenElement.style.transition = "all .3s cubic-bezier(0.645, 0.045, 0.355, 1)";
          splashScreenElement.style.opacity = "0";
          splashScreenElement.style.visibility = "collapse";
          setTimeout(() => {
            dispatch({ type: "SPLASH_SCREEN_STATE", payload: true });
          }, 500)
        }
      }, 2000)
    }
  }

  useEffect(() => {
    documentReadyStateAnimationEvent();
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
