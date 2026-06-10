import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Achivement from './pages/Achivement.jsx'
import ProjectsDisplay from './pages/ProjectsDisplay.jsx'
import GDProjects from './pages/GDProjects.jsx'
import WebPage from './pages/WebPage.jsx'
import UxUiPage from './pages/UXUIPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/achievements",
    element: <Achivement />,
  },
  {
    path:"/projects",
    element: <ProjectsDisplay />
  },
  {
    path:"/GDProjects",
    element: <GDProjects />
  },{
    path:"/webProjects",
    element: <WebPage />
  },{
    path:"/uxuiProjects",
    element: <UxUiPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
