import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllProducts = ({AddToCart}) => {
  const [allProducts, setAllProducts] = useState([])
  const [allCategory, setAllCategory] = useState([])
  const [products, setProducts] = useState([])
  const [selectProducts, setSelectProducts] = useState("")
  const [showProducts, setShowProducts] = useState(false)

  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios.get('https://dummyjson.com/products')
      setAllProducts(res.data.products)
    }
    AllProducts()
  }, [])

  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products/category-list')
        setAllCategory(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProductsCategory()
  }, [])

  const filterProducts = (allProducts) => {
    setSelectProducts(allProducts)
    setShowProducts(true)
  }

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios.get(`https://dummyjson.com/products/category/${selectProducts}`)
          setProducts(res.data.products)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [selectProducts])

  return (
    <>
        <h1 className='text-2xl font-bold text-center'>All Products</h1>
        {/* Product Category Section */}
          <div className='flex justify-center items-center mb-6 mt-4'>
          <select
            onChange={(e) => filterProducts(e.target.value)}
            className='border border-gray-300 rounded px-4 py-2'
          >
            <option>Filter By Categories</option>
            {allCategory.map((allProducts, index) => (
              <option key={index} value={allProducts}>
                {allProducts}
              </option>
            ))}
          </select>
        </div>

        {/* Products Section */}
        {showProducts ? (
          <section className='text-gray-600 body-font'>
            <div className='container px-5 py-12 mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {products.map((item) => (
                  <div
                    key={item.id}
                    className='border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-300'
                  >
                    <a className='block relative h-48 rounded overflow-hidden'>
                      <img
                        alt='ecommerce'
                        className='object-cover object-center w-full h-full block'
                        src={item.thumbnail}
                      />
                    </a>
                    <div className='mt-4'>
                      <h3 className='text-gray-900 text-xl tracking-widest font-bold mb-1'>
                        Title: {item.title}
                      </h3>
                      <h2 className='text-black title-font text-lg font-medium'>
                        Rating: {item.rating}
                      </h2>
                      <h2 className='text-black title-font text-lg font-medium'>
                        In Stock: {item.stock}
                      </h2>
                      <p className='mt-1 text-black'>Price: {item.price} R.s</p>
                      <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 cursor-pointer' onClick={() => AddToCart(item)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {allProducts.map((AllItems, index) => (
              <div
                key={index}
                className='border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-300'
              >
                <img
                  src={AllItems.thumbnail}
                  alt=''
                  className='object-cover object-center w-full h-48 rounded'
                />
                <div className='mt-4'>
                  <h3 className='text-black text-xl tracking-widest font-bold mb-1'>
                    Title: {AllItems.title}
                  </h3>
                  <h2 className='text-black title-font text-lg font-medium'>
                    Rating: {AllItems.rating}
                  </h2>
                  <h2 className='text-black title-font text-lg font-medium'>
                        In Stock: {AllItems.stock}
                      </h2>
                  <p className='mt-1 text-black'>Price: {AllItems.price} R.s</p>
                  <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 cursor-pointer'  onClick={() => AddToCart(AllItems)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
  )
}

export default AllProducts