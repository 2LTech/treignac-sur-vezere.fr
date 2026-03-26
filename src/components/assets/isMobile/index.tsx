'use client'

import { useCallback, useEffect, useState } from 'react'

const useMobile = () => {
  const [width, setWidth] = useState<number>(0)

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return { isMobile: width <= 915 }
}

export default useMobile
