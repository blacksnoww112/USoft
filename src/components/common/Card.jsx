import React from 'react'
import clsx from 'clsx'

/**
 * Card – reusable surface card
 * @param {boolean} hover   – enables hover lift effect
 * @param {string}  padding – tailwind padding class override
 */
function Card({ children, hover = false, padding = 'p-6', className = '', ...props }) {
  return (
    <div
      className={clsx(
        'bg-white border border-[#E4E7EC] rounded-[10px] shadow-card',
        padding,
        hover && 'transition-all duration-200 hover:-translate-y-1 hover:shadow-card-md cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
