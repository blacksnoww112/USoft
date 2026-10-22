import React from 'react'
import clsx from 'clsx'

/**
 * Button – reusable button component
 * @param {string} variant - 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger'
 * @param {string} size    - 'sm' | 'md' | 'lg'
 * @param {boolean} loading
 * @param {boolean} fullWidth
 */
const Button = React.forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    className = '',
    disabled,
    ...props
  },
  ref
) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none whitespace-nowrap'

  const variants = {
    primary:
      'bg-[#173B67] text-white border-transparent hover:bg-[#0F2847] hover:shadow-lg focus-visible:ring-[#173B67] active:scale-[0.98]',
    secondary:
      'bg-transparent text-[#173B67] border-[#173B67] hover:bg-[#EBF2FF] focus-visible:ring-[#173B67] active:scale-[0.98]',
    accent:
      'bg-[#2F80ED] text-white border-transparent hover:bg-[#1a68d4] hover:shadow-lg focus-visible:ring-[#2F80ED] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#667085] border-transparent hover:bg-gray-100 focus-visible:ring-gray-300',
    danger:
      'bg-[#EB5757] text-white border-transparent hover:bg-red-700 focus-visible:ring-red-400 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3',
  }

  return (
    <button
      ref={ref}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        (disabled || loading) && 'opacity-60 pointer-events-none',
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </button>
  )
})

export default Button
