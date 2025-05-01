import React from 'react'
import Layout from '../../components/Layout/Layout'
import {  Link } from 'react-router-dom'

const Cart = () => {
  return (
    <Layout>
      <Link to="/cart">Cart</Link>
      </Layout>
  )
}

export default Cart