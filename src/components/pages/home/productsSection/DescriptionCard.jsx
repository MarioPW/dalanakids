import { useParams } from "react-router-dom";
import { DescriptionSkeleton } from "./skeletons/DescriptionSkeleton";
import { useUserContext } from "../../../../context/UserContext";
import { useEffect, useState } from "react";
import { ProductDescription } from "./ProductDescription";

export function DescriptionCard() {
    const { productService } = useUserContext()
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await productService.getProductById(id);
                if (res.data) {
                    setProduct(res.data)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchProduct();
    }, [])
    return (
        <div className="flex flex-col items-center justify-center w-full lg:py-14">
            {product ? (<ProductDescription product={product} />) : (<DescriptionSkeleton />)}
        </div>
    );
}