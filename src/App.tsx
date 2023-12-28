import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import './responsive.css';
import { MainLayout } from './layouts';
import { Grocha, Portfolio } from './pages';
import GeneralContextProvider from './context/GeneralContext/GeneralContextProvider';

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

  return (
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  )
}

export default App
