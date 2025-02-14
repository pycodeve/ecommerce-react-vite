import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../../Context';

const Card = (data) => {

    const context = useContext(ShoppingCartContext);
    
    const showProductDetail = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductTodCart = (product) => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, product])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart){
            return(
                <div
                    className="absolute z-10 top-0 right-0 flex justify-center items-center font-bold bg-black w-6 rounded-full m-2"
                >
                    <CheckIcon className="size-6 text-white" />
                </div>
            )
        }else{

            return(
                <div
                    className="absolute z-10 top-0 right-0 flex justify-center items-center font-bold bg-white w-6 rounded-full m-2"
                    onClick={() => addProductTodCart(data.data)}
                >
                    <PlusIcon className="size-6 text-black" />
                </div>
            )
        }
    }

    return (
        <div className="bg-white relative cursor-pointer w-56 h-60">

            {renderIcon(data.data.id)}

            <figure onClick={() => showProductDetail(data.data)} className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data?.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data?.images[0]} alt="headphones" />
            </figure>
            
            <p onClick={() => showProductDetail(data.data)} className="flex justify-between">
                <span className="text-sm font-light text-wrap">{data.data?.title}</span>
                <span className="text-lg font-medium">{data.data?.price}</span>
            </p>
        </div>
    );
}

export default Card;