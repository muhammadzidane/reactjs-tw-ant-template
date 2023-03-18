// React
import React from 'react'

// React Router DOM
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// Plugins
import router from './plugins/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)