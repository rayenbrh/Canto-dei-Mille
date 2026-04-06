import { animate } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * @param {number} end
 * @param {{ start?: number, duration?: number, decimals?: number, enabled?: boolean }} opts
 */
export function useCountUp(end, { start = 0, duration = 1.6, decimals = 0, enabled = true } = {}) {
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!enabled) return
    const controls = animate(start, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Number(v.toFixed(decimals))),
    })
    return () => controls.stop()
  }, [end, start, duration, decimals, enabled])

  return value
}
