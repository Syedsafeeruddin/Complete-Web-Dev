import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Card from './components/Card'
import App from './App'
import MovieProvider from './contexts/MovieContext.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/favourite" element={<Favourite />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider> 
      <RouterProvider router={router} />
    </MovieProvider>
  </StrictMode>
)
