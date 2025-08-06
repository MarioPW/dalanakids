import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";

export const ConfirmDeletionModal = ({ item, onDeleteClass, onDeleteMethod, itemType }) => {
  const [openModal, setOpenModal] = useState(false);
  const service = new onDeleteClass();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await service[onDeleteMethod](item.id);
      setOpenModal(false);
      res && console.log(`Elemento ${itemType} eliminado con éxito.`)
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
      <>
        <Button color="red" onClick={() => setOpenModal(true)}><FaRegTrashCan color="red" className="mt-0.5 mr-1" />Borrar</Button>
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 text-gray-400 h-14 w-14 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal dark:text-gray-400">
                Segura que deseas <strong className="text-red-700">Eliminar: </strong> 
                <strong className="text-blue-500">{item ? itemType : ""}?</strong>
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={handleDelete}>
                  Si, segura.
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No, cancelar
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  