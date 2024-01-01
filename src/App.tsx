import './App.css';
import './responsive.css';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useGeneralContext } from './hooks/useGeneralContext';
import { Grocha, LinkMobile, LinkWeb, MobileShop, MuseumInformationSystem, Portfolio, ProblemetNprishtine } from './pages';
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
        path: "/link-web",
        element: <LinkWeb />
      },
      {
        path: "/museum-information-system",
        element: <MuseumInformationSystem />
      },
      {
        path: "/mobile-shop",
        element: <MobileShop />
      },
      {
        path: "/problemet-nprishtine",
        element: <ProblemetNprishtine />
      },
      {
        path: "*",
        element: <h1>Not Found</h1>
      }
    ],
  },
]);

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
