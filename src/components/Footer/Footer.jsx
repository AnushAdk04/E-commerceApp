import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='bg-green-900 text-white'>
        <div className='container px-5 py-12 mx-auto flex flex-wrap md:flex-nowrap'>
          {/* Logo and Description */}
          <div className='w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0'>
            <img src="/logo.png" alt="GrabMart Logo" className='w-24 mx-auto md:mx-0' />
            <p className='mt-4 text-sm'>
              Your one-stop shop for all your needs.
            </p>
          </div>

          {/* Menu Section */}
          <div className='w-full md:w-1/4 px-4 mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-4'>MENU</h2>
            <ul className='list-none space-y-2'>
              <li>Features</li>
              <li>Info Center</li>
              <li>News Blog</li>
              <li>Login</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className='w-full md:w-1/4 px-4 mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-4'>COMPANY</h2>
            <ul className='list-none space-y-2'>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Login</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='w-full md:w-1/4 px-4'>
            <h2 className='text-lg font-bold mb-4'>CONTACT</h2>
            <ul className='list-none space-y-2'>
              <li>Contact Sales</li>
              <li>+977 9812345670</li>
              <li>News Blogs</li>
              <li>+977 9807654321</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='bg-green-800 text-white py-4 px-5'>
          <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='text-center md:text-left mb-4 md:mb-0'>
              <p>© 2025 All rights reserved</p>
              <p>
                Designed & Developed by{' '}
                <a href="https://anushadhikari.com.np" className='text-lg font-bold'>
                  Anush Adhikari
                </a>
              </p>
            </div>
            <div className='flex justify-center md:justify-end space-x-4 text-2xl'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer