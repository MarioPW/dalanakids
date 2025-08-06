import React from 'react'

export const ProductCardsSkeleton = ({ amount }) => {
  const skeletonArray = Array(amount).fill(null)
  return (
    skeletonArray.map((_, index) => (
<div key={index} className="flex flex-row w-full h-full p-2 sm:border-b-2 sm:rounded-md sm:shadow-md sm:border sm:flex-col">
  {/* Skeleton for image */}
  <div className="flex items-center w-full h-32 bg-gray-200 sm:w-60 sm:h-72">
    <div className="relative w-full h-full"></div>
  </div>
  
  {/* Skeleton for Product Details */}
  <div className="w-full m-4 sm:mt-2">
    <div className="h-6 bg-gray-200 rounded sm:w-4/5 animate-pulse"></div>
    <div className="w-2/4 h-4 mt-2 bg-gray-200 rounded animate-pulse"></div>
    <div className="w-3/4 h-4 mt-2 bg-gray-200 rounded animate-pulse"></div>
  </div>
</div>
    ))
  )
}
