import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import AllProducts from './components/Allproducts/AllProducts'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

const App = () => {

  const [cart, setCart] = useState([])
  const [shippingOption,setShippingOption] = useState('standard')

  const AddToCart = (product) => {

    const isProductExist = cart.find((findItem) => findItem.id === product.id)
    if (isProductExist) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      })
      setCart(updatedCart)
    } 
    else {
      setCart([...cart, {...product,quantity: 1}])
    }

  }

  const handleIncrement = (id) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.quantity < cartItem.stock) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCart(updatedCart)
  }

  const handleDecrement = (id) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    })
    setCart(updatedCart.filter((item) => item.quantity > 0))
  }

  const handleRemove = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id)
    setCart(updatedCart)
  }


  const getTotalPrice = () => {
    const shippingCost = shippingOption === 'express' ? 120 : shippingOption === 'standard' ? 50 : 0 // Determine shipping cost
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    return (totalPrice + shippingCost).toFixed(2) // Add shipping cost to total price
  }



  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar cart={cart} />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart cart={cart} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleRemove={handleRemove} getTotalPrice={getTotalPrice} shippingOption={shippingOption} setShippingOption={setShippingOption} />} />
            <Route path="/allproducts" element={<AllProducts AddToCart={AddToCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App