import { createContext, useState } from "react";
import { useContext } from "react";
import { ProductServices } from "../services/products";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [product, setProduct] = useState()
    const [user, setUser] = useState(false)
    const productService = new ProductServices()

    return <UserContext.Provider value={{ setUser, user, product, setProduct, productService }}>{children}</UserContext.Provider>
};

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider")
    }
    return context
}