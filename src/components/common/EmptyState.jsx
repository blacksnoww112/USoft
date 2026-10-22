import React from 'react'
import { useTranslation } from 'react-i18next'
import { InboxIcon } from 'lucide-react'

function EmptyState({ icon: Icon = InboxIcon, title, description, action }) {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-[#EBF2FF] flex items-center justify-center mb-4">
        <Icon size={28} className="text-[#2F80ED]" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-[#172033] mb-1">{title || t('noData')}</h3>
      {description && <p className="text-sm text-[#667085] max-w-xs">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export default EmptyState
