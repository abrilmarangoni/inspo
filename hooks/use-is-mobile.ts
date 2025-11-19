'use client'

import { useState, useEffect } from 'react'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para detectar si es móvil
    const checkIsMobile = () => {
      // Verificar ancho de pantalla
      const isMobileWidth = window.innerWidth < 768
      
      // Verificar user agent
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
      
      // Verificar touch support
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      // Es móvil si cumple cualquiera de estas condiciones
      setIsMobile(isMobileWidth || (isMobileUA && hasTouchScreen))
    }

    // Verificar al montar
    checkIsMobile()

    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return isMobile
}

