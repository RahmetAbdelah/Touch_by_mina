'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Camera, GraduationCap, Star, ArrowRight, Instagram } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useT } from '@/lib/LanguageProvider'
import { socialUrls } from '@/lib/siteConfig'

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const floatingShapes = [
  { size: 180, top: '10%', left: '12%', delay: 0 },
  { size: 130, top: '55%', left: '8%', delay: 0.5 },
  { size: 220, top: '16%', right: '12%', delay: 1 },
  { size: 160, bottom: '8%', right: '18%', delay: 1.5 },
]

export default function Home() {
  const t = useT()
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18
      const y = (event.clientY / window.innerHeight - 0.5) * 18
      setPointer({ x, y })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <>
      <section className="hero-shell relative overflow-hidden">
        <div className="hero-noise" />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className="hero-float"
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom,
              transform: `translate(${pointer.x * (index + 1)}px, ${pointer.y * (index + 1)}px)`,
            }}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 10 + index * 2, repeat: Infinity, ease: 'easeInOut', delay: shape.delay }}
          />
        ))}

        <div className="hero-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="hero-copy"
          >
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="eyebrow"
            >
              touch by mina
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="hero-title"
            >
              Beauty with
              <span className="text-gradient">presence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="hero-description"
            >
              {t.hero.tagline}. Thoughtful artistry, refined finishes, and a luxury beauty experience tailored to your story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-actions"
            >
              <Link href="/portfolio" className="btn-primary">
                {t.hero.viewWork}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {t.hero.bookNow}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="hero-meta"
            >
              <div>
                <span>200+</span>
                <small>happy faces</small>
              </div>
              <div>
                <span>5+</span>
                <small>years of artistry</small>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="hero-visual"
            style={{ transform: `translate(${pointer.x * 0.85}px, ${pointer.y * 0.85}px)` }}
          >
            <div className="portrait-ring portrait-ring-one" />
            <div className="portrait-ring portrait-ring-two" />
            <div className="portrait-panel">
              <div className="portrait-backdrop" />
              <Image
                src="/mina2.png"
                alt="Mina, founder of Touch By Mina"
                fill
                priority
                className="portrait-image"
              />
            </div>
            <div className="floating-card floating-card-top">
              <span>Luxury bridal beauty</span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span>Editorial looks</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="scroll-indicator"
        >
          <span>Scroll</span>
          <div className="scroll-track">
            <div className="scroll-thumb" />
          </div>
        </motion.div>
      </section>

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="eyebrow text-brand-gold/70">{t.home.welcome}</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-primary">
              {t.home.introTitle} <span className="text-gradient">{t.home.introTitleHighlight}</span>
            </h2>
            <p className="text-base md:text-lg text-secondary leading-relaxed max-w-3xl mx-auto">
              {t.home.introText}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="eyebrow text-brand-gold/70">What I Offer</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-6xl font-bold text-primary">
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
                className="group relative rounded-[2rem] border border-white/20 bg-white/30 p-8 md:p-10 backdrop-blur-sm shadow-[0_18px_60px_rgba(24,18,12,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
              >
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <s.icon className="mb-6 h-10 w-10 text-brand-gold/80 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mb-3 text-2xl font-bold text-primary">{s.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-secondary">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-gold/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Link href="/services" className="btn-secondary">{t.home.servicesCta}</Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20 text-center">
            <span className="eyebrow text-brand-gold/70">Testimonials</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-6xl font-bold text-primary">
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
                className="rounded-[2rem] border border-white/20 bg-white/25 p-8 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
              >
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-brand-gold/80 text-brand-gold/80" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-secondary">&ldquo;{item.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-primary">{item.name}</p>
                  <p className="text-xs text-brand-gold/60">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Link href="/testimonials" className="btn-secondary inline-flex items-center gap-2">
              {t.home.testimonialsCta} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Instagram className="mx-auto mb-6 h-10 w-10 text-brand-gold/80" />
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-primary">
              {t.home.socialTitle} <span className="text-gradient">{t.home.socialHighlight}</span>
            </h2>
            <p className="mb-10 text-base text-secondary">{t.home.socialText}</p>
            <div className="flex justify-center gap-5">
              <a href={socialUrls.instagram} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Instagram size={16} /> Instagram
              </a>
              <a href={socialUrls.tiktok} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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
