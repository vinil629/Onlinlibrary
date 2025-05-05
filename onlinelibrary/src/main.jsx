import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Components/Browse.jsx';
import Addbook from './Components/Addbook.jsx';

import Error from './Components/Error.jsx';
import Details from './Components/Detailsofbook.jsx';


import Browsedetails from './Components/Browsedetails.jsx';
import CategoryPage from './Categotypage.jsx';
import { store } from './Components/store.js';






const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Render App component when path is "/"
    errorElement:<Error/>,
    children:[


      {
        path: "/browse",  // Define a path for the Browse component
        element: <Browse/>,  // Render Browse component when path is "/browse"
        
        
        
      },
      {
        path:"browse/:id",
        element:<Browsedetails/>

      },

      {
        path:"/add",
        element:<Addbook/>
      },

     
     

     
      
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
       
      },
      {
        path:"/category/:categoryName/details/:id",
        element:<Details/>
      }
      
      
      
     



    ]

  
  },
 
 
  
]);

// Render the application with RouterProvider
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);