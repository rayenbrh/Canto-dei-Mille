import { useMotionValue, useSpring } from 'framer-motion'
import { useCallback, useRef } from 'react'

const MAX = 8

export function useMagneticButton(stiffness = 280, damping = 28) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness, damping })
  const springY = useSpring(y, { stiffness, damping })

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = ((e.clientX - cx) / (rect.width / 2)) * MAX
      const dy = ((e.clientY - cy) / (rect.height / 2)) * MAX
      x.set(Math.max(-MAX, Math.min(MAX, dx)))
      y.set(Math.max(-MAX, Math.min(MAX, dy)))
    },
    [x, y],
  )

  const onMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { ref, style: { x: springX, y: springY }, onMouseMove, onMouseLeave }
}
