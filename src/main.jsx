import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fonts/Yekan.ttf'
import { RouterProvider } from 'react-router-dom'
import index from './router/index.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './Theme/index.jsx'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
       refetchOnWindowFocus : false,
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
 
   
<>
    <ToastContainer />

    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={theme}>
      <RouterProvider router={index}>
      <App />
    </RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  
    
  </>

)



