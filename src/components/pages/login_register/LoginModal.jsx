import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserServices } from "../../../services/users";
import { useUserContext } from "../../../context/UserContext";
import { jwtDecode } from 'jwt-decode';

export function LoginModal() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useUserContext()
  const service = new UserServices()
  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value)
    } else if (e.target.id === "password") {
      setPassword(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.login(email, password)
      if (response.status === 200) {
        const loggedUser = jwtDecode(response.data.access_token)
        setUser(loggedUser)
        setOpenModal(false)
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInputValue = document.querySelector('#email').value
    if (emailInputValue && emailRegex.test(emailInputValue)) {
        const response = await service.forgotPassword(email)
        response.status === 200 && alert("Hemos enviado un correo para restablecer tu contraseña. Revísalo para ingresar de nuevo.")
        response.status === 404 && alert("Correo no encontrado.")
    } else {alert("Debes ingresar un correo valido")}
  }
  return (
    <>
      <Button className="bg-blue-500" onClick={() =>setOpenModal(true)}>Ingresar</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <form action="submit" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Iniciar Sesión</h3>
              <div>
                <div className="block mb-2">
                  <Label htmlFor="email" value="Correo" />
                </div>
                <TextInput id="email" type="email" ref={emailInputRef} placeholder="correo@email.com" required onChange={handleChange} />
              </div>
              <div>
                <div className="block mb-2">
                  <Label htmlFor="password" value="Contraseña" />
                </div>
                <TextInput id="password" type="password" required onChange={handleChange} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Recordarme</Label>
                </div>
                <a onClick={handleForgotPassword} href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Olvidaste tu contraseña?
                </a>
              </div>
              <div className="w-full">
                <Button type="submit" >Ingresar</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                No tienes Cuenta Aún?
                <Link to="/register" onClick={() => setOpenModal(false)} className="text-cyan-700 hover:underline dark:text-cyan-500" >
                  Regístrate
                </Link>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
