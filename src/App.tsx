import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { MainLayout } from './layouts'
import { Grocha } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
