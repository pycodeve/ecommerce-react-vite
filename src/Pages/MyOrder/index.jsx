import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import OrderCard from '../../Pages/Components/OrderCard';
import Layout from '../Components/Layout'

function MyOrder() {

  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const id = currentPath.split('/').slice(-1)[0]

  let order = context.order?.slice(-1)[0]

  if(id !== "last"){
    order = context.order[id]
  }

  return (
    <Layout>

      <div className="flex items-center  justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>

      <div className="flex flex-col w-80">

        {
          order.products.map(product => {
            return (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            )
          })
        }

      </div>

    </Layout>
  )
}

export default MyOrder
