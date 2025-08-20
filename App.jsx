import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './c/Home';
import Registration from './pages/Registration';
import Login from './pages/Login.jsx';
import AddNewCar from './pages/AddNewCar.jsx';
import CartPage from './pages/CartPage.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Home />
        </div>
    },
    {
      path: "/registration",
      element:
        <div>
          <Registration />
        </div>
    },
    {
      path: "/login",
      element:
        <div>
          <Login />
        </div>
    },
    {
      path: "/addcar",
      element:
        <div>
          <AddNewCar/>
        </div>
    },
     {
      path: "/cartpage",
      element:
        <div>
          <CartPage/>
        </div>
    }

  ]
)

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}
export default App