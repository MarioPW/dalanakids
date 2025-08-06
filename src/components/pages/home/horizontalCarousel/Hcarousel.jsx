// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import { ColorfulWord } from '../../../utilities/ColorfulWord';
import { useUserContext } from "../../../../context/UserContext";
import { ProductCardsSkeleton } from "../productsSection/skeletons/ProductCardsSkeleton";
import { Link } from "react-router-dom";
import { ProductRating } from "../../../utilities/Rating";
import { useEffect, useState } from "react";
import { PriceFormatter } from "../../../utilities/PriceFormater";

export const Hcarousel = () => {
  const { productService } = useUserContext()
  const [products, setProducts] = useState()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productService.getAllProducts();
        if (res.data) {
          setProducts(res.data)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProduct()
  }, [])
  return (
    <>
      <div className="flex items-center justify-center w-full py-2 my-6 bg-blue-100" >
        <ColorfulWord size="text-xl sm:text-3xl">¡NOVEDADES!</ColorfulWord>
      </div>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="m-6 mySwiper"
      >
        {products && products.map(product => (
          <SwiperSlide key={product.id}>
            <Link to={`/description/${product.id}`} key={product.id}>
              <div className="flex flex-col justify-between w-full h-full p-2 border-b-2 w-sm sm:rounded-md sm:shadow-md sm:border">
                <div className="flex items-center overflow-hidden bg-gray-200 h-28 min-w-36 sm:w-full sm:h-36">
                  <img
                    src={product.images[0]["url"]}
                    alt={product.name}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    style={{ viewTransitionName: `image-0` }}
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow ms-3 sm:mt-1">
                  <p className="text-xl font-semibold text-indigo-600">
                    $ <PriceFormatter>{product.price}</PriceFormatter>
                  </p>
                  <h4 className="tracking-tight text-purple-900 text-md dark:text-white">
                    {product.name}
                  </h4>
                  <ProductRating />
                </div>
              </div></Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}