'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Camera, Sparkles, Calendar, Palette, GraduationCap, Home } from 'lucide-react'
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

export default function Services() {
  const t = useT()

  const services = [
    { icon: Heart, title: t.services.bridalTitle, desc: t.services.bridalDesc, features: t.services.bridalFeatures },
    { icon: Calendar, title: t.services.eventTitle, desc: t.services.eventDesc, features: t.services.eventFeatures },
    { icon: Camera, title: t.services.photoshootTitle, desc: t.services.photoshootDesc, features: t.services.photoshootFeatures },
    { icon: Sparkles, title: t.services.everydayTitle, desc: t.services.everydayDesc, features: t.services.everydayFeatures },
    { icon: Palette, title: t.services.hennaTitle, desc: t.services.hennaDesc, features: t.services.hennaFeatures },
    { icon: GraduationCap, title: t.services.trainingTitle, desc: t.services.trainingDesc, features: t.services.trainingFeatures },
  ]

  return (
    <>
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold/60 to-transparent mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.services.title} <span className="text-gradient">{t.services.titleHighlight}</span></h1>
          <p className="text-lg md:text-xl text-secondary font-light">{t.services.heroSub}</p>
        </motion.div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative bg-surface/50 border border-subtle p-8 card-hover">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-brand-gold/80" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            <div className="w-16 h-16 rounded-full bg-surface border border-brand-gold/10 flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-brand-gold/80" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.services.homeTitle} <span className="text-gradient">{t.services.homeHighlight}</span></h2>
            <div className="gold-divider" />
            <p className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">{t.services.homeText}</p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.services.ctaTitle}</h2>
            <p className="text-secondary text-lg mb-10 max-w-xl mx-auto">{t.services.ctaText}</p>
            <Link href="/contact" className="btn-primary">{t.services.ctaBtn}</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
