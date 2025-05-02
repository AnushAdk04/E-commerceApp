import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,handleIncrement,handleDecrement,handleRemove,getTotalPrice, shippingOption, setShippingOption}) => {


  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }


  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>

            {/* cart section start */}

            {
              cart.map((cartItem)=>(
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={cartItem.id}>
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={cartItem.thumbnail} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{cartItem.title}</span>
                    <span className="text-red-500 text-xs">{cartItem.category}</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>handleRemove(cartItem.id)}>Remove</a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <button className='border px-2 py-1' onClick={()=>handleDecrement(cartItem.id)}>-</button>
  
                  <button className='px-2'>{cartItem.quantity}</button>
                  <button className='border px-2 py-1' onClick={()=>handleIncrement(cartItem.id)}>+</button>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">{cartItem.price} R.s</span>
                <span className="text-center w-1/5 font-semibold text-sm">{cartItem.price * cartItem.quantity} R.s</span>
              </div>
              ))
            }


            {/* cart section end */}

            <Link to='/allproducts' className="flex font-semibold text-indigo-600 text-sm mt-10">

              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">{cart.length} Items</span>
              <span className="font-semibold text-sm">R.s {getSubtotal()}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm" value={shippingOption} onChange={(e)=>setShippingOption(e.target.value)}>
                <option value=''>Select Shipping Option</option>
                <option value='standard'>Standard Shipping - R.s 50.00</option>
                <option value='express'>Express Shipping - R.s 120.00</option>
              </select>
            </div>
            
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>R.s {getTotalPrice()}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart