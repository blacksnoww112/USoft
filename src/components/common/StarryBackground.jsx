import React, { useEffect, useRef } from 'react'
import useThemeStore from '../../store/themeStore'

/**
 * StarryBackground
 * نجوم مربعة بيضاء حادة تظهر حصراً في الوضع الداكن (Dark Mode Only)
 * - في الوضع الفاتح (Light Mode): لا تظهر وتُعاد كـ null تماماً.
 * - في الوضع الداكن (Dark Mode): مربعات بيضاء حادة وصريحة تسبح خلف المحتوى.
 */
function StarryBackground() {
  const canvasRef = useRef(null)
  const { theme } = useThemeStore()

  const isDark = theme === 'dark' || (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))

  useEffect(() => {
    // If not dark mode, do not run canvas animation
    if (!isDark) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initStars()
    }
    window.addEventListener('resize', handleResize)

    // Pure crisp white stars for Dark Mode
    const colorPrefix = 'rgba(255, 255, 255, '

    // Density of square stars
    const STAR_COUNT = Math.min(Math.floor((width * height) / 3600), 300)
    let stars = []

    const initStars = () => {
      stars = []
      for (let i = 0; i < STAR_COUNT; i++) {
        const size = Math.random() < 0.65 
          ? (Math.random() * 1.5 + 2)     // Small/medium squares: 2px to 3.5px
          : (Math.random() * 2 + 3.5)     // Prominent squares: 3.5px to 5.5px

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          // 40% diamond-oriented stars, 60% straight squares
          isDiamond: Math.random() > 0.6,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          alpha: Math.random() * 0.55 + 0.4,
          alphaSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
          minAlpha: 0.25,
          maxAlpha: 1.0,
        })
      }
    }
    initStars()

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Smooth drift movement
        star.x += star.vx
        star.y += star.vy

        // Wrap around screen edges
        if (star.x < -10) star.x = width + 10
        if (star.x > width + 10) star.x = -10
        if (star.y < -10) star.y = height + 10
        if (star.y > height + 10) star.y = -10

        // Twinkle pulsating alpha
        star.alpha += star.alphaSpeed
        if (star.alpha > star.maxAlpha) {
          star.alpha = star.maxAlpha
          star.alphaSpeed = -Math.abs(star.alphaSpeed)
        } else if (star.alpha < star.minAlpha) {
          star.alpha = star.minAlpha
          star.alphaSpeed = Math.abs(star.alphaSpeed)
        }

        // Draw Crisp White Sharp Square Star (No Blur)
        ctx.fillStyle = colorPrefix + star.alpha + ')'

        if (star.isDiamond) {
          // Sharp Diamond Square Star (Rotated 45deg)
          ctx.save()
          ctx.translate(star.x, star.y)
          ctx.rotate(Math.PI / 4)
          ctx.fillRect(-star.size / 2, -star.size / 2, star.size, star.size)
          ctx.restore()
        } else {
          // Sharp Regular Square
          ctx.fillRect(
            Math.round(star.x - star.size / 2),
            Math.round(star.y - star.size / 2),
            Math.round(star.size),
            Math.round(star.size)
          )
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  // In Light mode, render nothing
  if (!isDark) {
    return null
  }

  return (
    <div
      id="starry-canvas-container"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
      />
    </div>
  )
}

export default StarryBackground
