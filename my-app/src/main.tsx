import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './global.css'

import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import CadProduto from './routes/CadProduto/Index'
import Error from './routes/Error'
import App from './App'
import { NomeLojaProvider } from './provider/NomeLojaProvider'



const router = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <Error />, children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/cad-produto', element: <CadProduto /> },
      { path: '/editar-produtos/:id', element: <EditarProdutos /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NomeLojaProvider>
      <RouterProvider router={router} />
    </NomeLojaProvider>
  </StrictMode>,
)
