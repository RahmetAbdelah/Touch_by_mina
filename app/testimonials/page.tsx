'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { useT } from '@/lib/LanguageProvider'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: function (i: number = 0) {
    return {
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }
    }
  }
}

const testimonials = [
  { name: 'Selam A.', roleKey: 'roleBride' as const, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974', text: 'Mina made me feel absolutely stunning on my wedding day. She listened to what I wanted and created the most beautiful bridal look. I received so many compliments from my guests!', rating: 5 },
  { name: 'Meron T.', roleKey: 'roleEvent' as const, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070', text: 'I booked Mina for my graduation party and she exceeded all expectations. Her attention to detail is incredible and the makeup lasted all night without any touch-ups needed.', rating: 5 },
  { name: 'Betelhem D.', roleKey: 'rolePhotoshoot' as const, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964', text: 'Mina is a true artist! She understood exactly what I needed for my photoshoot and the results were breathtaking. Every photo turned out magazine-worthy.', rating: 5 },
  { name: 'Hanna K.', roleKey: 'roleBridesmaid' as const, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974', text: 'The entire bridal party looked amazing thanks to Mina. She managed to create unique looks for each of us that complemented our individual features while still looking cohesive.', rating: 5 },
  { name: 'Tsion W.', roleKey: 'roleStudent' as const, image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974', text: 'Taking Mina\'s makeup course was the best decision I made. She is patient, knowledgeable, and truly cares about her students\' success. I learned so much in such a short time!', rating: 5 },
  { name: 'Sara M.', roleKey: 'roleRegular' as const, image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974', text: 'I\'ve been a client for over a year now and I trust Mina completely. Whether it\'s everyday glam or a special occasion look, she always delivers absolute perfection.', rating: 5 },
]

export default function Testimonials() {
  const t = useT()

  return (
    <>
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold/60 to-transparent mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.testimonials.title} <span className="text-gradient">{t.testimonials.titleHighlight}</span></h1>
          <p className="text-lg md:text-xl text-secondary font-light">{t.testimonials.heroSub}</p>
        </motion.div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item, idx) => (
              <motion.div key={idx} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative bg-surface/40 border border-subtle p-8 card-hover">
                <Quote className="w-8 h-8 text-brand-gold/[0.06] absolute top-5 right-5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/10">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-primary">{item.name}</h3>
                    <p className="text-xs text-brand-gold/60">{t.testimonials[item.roleKey]}</p>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-5">&ldquo;{item.text}&rdquo;</p>
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-brand-gold/80 text-brand-gold/80" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
