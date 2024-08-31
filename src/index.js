import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import Content from './Pages/Content';
import Contact from './Pages/Contact';
import ToDoListProject from './TodoList/ToDoListProject';
import Tabbing from './TabbingSystem/tabbing';
import BlogForDynamicRouter from './Pages/BlogForDynamicRouter';
import BlogsDataDetails from './Data/BlogsDataDetails';
import Error from './Data/Error';
const root = ReactDOM.createRoot(document.getElementById('root'));
let routeAll = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"content",
      element:<Content/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"todolist",
      element:<ToDoListProject/>
    },
    {
      path:"tabbing",
      element:<Tabbing/>
    },
    {
      path:"blogs",
      element:<BlogForDynamicRouter/>
    },
    // dynamic routes 
    {
      path:"blogs/:blogs-id",
      element: <BlogsDataDetails/>
    },
    {
      path:"*",
      element:<Error/>
    }
  ]
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routeAll}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
