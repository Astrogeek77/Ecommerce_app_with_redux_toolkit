'use client'

import { useDispatch, useSelector } from 'react-redux'
import CartSidebar from './CartSidebar'
import Header from './Header'
import { useEffect } from 'react'
import { hideLoading } from '@/redux/slices/cartSlice'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function App({ children }) {
  const dispatch = useDispatch()
  const [windowSize, setWindowSize] = useState([])

  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight])
  }, [])

  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  const { cartItems, loading } = useSelector((state) => state.cart)
  const pathname = usePathname()

  return (
    <div>
      <div
        className={`${
          loading
            ? ''
            : windowSize[0] > 650 &&
              cartItems.length > 0 &&
              (pathname === '/' || pathname.indexOf('/product/') >= 0)
            ? 'mr-32'
            : ''
        }`}
      >
        <Header />
        <main className="p-4">{children}</main>
      </div>
      {windowSize[0] > 650 && <CartSidebar />}
    </div>
  )
}
