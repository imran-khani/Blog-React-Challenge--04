
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PostFullPage from './components/PostFullPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    {
      path:'/:id',
      element:<PostFullPage />
    }
    ]
  },
])
function App() {

  return <RouterProvider router={router} />

}
export default App
