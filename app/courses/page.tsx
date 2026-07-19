'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, Users, Clock, Award, Check, ArrowRight } from 'lucide-react'
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

export default function Courses() {
  const t = useT()

  const courses = [
    { title: t.courses.course1Title, duration: '2 days', students: 'Max 5', tag: t.courses.course1Tag, topics: ['Skin preparation and care', 'Foundation matching and application', 'Basic contouring and highlighting', 'Eye makeup fundamentals', 'Brow shaping and filling', 'Lipstick application techniques'] },
    { title: t.courses.course2Title, duration: '3 days', students: 'Max 4', tag: t.courses.course2Tag, topics: ['Long-lasting bridal techniques', 'Photo-ready makeup', 'Airbrush makeup basics', 'False lash application', 'Advanced contouring', 'Color theory for different skin tones'] },
    { title: t.courses.course3Title, duration: '5 days', students: 'Max 3', tag: t.courses.course3Tag, topics: ['Editorial and fashion makeup', 'Special effects basics', 'Portfolio building', 'Client consultation skills', 'Business setup for makeup artists', 'Social media marketing'] },
  ]

  const benefits = [t.courses.includes1, t.courses.includes2, t.courses.includes3, t.courses.includes4, t.courses.includes5, t.courses.includes6]

  return (
    <>
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-surface border border-brand-gold/10 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-brand-gold/80" />
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold/60 to-transparent mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.courses.title} <span className="text-gradient">{t.courses.titleHighlight}</span></h1>
          <p className="text-lg md:text-xl text-secondary font-light">{t.courses.heroSub}</p>
        </motion.div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">Benefits</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-5xl font-bold">{t.courses.benefitsTitle} <span className="text-gradient">{t.courses.benefitsHighlight}</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {[
              { icon: Users, title: t.courses.benefit1Title, desc: t.courses.benefit1Desc },
              { icon: Clock, title: t.courses.benefit2Title, desc: t.courses.benefit2Desc },
              { icon: Award, title: t.courses.benefit3Title, desc: t.courses.benefit3Desc },
              { icon: GraduationCap, title: t.courses.benefit4Title, desc: t.courses.benefit4Desc },
            ].map((item, idx) => (
              <motion.div key={idx} custom={idx + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-surface border border-brand-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:border-brand-gold/30 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-brand-gold/80" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-xs text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, idx) => (
              <motion.div key={idx} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative bg-surface/40 border border-subtle p-8 card-hover">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-brand-gold/80 bg-brand-gold/[0.08] px-3 py-1.5 mb-5">{course.tag}</span>
                <h3 className="text-xl font-bold mb-4 text-primary">{course.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted mb-6 pb-6 border-b border-subtle">
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand-gold/60" />{course.duration}</span>
                  <span className="flex items-center gap-1.5"><Users size={14} className="text-brand-gold/60" />{course.students}</span>
                </div>
                <div className="space-y-3">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check size={14} className="text-brand-gold/60 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">Included</span>
            <div className="gold-divider" />
            <h2 className="text-4xl md:text-5xl font-bold">{t.courses.includesTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <motion.div key={idx} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-4 bg-surface/30 border border-subtle p-5 card-hover">
                <span className="w-[3px] h-6 bg-brand-gold/40 rounded-full flex-shrink-0" />
                <span className="text-sm text-secondary">{item}</span>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.courses.ctaTitle}</h2>
            <p className="text-secondary text-lg mb-10 max-w-xl mx-auto">{t.courses.ctaText}</p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">{t.courses.ctaBtn} <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
