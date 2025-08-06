import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { UserServices } from '../../../services/users';

export const ResetPasswordForm = () => {
    const { token } = useParams()
    const service = new UserServices()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        if (data.password1 === data.password2) {
            const response = await service.resetPassword(data)
            if (data.password1 !== data.password2) {
                alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.")
                return
            }
            try {
                const response = await service.resetPassword(data)
                if (response && response.status === 200) {
                    alert("Contraseña cambiada con éxito.")
                    navigate("/")
                } else {
                    console.error("Error during password reset:", response)
                    alert("Hubo un problema al cambiar la contraseña. Por favor, inténtalo de nuevo.")
                }
            } catch (error) {
                console.error("Error in password reset:", error)
                alert("Ha ocurrido un error. Inténtalo más tarde.")
            }
        }
    }
    return (
        <div className="flex justify-center w-full mt-0 sm:mt-10">
            <form className="flex flex-col max-w-md gap-4 p-4 mt-0 border rounded-md min-w-80 sm:mt-10"
                onSubmit={handleSubmit}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ingresa tu nueva contraseña</h3>
                <div>
                    <div className="block mb-2">
                        <Label htmlFor="password1" value="Nueva Contraseña" />
                    </div>
                    <TextInput id="password1" name="password1" type="password" placeholder="*******" required />
                </div>
                <div>
                    <div className="block mb-2">
                        <Label htmlFor="password2" value="Confirmar Contraseña" />
                    </div>
                    <TextInput id="password2" name="password2" type="password" placeholder="********" required />
                    <TextInput id="token" name='token' value={token} type='hidden' required />
                </div>
                <Button type="submit">Enviar</Button>
            </form>
        </div>
    )
}
