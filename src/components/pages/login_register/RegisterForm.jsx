
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserServices } from "../../../services/users";

export function RegisterForm() {
  const service = new UserServices()

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [repeatPassword, setRepeatPassword] = useState({});

  const navigate = useNavigate();
  const setters = {
    email: setEmail,
    password: setPassword,
    repeat_password: setRepeatPassword,
  }
  const handleChange = (e) => { setters[e.target.id](e.target.value) }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await service.register(email, password, repeatPassword)
    if (response) {
      navigate("/confirm-register")
    } else { alert("TODO: Capturar el error para mostrarlo: email en uso, contraseñas no coinciden, error 500, etc.") }
  }

  return (
    <div className="flex justify-center w-full">
      <form className="flex flex-col max-w-md gap-4 p-8 mt-10 border-2 rounded-md" onSubmit={handleSubmit}>
        <div>
          <div className="block mb-2 text-left">
            <Label htmlFor="email" value="Correo" />
          </div>
          <TextInput id="email" type="email" placeholder="name@email.com" required shadow onChange={handleChange} />
        </div>
        <div>
          <div className="block mb-2 text-left">
            <Label htmlFor="password" value="Contraseña" />
          </div>
          <TextInput id="password" type="password" required shadow onChange={handleChange} />
        </div>
        <div>
          <div className="block mb-2 text-left">
            <Label htmlFor="repeat-password" value="Confirmar Contraseña" />
          </div>
          <TextInput id="repeat_password" type="password" required shadow onChange={handleChange} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            Acepto &nbsp;
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              términos y condiciones
            </Link>
          </Label>
        </div>
        <Button type="submit">Regístrate</Button>
      </form>
    </div>
  );
}
