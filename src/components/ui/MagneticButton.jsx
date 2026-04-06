import { motion } from 'framer-motion'
import { useMagneticButton } from '../../hooks/useMagneticButton.js'
import { cn } from '../../utils/cn.js'

export function MagneticButton({ children, className, as, style: styleProp, ...props }) {
  const Component = as ?? motion.button
  const { ref, style, onMouseMove, onMouseLeave } = useMagneticButton()

  return (
    <Component
      ref={ref}
      style={{ ...style, ...styleProp }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
