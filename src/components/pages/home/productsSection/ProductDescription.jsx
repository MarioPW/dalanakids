import React from 'react'
import { Button, Carousel, Badge } from "flowbite-react";
import { Link } from "react-router-dom";
import { PriceFormatter } from '../../../utilities/PriceFormater';


export const ProductDescription = ({ product }) => {
    const handleAddToCart = () => {
        const loggedUser = JSON.parse(localStorage.getItem('token'))
        !loggedUser && alert('Por favor inicia sesion')
    }

    return (
        <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {/* Carousel */}
            <div className="h-96 overflow-hidden rounded-lg xl:h-[34rem]">
                <Carousel slide={false}>
                    {product.images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.url}
                            alt={product.name}
                            className="object-cover w-full h-full"
                            loading="lazy"
                            style={{ viewTransitionName: `image-${index}` }}
                        />
                    ))}
                </Carousel>
            </div>
            {/* Product Details */}
            <section className="flex flex-col justify-between p-4 xl:p-0">
                <div className="flex flex-col space-y-3">
                    <h2 className="text-3xl text-green-500 dark:text-white" style={{ fontFamily: "Luckiest Guy" }}>
                        {product.name}
                    </h2>
                    <p className="text-gray-700 text-md dark:text-gray-300">
                        {product.description}
                    </p>
                    <p className="text-2xl font-semibold text-indigo-600">
                        $<PriceFormatter>{product.price}</PriceFormatter>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Stock disponible: {product.stock}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Marca: {product.brand}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Categoría: {product.category_name}
                    </p>
                    <div className='flex flex-col gap-3 justify-ceter'>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Tallas Disponibles:
                        </p>
                        <p className="flex flex-wrap gap-2">
                            {product.sizes.map(size => <Badge color="info" key={size.id}>{size.size.toUpperCase()}</Badge>)}</p>
                    </div>

                </div>
                <div className='flex justify-between gap-2'>
                    <Link to="/" className="flex items-center underline underline-offset-4 text-cyan-700" >Volver</Link>
                    <Button className="bg-orange-500" onClick={() => handleAddToCart(product.id)}>Agregar al carrito</Button>

                </div>

            </section>
        </div>
    )
}
