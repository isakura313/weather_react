import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SavedCity from './components/Saved'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/saved",
        element: "SavedCity"
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
