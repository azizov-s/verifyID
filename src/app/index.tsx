import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './providers/router'
import './style/index.css'
import './style/main.css'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
