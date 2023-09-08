import { useState, useEffect } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState([])

  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight])
  }, [])

  return [windowSize, setWindowSize]
}

export default useWindowSize
