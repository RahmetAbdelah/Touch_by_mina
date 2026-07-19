'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Heart, Sparkles, Quote } from 'lucide-react'
import { useT } from '@/lib/LanguageProvider'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: function (i: number = 0) {
    return {
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }
    }
  }
}

export default function About() {
  const t = useT()

  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070" alt="Makeup artist at work" fill className="object-cover object-center scale-105" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/80" />
          <div className="absolute inset-0 bg-subtle-grid" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center px-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold/60 to-transparent mx-auto mb-8" />
          <h1 className="text-5xl md:text-8xl font-bold mb-4">About <span className="text-gradient">Mina</span></h1>
          <p className="text-lg md:text-xl text-secondary font-light tracking-wide">{t.about.heroSub}</p>
        </motion.div>
      </section>

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">{t.about.journey}</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-5xl font-bold mb-10">{t.about.storyTitle}</h2>
            <div className="space-y-6 text-base md:text-lg text-secondary leading-relaxed text-left max-w-3xl mx-auto">
              <p>{t.about.storyP1}</p>
              <p>{t.about.storyP2}</p>
              <p>{t.about.storyP3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: '200+', label: t.about.statsLabel1 },
              { num: '5+', label: t.about.statsLabel2 },
              { num: '50+', label: t.about.statsLabel3 },
              { num: '100%', label: t.about.statsLabel4 },
            ].map((s, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-gradient mb-2">{s.num}</p>
                <p className="text-xs md:text-sm text-muted tracking-wider uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">Why Me</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-5xl font-bold">{t.about.whyTitle} <span className="text-gradient">{t.about.whyHighlight}</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Award, title: t.about.why1Title, desc: t.about.why1Desc },
              { icon: Heart, title: t.about.why2Title, desc: t.about.why2Desc },
              { icon: Sparkles, title: t.about.why3Title, desc: t.about.why3Desc },
            ].map((item, i) => (
              <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-surface border border-brand-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:border-brand-gold/30 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-brand-gold/80" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Quote className="w-12 h-12 text-brand-gold/10 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.about.philosophyTitle}</h2>
            <blockquote className="text-xl md:text-2xl text-secondary italic leading-relaxed font-light">
              &ldquo;{t.about.philosophyQuote}&rdquo;
            </blockquote>
            <div className="gold-divider mt-10" />
            <p className="text-brand-gold/80 text-lg mt-6 font-serif">{t.about.philosophyAuthor}</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
