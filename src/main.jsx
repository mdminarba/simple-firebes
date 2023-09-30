import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './component/Home/Home';
import Root from './component/Root/Root';
import Loging from './component/Auth/Loging';
import Register from './component/Auth/Register/Register';
import HeroRegistr from './component/HeroRegistr/HeroRegistr';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/loging",
        element:<Loging></Loging>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path: "/registerHero",
        element:<HeroRegistr></HeroRegistr>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
