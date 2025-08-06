import React from 'react'

export const DescriptionSkeleton = () => {
  return (
    <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
      {/* Skeleton for Carousel */}
      <div className="h-96 overflow-hidden rounded-lg xl:h-[34rem] bg-gray-200 animate-pulse">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      {/* Skeleton for Product Details */}
      <section className="flex flex-col space-y-4">
        <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-24 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
      </section>
    </div>
  )
}
