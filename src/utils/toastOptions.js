import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { useWindowSize } from './useWindowSize'

// const [windowSize, setWindowSize] = useWindowSize()

// const isMobile = windowSize[0] < 650
let isMobile = false

try {
  isMobile = window.innerWidth < 650
} catch (error) {
  console.log('window is undefined')
}

export const toastOptions = {
  position: isMobile ? 'top-right' : 'bottom-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
}

export const addProductToast = () => {
  return toast.success('Product added to cart.', { ...toastOptions })
}

export const removeProductToast = () => {
  return toast.success('Product removed from cart.', { ...toastOptions })
}

export const ProductQtyUpdatedToast = () => {
  return toast.info('Product Quantity Updated.', { ...toastOptions })
}

export const setFilterToast = (filter) => {
  return toast.success(`Filter set to ${filter}`, { ...toastOptions })
}

export const clearFilterToast = () => {
  return toast.info(`All filters cleared.`, { ...toastOptions })
}
