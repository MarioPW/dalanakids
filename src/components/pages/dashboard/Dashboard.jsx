import { ProductForm } from './products/ProductForm';
import { ListOfProducts } from './products/ListOfProducts';
import { CategoryForm } from './categories/CategoryForm';
import { useState } from 'react'
import { CarouselPreview } from './carousel/CarouselPreview';
import { ToggleSection } from './ToggleSection'

export const Dashboard = () => {
  const [isOpenNewProduct, setIsOpenNewProduct] = useState(false);
  const [isOpenListOfProducts, setIsOpenListOfProducts] = useState(false);
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenCarousel, setIsOpenCarousel] = useState(false);

  return (
    <div className="block w-full m-auto mt-12 sm:text-left sm:w-5/6">
    <ToggleSection
      label="Nuevo Producto"
      isOpen={isOpenNewProduct}
      onToggle={() => setIsOpenNewProduct(!isOpenNewProduct)}
    >
      <ProductForm />
    </ToggleSection>

    <ToggleSection
      label="Lista de Productos"
      isOpen={isOpenListOfProducts}
      onToggle={() => setIsOpenListOfProducts(!isOpenListOfProducts)}
    >
      <ListOfProducts />
    </ToggleSection>

    <ToggleSection
      label="Categorías"
      isOpen={isOpenCategories}
      onToggle={() => setIsOpenCategories(!isOpenCategories)}
    >
      <CategoryForm />
    </ToggleSection>

    <ToggleSection
      label="Carrusel"
      isOpen={isOpenCarousel}
      onToggle={() => setIsOpenCarousel(!isOpenCarousel)}
    >
      <CarouselPreview />
    </ToggleSection>
  </div>
  )
}
