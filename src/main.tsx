import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './App'
import './index.css'
import ErrorPage from "./ErrorPage";
import SavedTimes from './pages/SavedTimes';
import {BrowserRouter} from "react-router-dom";
import App from './App'


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SavedCity from './pages/SavedCity'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
)
