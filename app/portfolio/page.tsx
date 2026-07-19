'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Play } from 'lucide-react'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { useT } from '@/lib/LanguageProvider'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: function (i: number = 0) {
    return {
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.05, ease: [0.25, 0.4, 0.25, 1] }
    }
  }
}

const portfolioItems = [
  { id: 1, category: 'bridal', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070' },
  { id: 2, category: 'event', image: 'https://images.unsplash.com/photo-1583241800515-ab9548d970d8?q=80&w=2070' },
  { id: 3, category: 'photoshoot', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2069' },
  { id: 4, category: 'bridal', image: 'https://images.unsplash.com/photo-1595475884562-073c5b128b71?q=80&w=2071' },
  { id: 5, category: 'event', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071' },
  { id: 6, category: 'photoshoot', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069' },
  { id: 7, category: 'bridal', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070' },
  { id: 8, category: 'event', image: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=2069' },
]

const categories = ['all', 'bridal', 'event', 'photoshoot']

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all')
  const t = useT()

  const filteredItems = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab)

  return (
    <>
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold/60 to-transparent mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.portfolio.title} <span className="text-gradient">{t.portfolio.titleHighlight}</span></h1>
          <p className="text-lg md:text-xl text-secondary font-light">{t.portfolio.heroSub}</p>
        </motion.div>
      </section>

      <div className="sticky top-20 z-40 bg-primary/95 backdrop-blur-md border-b border-subtle">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-center gap-2 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-500 ${
                activeTab === tab
                  ? 'bg-brand-gold/90 text-[#0B1F1A]'
                  : 'bg-surface/60 text-secondary hover:text-brand-gold/80 border border-subtle hover:border-brand-gold/20'
              }`}
            >
              {tab === 'all' ? t.portfolio.all : tab}
            </button>
          ))}
        </div>
      </div>

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, idx) => (
              <motion.div key={item.id} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image src={item.image} alt={`Portfolio ${item.id}`} fill className="object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs tracking-[0.15em] uppercase text-brand-gold/80">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">{t.portfolio.transformations}</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-5xl font-bold">{t.portfolio.beforeAfter} <span className="text-gradient">{t.portfolio.beforeAfterHighlight}</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { before: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071', after: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070' },
              { before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069', after: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070' },
            ].map((item, idx) => (
              <motion.div key={idx} custom={idx + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <BeforeAfterSlider before={item.before} after={item.after} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">Video</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-5xl font-bold">{t.portfolio.videoTitle} <span className="text-gradient">{t.portfolio.videoHighlight}</span></h2>
            <p className="text-secondary mt-4 text-sm">{t.portfolio.videoSub}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((vid, idx) => (
              <motion.div key={vid} custom={idx + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative aspect-[9/16] bg-surface overflow-hidden cursor-pointer">
                <Image src={`https://images.unsplash.com/photo-${idx === 0 ? '1529626455599-4ff0808664d5' : idx === 1 ? '1515886657613-9f351fe9c7c3' : '1479969268471-c0f7b5e6eeb6'}?q=80&w=1974`} alt="Video thumbnail" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-brand-gold/60 flex items-center justify-center group-hover:bg-brand-gold/90 transition-all duration-500">
                    <Play size={20} className="text-brand-gold/80 group-hover:text-[#0B1F1A] ml-0.5 transition-colors" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-primary/80 to-transparent">
                  <p className="text-xs text-secondary">Behind the Scenes</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-14">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">{t.portfolio.tiktokBtn}</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
