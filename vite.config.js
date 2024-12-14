import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path-browserify'

// https://vitejs.dev/config/
export default defineConfig({
  resolve : {
    alias : {
      path : 'path-browserify'
    },
  },
  build : {
    chunkSizeWarningLimit : 1000 ,
  },

  optimizeDeps: {
    include: [
      '@emotion/react', 
      '@emotion/styled', 
      '@mui/material/Tooltip'
    ],
  },
  plugins: [

    {
    
    name : 'react',
    enableJsx : true , 
  },
  react()

],
})
