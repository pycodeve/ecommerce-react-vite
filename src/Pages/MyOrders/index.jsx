import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import {ShoppingCartContext} from '../../Context';
import OrdersCard from '../Components/OrdersCard'
import Layout from '../Components/Layout'


function MyOrders() {

  const context = useContext(ShoppingCartContext);

  return (
    <Layout>

      <div className="flex items-center  justify-center relative w-80 mb-4">
      <h1 className="font-medium text-xl">My Orders</h1>
      </div>

      {
        context.order.map((order, index) => {
          return (
            <Link to={`/my-order/${index}`} key={index}>
              <OrdersCard
                id={index}
                totalProducts={order.totalProducts}
                totalPrice={order.totalPrice}
              />
            </Link>
          )
        })
      }
    </Layout>
  )
}

export default MyOrders
