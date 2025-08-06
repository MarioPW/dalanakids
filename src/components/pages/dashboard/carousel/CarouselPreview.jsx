import { Button, Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { CarouselService } from '../../../../services/carousel'
import { CarouselForm } from './CarouselForm'
import { ConfirmDeletionModal } from '../../../utilities/ConfirmDeletionModal'

export const CarouselPreview = () => {
  const [images, setImages] = useState([])
  const [currentImage, setCurrentImage] = useState(null)
  const [openCarouselForm, setOpenCarouselForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const carouselService = new CarouselService()

  const getCarouselSettings = async () => {
    try {
      const res = await carouselService.getCarousel()
      setImages(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getCarouselSettings()
  }, [])

  const handleEditClick = () => {
    setOpenCarouselForm(!openCarouselForm)
    setIsEditing(true)
  }

  const handleAddItemClick = () => {
    setOpenCarouselForm(!openCarouselForm)
    setIsEditing(false)
    setCurrentImage(null)
  }

  return (
    <div className="h-56 sm:h-[600px] text-white">
      <Carousel leftControl="<" rightControl=">" slide={false} onSlideChange={(index) => setCurrentImage(images[index])}>
        {images && images.map((image, index) => (
          <div key={image.id} className="relative w-full h-full">
            <img
              src={image.img_url}
              alt={`Imagen del Carrusel ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {image.slug && (
              <p className="absolute bottom-0 left-0 w-full p-2 text-center bg-black bg-opacity-50">
                {image.slug}
              </p>
            )}
          </div>
        ))}
      </Carousel>
      <div className='flex justify-end gap-4 p-4'>
        <Button color="blue" outline onClick={handleAddItemClick}>Agregar Nuevo</Button>
        <Button color="green" disabled={!currentImage} onClick={handleEditClick}>Editar</Button>
        <ConfirmDeletionModal item={currentImage} onDeleteClass={CarouselService} onDeleteMethod="deleteCarouselItem" itemType="producto"/>
      </div>
      {openCarouselForm && (
        <CarouselForm currentImage={isEditing && currentImage} />
      )}
    </div>
  )
}
