import React from 'react'
import { useTranslation } from 'react-i18next'

function PageHeader({ title, subtitle, children, className = '' }) {
  return (
    <div className={`mb-8 ${className}`}>
      <h1 className="section-title mb-2">{title}</h1>
      {subtitle && <p className="section-subtitle text-[#667085]">{subtitle}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default PageHeader
