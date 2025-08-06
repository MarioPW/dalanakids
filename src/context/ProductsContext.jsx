import { createContext, useState } from "react";
import { useContext } from "react";
import { ProductServices } from "../services/products";

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState()
    const productService = new ProductServices()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await productService.getAllProducts();
                setProducts(fetchedProducts)
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, [])

    return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
};

export const useProductsContext = () => {
    const context = useContext(ProductsContext)
    if (context === undefined) {
        throw new Error("useProductsContext must be used within a ProductsProvider")
    }
    return context
}