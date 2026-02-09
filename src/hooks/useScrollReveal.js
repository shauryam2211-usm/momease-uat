import { useEffect, useRef } from 'react'

/**
 * Custom hook for scroll reveal animations
 * Uses IntersectionObserver for performance
 * Respects prefers-reduced-motion
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      element.classList.add('revealed')
      return
    }

    // Default options
    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      triggerOnce = true,
    } = options

    // Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            
            // Unobserve if triggerOnce is true
            if (triggerOnce) {
              observer.unobserve(entry.target)
              hasAnimated.current = true
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('revealed')
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    // Observe the element
    observer.observe(element)

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return elementRef
}
