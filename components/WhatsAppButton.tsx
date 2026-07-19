'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '251'
  const message = 'Hi! I would like to inquire about your makeup services.'

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-brand-green rounded-full animate-ping opacity-20 group-hover:opacity-30" />
        <div className="relative w-14 h-14 bg-brand-green hover:bg-[#0f3d22] text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20 transition-all duration-500 hover:scale-110">
          <MessageCircle size={24} />
        </div>
      </div>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-surface border border-brand-gold/[0.06] text-[#F5F5F5]/80 text-xs whitespace-nowrap px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  )
}
