import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({cart}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div>
        <header className='bg-white border-b border-gray-200'>
          <div className='container mx-auto flex justify-between items-center p-5'>
            {/* Logo */}
            <Link to='/'>
              <div>
                <img src="/logo.png" alt="GrabMart Logo" className='w-24' />
              </div>
            </Link>

            {/* Hamburger Menu for Mobile */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-2xl focus:outline-none'
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Navigation Links */}
            <ul
              className={`flex flex-col md:flex-row items-center text-lg font-semibold bg-white md:bg-transparent w-full md:w-auto absolute md:static left-0 top-16 md:top-auto transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
                }`}
            >
              <li className='mr-5 hover:text-green-500 cursor-pointer'>
                <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li className='mr-5 hover:text-green-500 cursor-pointer'>
                <Link to='/allproducts' onClick={() => setIsMenuOpen(false)}>Products</Link>
              </li>
              <li className='mr-5 hover:text-green-500 cursor-pointer'>
                <Link to='/contact' onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
            </ul>

            {/* Login and Cart */}
            <div className='hidden md:flex justify-center items-center gap-3'>

              <Link to='/login'>
                <button className='bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded text-lg font-bold text-white text-center cursor-pointer'>
                  Login
                </button>
              </Link>

              <Link to='/cart'>
                <button>
                  <span className='text-green-600'>{cart.length}</span><FaCartShopping size={30} />
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Login and Cart */}
          {isMenuOpen && (
            <div className='flex flex-col items-center gap-3 mt-3 md:hidden'>
              <button className='bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded text-lg font-bold text-white text-center cursor-pointer'>
                Login
              </button>

              <Link to='/cart'>
                <button>
                <span className='text-green-600'>{cart.length}</span><FaCartShopping size={30} />
                </button>
              </Link>
            </div>
          )}
        </header>
      </div>
    </>
  )
}

export default Navbar