import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Service = () => {
    return (
        <div className='container mx-auto px-5 py-10'>
            <h1 className='text-center text-4xl font-bold mb-5'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Free Shipping */}
                <div className='bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-green-600 transition duration-300'>
                    <FaShippingFast size={40} className='mb-4' />
                    <p className='text-lg font-bold'>Free Shipping</p>
                </div>

                {/* Best Deals */}
                <div className='bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-green-600 transition duration-300'>
                    <BiSolidOffer size={40} className='mb-4' />
                    <p className='text-lg font-bold'>Best Deals</p>
                </div>

                {/* Authentic Products */}
                <div className='bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-green-600 transition duration-300'>
                    <MdOutlineVerifiedUser size={40} className='mb-4' />
                    <p className='text-lg font-bold'>Authentic Products</p>
                </div>

                {/* Secure Payment */}
                <div className='bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-green-600 transition duration-300'>
                    <MdOutlinePayment size={40} className='mb-4' />
                    <p className='text-lg font-bold'>Secure Payment</p>
                </div>
            </div>
        </div>
    )
}

export default Service