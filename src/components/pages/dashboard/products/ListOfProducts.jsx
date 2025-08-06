import { useEffect, useState } from "react"
import { ProductServices } from "../../../../services/products"
import { CiEdit } from "react-icons/ci";
import { ConfirmDeletion } from "./ConfirmDeletion";
import { useUserContext } from "../../../../context/UserContext";

// TODO: 
// 1. ADD FORM VALIDATION
// 2. ADD SPINNER
// 3. ADD ERROR HANDLING
// 4. Impplement pagination
// 5. Implement search
// 6. Implement functionality to delete LIST of products
export const ListOfProducts = () => {
  const productServices = new ProductServices()
  const [products, setProducts] = useState([])
  const { setProduct } = useUserContext()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productServices.getAllProducts();
        if (res.data) {
          setProducts(res.data)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProducts();
  }, [])
  const handelSelection = (e) => {
    if (e.target.checked) {
      const selectedProduct = products.filter ((item) => item.id === e.target.value)
      setProduct(selectedProduct[0])
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between w-full border-b-2 border-gray-300 border-solid">
      <h2 className="font-semibold leading-7 text-purple-600 text-2x2">Lista de Productos DalanaKids</h2>
        <div className="flex items-center h-16 gap-x-6">
          <CiEdit />
          <ConfirmDeletion />
        </div>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {products.map((item) => (
          <li key={item.id} className="flex justify-between py-5 gap-x-6">
            <div className="flex min-w-0 gap-x-4">
              <img className="flex-none w-12 h-12 rounded-full bg-gray-50" src={item.images[0].url} alt={`Imagen de: ${item.description}`}/>
              <div className="flex-auto min-w-0">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500 truncate">{item.description}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">$ {item.price}</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <input value={item.id} type="checkbox" name="option" onChange={handelSelection} className="flex-none p-1 rounded-full bg-emerald-500/20" />
                <p className="text-xs leading-5">{item.category_name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
