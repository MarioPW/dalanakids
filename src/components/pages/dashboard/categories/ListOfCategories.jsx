import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CategoriesService } from '../../../../services/categories'
import { Table } from "flowbite-react";
import { ConfirmDeletionModal } from '../../../utilities/ConfirmDeletionModal';


export const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    const categoriesService = new CategoriesService()
    useEffect(() => {
        async function getCategories() {
            const res = await categoriesService.getAllCategories()
            setCategories(res.data)
        }
       getCategories()
    }, [])

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Editar</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Borrar</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {categories.map((category) => (
            <Table.Row key={category.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {category.name}
              </Table.Cell>
              <Table.Cell>{category.color}</Table.Cell>
              <Table.Cell>
                <button
                  
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Editar
                </button>
              </Table.Cell>
              <Table.Cell>
                <ConfirmDeletionModal
                  item = {category}
                  itemType = {category.name}
                  onDeleteClass = {CategoriesService}
                  onDeleteMethod = {"deleteCategory"}
                  className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                >
                  
                </ConfirmDeletionModal>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}