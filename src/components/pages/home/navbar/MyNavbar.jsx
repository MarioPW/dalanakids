import { Link } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LoginModal } from '../../login_register/LoginModal'
import { useUserContext } from '../../../../context/UserContext';
import { ShopingCart } from './ShopingCart';
import { ProfileDropdown } from './ProfileDropdown'
import { useEffect, useState } from 'react';
import { CategoriesService } from '../../../../services/categories';

export const MyNavbar = () => {
  const [categories, setCategories] = useState([])
  const { user } = useUserContext()
  const categoriesService = new CategoriesService();
  const navigation = [
    { name: 'Inicio', color: 'orange-500', current: false, href: '/', id: 1 },
    ...categories,
  ]
  const colors = [
    'text-blue-500',
    'text-yellow-400',
    'text-red-500',
    'text-orange-500',
    'text-green-500',
    'text-purple-700',
  ];
  const classNames = (...classes) => {
    classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await categoriesService.getAllCategories()
        setCategories(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getCategories()
  }, [user]);

  return (
    <div className='fixed top-0 z-50 w-full mx-auto'>
      <Disclosure as="nav" className="mx-auto bg-yellow-200 rounded-b-md max-w-7xl">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex items-center justify-center flex-1 sm:justify-start">
                  <a to="/" className="flex items-center flex-shrink-0">
                    <img
                      className="w-auto rounded-md h-14"
                      src="/dalanakids/assets/dalanaKidsLogo.png"
                      alt="Dalana Kids Logo"
                    />
                  </a>
                  <div className="hidden w-full sm:ml-6 sm:block">
                    <div className="flex justify-around">
                      {navigation.map((item, index) => (
                        <Link
                          key={item.id}
                          to={item.href ? item.href : `/${item.name}`}
                          className={`${colors[index % colors.length]} underline hover:text-white
                            rounded-md px-3 py-2 text-lg`}
                          style={{
                            fontFamily: "Luckiest Guy",
                            textDecorationThickness: '2px',
                            textUnderlineOffset: '4px',
                            textSpacing: '6px',
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {user && <ShopingCart />}
                  {/* Profile dropdown */}
                  {user ? <ProfileDropdown user={user} /> : <LoginModal />}

                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    to={item.href ? item.href : `/${item.name}`}
                    key={item.name}
                    className={`text-${item.color} bg-white block text-center rounded-md px-3 py-2 text-base font-medium`}
                    style={{
                      fontFamily: "Luckiest Guy",
                      fontSize: '20px',
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
