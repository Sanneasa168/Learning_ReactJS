import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductCard from './components/CardComponts.jsx';
import AboutUS from './page/about-us/AboutUse.jsx';
import ContactUS from './page/contact-us/ContactUS.jsx';
import Services from './page/services/Serivces.jsx';
import Layout from './layout/Layout.jsx';
import { ProductDetails } from './layout/products-details/ProductDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout />,
    children : [
      {
        path: "/",
        element:<App/>
      },
      {
        path :"/",
        element:<ProductCard/>
      },
      {
        path :"/about-us",
        element : <AboutUS/>
      },
      {
        path :"/contact-us",
        element : <ContactUS/>
      },
      {
        path :"/services",
        element : <Services/>
      },
     {
       path: "products-details",
       element : <ProductDetails />
     }
    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
