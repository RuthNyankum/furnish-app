import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import About from './pages/about'
import Collection from './pages/collection'
import ContactUs from './pages/contact-us'
import RootLayout from './pages/landing/layouts/rootLayout'

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "collection",
          element: <Collection />
        },
        {
          path: "contact-us",
          element: <ContactUs />
        } 
      ]
    },
    
  ])

  return <RouterProvider router={router}/>
}

export default App


