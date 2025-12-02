import { useRef, useEffect, useCallback } from 'react'
import { useAnimationFrame } from 'framer-motion'

const CAROUSEL_SPEED = 1.2

export function useCarousel({ isMobile, cardWidth, episodesLength, isPaused }) {
  const marqueeRef = useRef(null)
  const carouselOffset = useRef(0)
  const lastFrameTime = useRef()

  useEffect(() => {
    lastFrameTime.current = performance.now()
  }, [])

  useAnimationFrame(() => {
    if (!isMobile && !isPaused) {
      const now = performance.now()
      let frameDelta = now - lastFrameTime.current
      if (frameDelta > 100) frameDelta = 16.67
      carouselOffset.current -= CAROUSEL_SPEED * (frameDelta / 16.67)
      lastFrameTime.current = now
      const totalWidth = episodesLength * cardWidth
      if (carouselOffset.current <= -totalWidth) {
        carouselOffset.current += totalWidth
      }
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${carouselOffset.current}px)`
      }
    } else if (!isMobile) {
      if (isMobile) lastFrameTime.current = performance.now()
    }
  })

  const setOffset = useCallback(offset => {
    carouselOffset.current = offset
    if (marqueeRef.current) {
      marqueeRef.current.style.transform = `translateX(${offset}px)`
    }
  }, [])

  return { marqueeRef, setOffset }
}
