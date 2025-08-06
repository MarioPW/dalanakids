import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";
import { useUserContext } from "../../../../context/UserContext";
import { ProductServices } from "../../../../services/products";

export const ConfirmDeletion = () => {
  const productServices = new ProductServices();
  const [openModal, setOpenModal] = useState(false);

  const { product } = useUserContext();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await productServices.deleteProduct(product.id);
      setOpenModal(false);
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <Button color={"red"} onClick={() => setOpenModal(true)}><FaRegTrashCan color="red"/></Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 text-gray-400 h-14 w-14 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal dark:text-gray-400">
              Segura que deseas <strong className="text-red-700">Eliminar: </strong> 
              <strong className="text-blue-500">{product ? product.name : ""}?</strong>
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
