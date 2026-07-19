'use client'

import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfterSlider({ before, after, beforeLabel = 'Before', afterLabel = 'After' }: BeforeAfterSliderProps) {
  return (
    <div className="relative">
      <ReactCompareSlider
        itemOne={
          <div className="relative">
            <ReactCompareSliderImage src={before} alt={beforeLabel} />
            <span className="absolute bottom-3 left-3 bg-[#0B1F1A]/80 text-[#F5F5F5]/70 text-[10px] px-2 py-1 uppercase tracking-wider">
              {beforeLabel}
            </span>
          </div>
        }
        itemTwo={
          <div className="relative">
            <ReactCompareSliderImage src={after} alt={afterLabel} />
            <span className="absolute bottom-3 right-3 bg-[#0B1F1A]/80 text-brand-gold/80 text-[10px] px-2 py-1 uppercase tracking-wider">
              {afterLabel}
            </span>
          </div>
        }
        handle={
          <ReactCompareSliderHandle>
            <div className="w-10 h-10 rounded-full bg-brand-gold/90 flex items-center justify-center shadow-lg shadow-black/30">
              <div className="flex gap-1">
                <ArrowLeft size={14} className="text-[#0B1F1A]" />
                <ArrowRight size={14} className="text-[#0B1F1A]" />
              </div>
            </div>
          </ReactCompareSliderHandle>
        }
        position={50}
        transition=".3s ease"
        className="w-full"
      />
    </div>
  )
}
