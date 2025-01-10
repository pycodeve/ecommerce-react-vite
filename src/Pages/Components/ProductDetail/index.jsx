import { useContext } from 'react';
import { ShoppingCartContext } from '../../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./style.css";

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);
    const product = context.productToShow;

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail z-20  flex-col fixed bg-white right-0 border border-black rounded`}>
            <div className=" items-center p-6">

                <div className="flex justify-between pb-2">
                    <h2 className="font-medium text-xl">Detail</h2>
                    <XMarkIcon 
                        onClick={() => context.closeProductDetail()} 
                        className="size-6 text-black cursor-pointer" 
                    />
                </div>

                <figure className="mb-2"> 
                    <img
                        className="x-full h-full rounded-lg"
                        src={product?.images}
                        alt={product.title}
                    />
                </figure>

                <p className='flex flex-col'>
                    <span className="font-medium text-2xl mb-2">{product.price}</span>
                    <span className="font-medium text-md mb-2">${product.title}</span>
                    <span className="font-light text-sm">{product.description}</span>
                </p>
            </div>
        </aside>
    )
}

export default ProductDetail;