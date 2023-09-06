'use client'

import ProductItem from '@/components/ProductItem'
import { data } from '../utils/data'
import { useEffect, useState } from 'react'
// import { set } from 'react-hook-form'

export default function Home() {
  const { products } = data
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

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

  useEffect(() => {
    setCategories(getCategories())
  }, [])

  useEffect(() => {
    filterProducts(filter)
  }, [filter])

  return (
    <>
      <div className="flex flex-wrap items-center justify-around gap-2 my-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className="text-xl px-4 py-2 bg-sky-500 hover:bg-sky-700 rounded-md"
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => setFilter('')}
          className="text-xl px-4 py-2 bg-red-500 hover:bg-red-700 rounded-md"
        >
          Clear Filter
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
