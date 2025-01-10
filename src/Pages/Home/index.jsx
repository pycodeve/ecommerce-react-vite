import { useContext, useEffect } from 'react'
import { ShoppingCartContext } from '../../Context'
import { useParams } from 'react-router-dom';

import Layout from '../Components/Layout'
import Card from '../Components/Card'
import ProductDetail from '../Components/ProductDetail'

import './Home.css'

function Home() {

    const context = useContext(ShoppingCartContext)

    const { category }  = useParams();

    useEffect(() => {
        
        context.setSearchByCategory(category?.length > 0 ? category.toLowerCase() : "all")
            
      }, [category])

    const renderView = () => {
        let products = []

        if(context.searchByTitle || context.searchByCategory){
            products = context.filteredItems;
        }else{
            products = context.items;
        }

        if(products?.length === 0){
            return(
                <p className="w-80 text-center">We don't have products</p>
            )
        }

        return (
            products?.map(item => {
                if (item.title && item.title.length > 25) {
                    return <Card key={item.id} data={item} />
                }
            })
        )
    }

    return (
        <Layout>

            <div className="flex items-center  justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>

            <input 
                type='text' 
                placeholder='Search a product'
                className="rounded-lg border bg-white border-black w-80 p-3 mb-4 focus:outline-none"    
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />

            {
                context.items ? (
                    <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                        {renderView()}
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }

            <ProductDetail />

        </Layout>
    )
}

export default Home
