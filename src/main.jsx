import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import ShowProvider from './Provider/ShowProvider.jsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ShowProvider>
  </StrictMode>,
)
