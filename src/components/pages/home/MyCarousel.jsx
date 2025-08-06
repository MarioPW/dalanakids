import { Carousel } from "flowbite-react"
import { useState, useEffect } from "react"

import { CarouselService } from "../../../services/carousel"

export function MyCarousel() {
  const [images, setImages] = useState([]);
  const carouselService = new CarouselService();

  useEffect(() => {
    const getCarouselSettings = async () => {
      try {
        const res = await carouselService.getCarousel()
        setImages(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCarouselSettings()
  }, [])
  return (
    <div className="h-56 sm:h-[600px] color-white">
      <Carousel leftControl="<" rightControl=">">
        {images && images.map((image, index) => (
          <img src={image.img_url} alt={`Imagen del Carrusel ${index + 1}`} key={image.id}/>
        ))}
      </Carousel>
    </div>
  );
}
