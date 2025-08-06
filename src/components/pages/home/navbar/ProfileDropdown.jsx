import React, { Fragment } from 'react'
import { TbMoodKid } from "react-icons/tb";
import { Menu, Transition, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { RiAdminLine } from "react-icons/ri";
import { HiArrowSmRight, HiInbox, HiShoppingBag, HiTable, HiUser, HiCog,  HiLogout } from "react-icons/hi";
import { Link } from 'react-router-dom'
import { useUserContext } from '../../../../context/UserContext'


export const ProfileDropdown = ({ user }) => {
    const { setUser } = useUserContext()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const handleSignOut = () => {
        localStorage.removeItem("token")
        location.reload()
    }
    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="w-8 h-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0XikLERJ8A3kTEC6_j9lMiLFu7-27j_AyA&s"
                        alt={user.name ? user.name : user.email}
                    />
                </MenuButton>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                        {user.role === "admin" && <Link
                            className="flex items-center px-3 py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            to="/dashboard">
                            <RiAdminLine className="mr-2" />Dashboard</Link>}
                    </MenuItem>
                    <MenuItem>
                        <Link
                            className="flex items-center px-3 py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            to="/dashboard">
                            <HiUser className="mr-2" />Mi Perfil</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            className="flex items-center px-3 py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            to="/dashboard">
                            <HiCog className="mr-2" />Configuración</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link
                                to="/"
                               className="flex items-center px-3 py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                onClick={handleSignOut}>
                               <HiLogout className="mr-2" />Cerrar Sesión</Link>
                    </MenuItem>
                </MenuItems>
            </Transition>
        </Menu>
    )
}
