'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Camera, GraduationCap, Star, ArrowRight, Instagram } from 'lucide-react'
import { useT, useLang } from '@/lib/LanguageProvider'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: function (i: number = 0) {
    return {
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }
    }
  }
}

export default function Home() {
  const t = useT()
  const { lang } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071"
            alt="Makeup artistry"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/60" />
          <div className="absolute inset-0 bg-subtle-grid" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold/60 to-transparent mx-auto mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tight leading-[1.05]"
          >
            Touch By<br />
            <span className="text-gradient">Mina</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-secondary mb-12 max-w-xl mx-auto font-light tracking-wide"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link href="/portfolio" className="btn-primary">{t.hero.viewWork}</Link>
            <Link href="/contact" className="btn-secondary">{t.hero.bookNow}</Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-brand-gold/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-brand-gold/60 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">{t.home.welcome}</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {t.home.introTitle} <span className="text-gradient">{t.home.introTitleHighlight}</span>
            </h2>
            <p className="text-base md:text-lg text-secondary leading-relaxed max-w-3xl mx-auto">
              {t.home.introText}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Signature Services */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">What I Offer</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-6xl font-bold">
              {t.home.servicesTitle} <span className="text-gradient">{t.home.servicesTitleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Sparkles, title: t.services.bridalTitle, desc: t.services.bridalDesc, items: t.services.bridalFeatures.slice(0, 3) },
              { icon: Camera, title: t.services.photoshootTitle, desc: t.services.photoshootDesc, items: t.services.photoshootFeatures.slice(0, 3) },
              { icon: GraduationCap, title: t.services.trainingTitle, desc: t.services.trainingDesc, items: t.services.trainingFeatures.slice(0, 3) },
            ].map((s, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-surface/60 border border-subtle p-8 md:p-10 card-hover"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <s.icon className="w-10 h-10 text-brand-gold/80 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold mb-3 text-primary">{s.title}</h3>
                <p className="text-secondary text-sm mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted">
                      <span className="w-1 h-1 rounded-full bg-brand-gold/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link href="/services" className="btn-secondary">{t.home.servicesCta}</Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Testimonials */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">Testimonials</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-6xl font-bold">
              {t.home.testimonialsTitle} <span className="text-gradient">{t.home.testimonialsHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: 'Selam A.', role: t.testimonials.roleBride, text: 'Mina made me feel absolutely stunning on my wedding day. She created the most beautiful bridal look I could have imagined!', rating: 5 },
              { name: 'Meron T.', role: t.testimonials.roleEvent, text: 'Incredible attention to detail. The makeup lasted all night and looked flawless in every single photo.', rating: 5 },
              { name: 'Betelhem D.', role: t.testimonials.rolePhotoshoot, text: 'Mina is a true artist! She understood exactly what I needed and delivered perfection beyond what I imagined.', rating: 5 },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface/40 border border-subtle p-8 card-hover"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-brand-gold/80 text-brand-gold/80" />
                  ))}
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-6">&ldquo;{item.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-primary">{item.name}</p>
                  <p className="text-xs text-brand-gold/60">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link href="/testimonials" className="btn-secondary inline-flex items-center gap-2">
              {t.home.testimonialsCta} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Social */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Instagram className="w-10 h-10 text-brand-gold/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.home.socialTitle} <span className="text-gradient">{t.home.socialHighlight}</span>
            </h2>
            <p className="text-secondary mb-10 text-base">
              {t.home.socialText}
            </p>
            <div className="flex justify-center gap-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2">
                <Instagram size={16} /> Instagram
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                TikTok
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
