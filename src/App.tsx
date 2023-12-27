import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { MainLayout } from './layouts'
import { Grocha, Portfolio } from './pages';


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

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
