import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShoppingCartProvider } from '../../Context'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../Components/Navbar'
import CheckoutSideMenu from '../Components/CheckoutSideMenu'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products/:category", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order/last", element: <MyOrder /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter basename="/ecommerce-react-vite">
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
