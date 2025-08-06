import { useEffect, useState } from "react";
import { ProductServices } from "../../../../services/products";
import { ProductRating } from "../../../utilities/Rating";
import { Link, useParams } from "react-router-dom";
import { ProductCardsSkeleton } from "./skeletons/ProductCardsSkeleton";
import { PriceFormatter } from "../../../utilities/PriceFormater";

export function ProductCards() {
  const productServices = new ProductServices()
  const [products, setProducts] = useState()
  const { category } = useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (category) {
          const res = await productServices.getProductsByCategory(category)
          if (res.data) {
            setProducts(res.data)
          }
        } else {
          const res = await productServices.getAllProducts();
          if (res.data) {
            setProducts(res.data)
          }
        }

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProducts();
  }, [category])
  return (
    <div className="block grid-cols-2 py-4 ps-4 sm:grid sm:gap-2 lg:grid-cols-3 xl:grid-cols-4">
      {!products ? <ProductCardsSkeleton amount={12} /> : products.map(product => (
        <Link to={`/description/${product.id}`} key={product.id}>
          <div className="flex justify-between w-full h-full max-w-sm p-2 border-b-2 sm:flex-col sm:rounded-md sm:shadow-md sm:border">
            <div className="flex items-center h-32 overflow-hidden bg-gray-200 min-w-36 sm:w-full sm:h-72">
              <img
                src={product.images[0]["url"]}
                alt={product.name}
                className="object-cover w-full h-full"
                loading="lazy"
                style={{ viewTransitionName: `image-0` }}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow ms-3 sm:mt-1">
              <p className="text-2xl font-semibold text-indigo-600">
                $ <PriceFormatter>{product.price}</PriceFormatter>
              </p>
              <h4 className="text-lg tracking-tight text-purple-900 dark:text-white">
                {product.name}
              </h4>
              <ProductRating />
            </div>
          </div></Link>
      ))}
    </div >
  );
}


