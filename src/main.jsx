import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home/Home';
import Main from './Layout/Main';
import Colleges from './Pages/Colleges/Colleges';
import CollegeDetails from './Pages/Colleges/CollegeDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'colleges',
        element: <Colleges></Colleges>
      },
      {
        path:'/details/:_id',
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/AllCollege/${params._id}`)
      }
    ]
  },
]);










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
