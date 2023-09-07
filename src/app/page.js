'use client'

import ProductItem from '@/components/ProductItem'
import { data } from '../utils/data'
import { useEffect, useState, useRef } from 'react'
// import { set } from 'react-hook-form'

export default function Home() {
  const { products } = data
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const searchBoxRef = useRef()
  const [searchTerm, setSearchTerm] = useState('')

  const getCategories = () => {
    let cat = []
    for (let x in products) {
      cat.push(products[x].category)
    }
    var unique = cat.filter(
      (value, index, array) => array.indexOf(value) === index
    )
    return unique
  }

  const filterProducts = (filter) => {
    if (filter == '') {
      setFilteredProducts(products)
      return products
    }
    let filtProd = []
    filtProd = products.filter((product) => product.category === filter)
    setFilteredProducts(filtProd)
    return filtProd
  }

  const searchproducts = (searchTerm) => {
    if (searchTerm == '') {
      setFilteredProducts(products)
      return products
    }
    let searchProd = []
    searchProd = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(searchProd)
    console.log(searchProd)
    return searchProd
  }

  const inactiveCategory =
    'bg-white text-black hover:bg-blue-500 hover:text-white'
  const activeCategory =
    'bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-75'

  const resetFilters = () => {
    setFilter('')
    setSearchTerm('')
    searchproducts('')
    searchBoxRef.current.value = ''
  }

  const markFilter = (e, category) => {
    setFilter(category)
  }

  useEffect(() => {
    setCategories(getCategories())
  }, [])

  useEffect(() => {
    filterProducts(filter)
  }, [filter])

  useEffect(() => {
    console.log(searchTerm)
    searchproducts(searchTerm)
  }, [searchTerm])

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 my-6 border-2 bg-black-500 rounded-md px-2 py-4 relative pt-8">
        <h2 className="absolute -top-5 bg-white text-black text-xl p-1 px-3 rounded-md uppercase">
          Categories & Filters
        </h2>
        {categories.map((category) => (
          <button
            key={category}
            disabled={category === filter}
            onClick={(e) => markFilter(e, category)}
            className={`text-lg px-4 py-2 rounded-md capitalize ${
              category === filter ? activeCategory : inactiveCategory
            }`}
          >
            {category}
          </button>
        ))}
        {/* <button
          onClick={() => setSearchTerm('')}
          className="text-xl px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md"
        >
          Clear Search
        </button> */}
        <input
          type="text"
          // onChange={(e) => setSearchTerm(e.target.value)}
          ref={searchBoxRef}
          placeholder="Search products..."
        />
        <button
          onClick={() => searchproducts(searchBoxRef.current.value || '')}
          className="text-xl px-4 py-2 bg-green-500 hover:bg-green-700 rounded-md"
        >
          Search
        </button>
        <button
          onClick={() => resetFilters()}
          className="text-xl px-4 py-2 bg-red-500 hover:bg-red-700 rounded-md"
        >
          Clear all Filters
        </button>
      </div>
      {filteredProducts.length === 0 ? <div>No Products</div> : ''}
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 border-2 py-4 px-2 pt-8 relative mt-8">
          <h2 className="absolute -top-5 text-center justify-self-center bg-white text-black text-xl p-1 px-3 rounded-md uppercase">
            Products
          </h2>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}
