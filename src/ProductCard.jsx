import React from 'react'
import './App.css'

function ProductCard({productImg,productName, price,currentStatus,about}) {
  return (
    <>
   <div className="w-72 text-black overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
  
  <div className="h-64 overflow-hidden text-black">
    <img
      src={productImg}
      alt="product"
      className="h-full w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  <div className="p-5 text-black">
    <h2 className="text-xl font-bold text-black">
      {productName}
    </h2>

    <h3 className="mt-2 text-lg font-semibold text-green-600">
      ${price}
    </h3>

    <p className="mt-2 text-sm font-medium text-gray-700">
      {currentStatus}
    </p>

    <p className="mt-2 text-sm leading-5 text-gray-500">
      {about}
    </p>
  </div>

</div>
    </>
  )
}

export default ProductCard