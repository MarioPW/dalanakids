import React from 'react'
import { useState } from 'react'

import { CategoriesService } from '../../../../services/categories'
import { ListOfCategories } from './ListOfCategories'

export const CategoryForm = () => {
  const service = new CategoriesService()
  const [categoryName, setCategory] = useState()
  const [categoryColor, setColor] = useState('orange-500')

  const setters = {
    categoryName: setCategory,
    categoryColor: setColor
  }
  const handleChange = (e) => {
    setters[e.target.id](e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: categoryName,
      color: categoryColor
    }
    const response = await service.createCategory(data)
    response.status == 200 ? alert("Categoría creada") : alert(`${response.data}`)
  }
  const handleCancelButton = () => {
    document.querySelector('#categoryForm').reset()
    setCategory('')
    setColor('orange-500')
  }
  return (
    <div>

      <form onSubmit={handleSubmit} id='categoryForm'>

        <div className="p-8 space-y-2">
          <div className='block sm:gap-2'><h2 className="font-semibold leading-7 text-purple-600 text-2x2">Crear Categoría de productos</h2>
            <div className="block sm:col-span-4">
              <label htmlFor="categoryName" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
                Categoría
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    autoComplete="username"
                    placeholder='Una o dos palabras'
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <label htmlFor="categoryColor" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Color
            </label>
            <select
              name="categoryColor"
              id='categoryColor'
              onChange={handleChange}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
              <option value="orange-500">
                Naranja
              </option>
              <option value="red-500">
                Rojo
              </option>
              <option value="blue-500">
                Azul
              </option>
              <option value="green-500">
                Verde
              </option>
              <option value="purple-500">
                Morado
              </option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleCancelButton}>
              Cancelar
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Crear</button>
          </div>
        </div>
      </form>
      <ListOfCategories />
    </div>

  )
}
