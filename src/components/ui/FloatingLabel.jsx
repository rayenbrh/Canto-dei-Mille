import { useId, useState } from 'react'
import { cn } from '../../utils/cn.js'

export function FloatingLabel({ label, id, className, children, as = 'div', ...rest }) {
  const autoId = useId()
  const fieldId = id ?? autoId
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const Wrapper = as

  return (
    <Wrapper className={cn('relative', className)} {...rest}>
      <label
        htmlFor={fieldId}
        className={cn(
          'pointer-events-none absolute left-0 origin-left font-body text-[13px] font-light transition-all duration-300',
          focused || hasValue
            ? 'top-0 -translate-y-5 text-[11px] text-gold-mid'
            : 'top-3 text-stone dark:text-ash',
        )}
      >
        {label}
      </label>
      {typeof children === 'function'
        ? children({
            id: fieldId,
            onFocus: () => setFocused(true),
            onBlur: (e) => {
              setFocused(false)
              setHasValue(Boolean(e.target.value))
            },
            onChange: (e) => setHasValue(Boolean(e.target.value)),
          })
        : children}
    </Wrapper>
  )
}
