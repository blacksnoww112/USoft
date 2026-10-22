import React from 'react'
import clsx from 'clsx'

const STATUS_MAP = {
  success: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', dot: 'bg-green-500' },
  warning: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', dot: 'bg-yellow-500' },
  error:   { bg: 'bg-red-50',    text: 'text-red-700',    border: 'border-red-200',    dot: 'bg-red-500'   },
  info:    { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200',   dot: 'bg-blue-500'  },
  neutral: { bg: 'bg-gray-100',  text: 'text-gray-600',   border: 'border-gray-200',   dot: 'bg-gray-400'  },
  active:  { bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200',  dot: 'bg-green-500' },
  pending: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', dot: 'bg-yellow-500'},
  draft:   { bg: 'bg-gray-100',  text: 'text-gray-500',   border: 'border-gray-200',   dot: 'bg-gray-400'  },
}

/**
 * StatusBadge – coloured pill badge for status display
 * @param {'success'|'warning'|'error'|'info'|'neutral'|'active'|'pending'|'draft'} status
 * @param {boolean} dot – show leading dot
 */
function StatusBadge({ status = 'neutral', children, dot = true, className = '' }) {
  const s = STATUS_MAP[status] ?? STATUS_MAP.neutral
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        s.bg, s.text, s.border,
        className
      )}
    >
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', s.dot)} aria-hidden="true" />}
      {children}
    </span>
  )
}

export default StatusBadge
