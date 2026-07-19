'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react'
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

export default function Contact() {
  const t = useT()

  const contactMethods = [
    { icon: Phone, title: t.contact.phoneTitle, value: '+251 9XX XXX XXX', href: 'tel:+251', desc: t.contact.phoneDesc },
    { icon: MessageCircle, title: t.contact.whatsappTitle, value: t.whatsapp, href: 'https://wa.me/251', desc: t.contact.whatsappDesc },
    { icon: Instagram, title: t.contact.instagramTitle, value: '@touchbymina', href: 'https://instagram.com/touchbymina', desc: t.contact.instagramDesc },
    { icon: MapPin, title: t.contact.locationTitle, value: t.contact.locationValue, href: null, desc: t.contact.locationDesc },
  ]

  return (
    <>
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold/60 to-transparent mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span></h1>
          <p className="text-lg md:text-xl text-secondary font-light">{t.contact.heroSub}</p>
        </motion.div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">Reach Out</span>
              <div className="gold-divider-left" />
              <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.contact.infoTitle}</h2>
              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  method.href ? (
                    <a key={idx} href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-5 p-6 bg-surface/40 border border-subtle hover:border-brand-gold/20 transition-all duration-500 group card-hover">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/[0.15] transition-all duration-500">
                        <method.icon className="w-5 h-5 text-brand-gold/80" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm mb-1 text-primary">{method.title}</h3>
                        <p className="text-brand-gold/80 text-sm whitespace-pre-line">{method.value}</p>
                        <p className="text-xs text-muted mt-1">{method.desc}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={idx} className="flex items-start gap-5 p-6 bg-surface/40 border border-subtle">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/[0.08] flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-brand-gold/80" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1 text-primary">{method.title}</h3>
                        <p className="text-brand-gold/80 text-sm whitespace-pre-line">{method.value}</p>
                        <p className="text-xs text-muted mt-1">{method.desc}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-brand-gold/70 text-sm tracking-[0.2em] uppercase">Location</span>
              <div className="gold-divider-left" />
              <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.contact.findMe}</h2>
              <div className="w-full h-[400px] md:h-[500px] bg-surface border border-subtle overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63120.44382094397!2d38.7577605!3d9.0087618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.85) brightness(0.8)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Clock className="w-10 h-10 text-brand-gold/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.contact.bookingTitle}</h2>
            <div className="gold-divider" />
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">{t.contact.bookingText}</p>
            <p className="text-muted text-sm">{t.contact.bookingUrgent}</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
