import React from 'react'
import ReactDOM from 'react-dom/client'
const queryClient = new QueryClient();
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Routes/Route.jsx';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  <Toaster />
  </QueryClientProvider>
  </AuthProvider>
  </React.StrictMode>,
)
