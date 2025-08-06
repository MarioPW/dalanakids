import React from 'react'
import { GiShoppingCart } from "react-icons/gi";

export const ShopingCart = () => {
  return (
    <button
    type="button"
    className="relative mr-4 rounded-full bg-orange-400 p-1 text-white hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-500"
  >
    <span className="absolute -inset-1.5" />
    <span className="sr-only">View notifications</span>
    <GiShoppingCart className="h-8 w-8" aria-hidden="true"/>
  </button>
  )
}
