import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: 
    <ProtectedRoute>
      <App />
    </ProtectedRoute>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
  </React.StrictMode>,
)
