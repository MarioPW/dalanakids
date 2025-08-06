import React, { useState } from 'react'
import { UserServices } from '../../../services/users'
import { useUserContext } from '../../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export const ConfirmRegister = () => {
    const [code, setCode] = useState()
    const service = new UserServices()
    const { setToken, userEmail, password, buttonText, setButtonText } = useUserContext()
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCode(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const confirm = await service.confirmRegister(code)
        if (confirm) {
            if (buttonText == "Ingresar") {
                const response = await service.login(userEmail, password)
                if (response) {
                    setToken(response)
                } else {
                    console.log("User or password not found: ", response)
                }
                setButtonText("Salir")
                navigate("/")
            } else {
                setButtonText("Ingresar")
                service.logout()
            }
        }
    }
    return (
        <div className='flex flex-col items-center justify-center mt-44'>
            <div className='border border-gray-200 bg-white px-4 py-16 rounded-md sm:px-6 lg:px-8'>
                <h2>Te hemos enviado un código de verificación al correo electrónico {userEmail}</h2>
                <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                    Ingresa el código aquí para activar tu cuenta:
                </label>
                <form action='submit' className="relative mt-2 rounded-md shadow-sm"
                    onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="code"
                        id="code"
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder='XXXX'
                    />
                    <button
                        className="absolute inset-y-0 right-0 flex items-center rounded-r-md border border-transparent bg-indigo-600 px-3 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:rounded-l-md sm:px-3">
                            Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}
