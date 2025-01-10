import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';

import "./style.css";

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }

    const handleCheckout = () => {

        const orderToAdd = {
            data: "01.02.23",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
    }

    return (
        <aside className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu z-30  flex-col fixed bg-white right-0 border border-black rounded`}>
            <div className=" items-center p-6">

                <div className="flex justify-between pb-2">
                    <h2 className="font-medium text-xl">My Order</h2>
                    <XMarkIcon 
                        onClick={() => context.closeCheckoutSideMenu()} 
                        className="size-6 text-black cursor-pointer" 
                    />
                </div>

                <div className="productos-checkout-container overflow-y-scroll">

                    {
                        context.cartProducts.map(product => {
                            return (
                                <OrderCard 
                                    key={product.id} 
                                    id={product.id} 
                                    title={product.title} 
                                    imageUrl={product.images} 
                                    price={product.price} 
                                    handleDelete={handleDelete}
                                />
                            )
                        })
                    }
|
                </div>

                <div className="mb-6">
                    <p className="flex mb-2 justify-between items-center">
                        <span className="font-light">Total: </span>
                        <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                    </p>

                    <Link to="/my-order/last">
                        <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                    </Link>
                </div>

            </div>
        </aside>
    )
}

export default CheckoutSideMenu;