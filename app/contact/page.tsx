'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useT } from '@/lib/LanguageProvider'
import { createWhatsappUrl, siteConfig, socialUrls } from '@/lib/siteConfig'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const socialLinks = [
  { icon: Instagram, href: socialUrls.instagram, label: 'Instagram' },
  { icon: MessageCircle, href: socialUrls.whatsapp, label: 'WhatsApp' },
  { icon: Mail, href: socialUrls.email, label: 'Email' },
].filter((link) => link.href)

export default function Contact() {
  const t = useT()
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactMethods = [
    { icon: MapPin, title: 'Address', value: 'Addis Ababa, Ethiopia\nBethel Zeymo Building', href: null, desc: 'Studio & home service available' },
    ...(siteConfig.phone ? [{ icon: Phone, title: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}`, desc: 'Available during business hours' }] : []),
    { icon: Mail, title: 'Email', value: siteConfig.email, href: socialUrls.email, desc: 'For bookings and collaborations' },
    { icon: Instagram, title: 'Social Media', value: `@${siteConfig.instagramHandle}`, href: socialUrls.instagram, desc: 'Follow for latest looks' },
  ]

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
    if (isSubmitted) setIsSubmitted(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = [`Name: ${formState.name}`, `Email: ${formState.email}`, `Phone: ${formState.phone || 'Not provided'}`, `Service: ${formState.service || 'Not specified'}`, '', formState.message].join('\n')
    const whatsappUrl = createWhatsappUrl(message)
    window.location.href = whatsappUrl || `${socialUrls.email}?subject=${encodeURIComponent('Booking inquiry from ' + formState.name)}&body=${encodeURIComponent(message)}`
    setIsSubmitted(true)
  }

  return (
    <>
      <section className="relative overflow-hidden px-4 py-32">
        <div className="absolute inset-0 bg-subtle-grid" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-gradient-to-r from-brand-gold/0 via-brand-gold/80 to-brand-gold/0" />
          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h1>
          <p className="text-lg font-light text-secondary md:text-xl">{t.contact.heroSub}</p>
        </motion.div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-sm uppercase tracking-[0.2em] text-brand-gold/70">Reach Out</span>
              <div className="gold-divider-left" />
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">{t.contact.infoTitle}</h2>

              <div className="space-y-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon
                  const content = (
                    <div className="flex items-start gap-5 rounded-[1.6rem] border border-[color:var(--border-subtle)] bg-[rgba(255,255,255,0.22)] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold/25 hover:shadow-[0_18px_45px_rgba(0,0,0,0.04)]">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/[0.08] text-brand-gold/80 transition-all duration-500 hover:bg-brand-gold/[0.15]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="mb-1 text-sm font-semibold text-primary">{method.title}</h3>
                        <p className="whitespace-pre-line text-sm text-brand-gold/80">{method.value}</p>
                        <p className="mt-1 text-xs text-muted">{method.desc}</p>
                      </div>
                    </div>
                  )

                  if (!method.href) {
                    return <div key={idx}>{content}</div>
                  }

                  return (
                    <a key={idx} href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {content}
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[rgba(255,255,255,0.2)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-sm md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-brand-gold/70">Request a consultation</p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">Tell us about your vision</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/[0.08] text-brand-gold/80">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit} aria-label="Contact form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={`field ${focusedField === 'name' ? 'field-focused' : ''}`}>
                    <span>Name</span>
                    <input
                      aria-label="Your name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className={`field ${focusedField === 'email' ? 'field-focused' : ''}`}>
                    <span>Email</span>
                    <input
                      aria-label="Your email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="name@email.com"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={`field ${focusedField === 'phone' ? 'field-focused' : ''}`}>
                    <span>Phone</span>
                    <input
                      aria-label="Your phone number"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+251 ..."
                    />
                  </label>

                  <label className={`field ${focusedField === 'service' ? 'field-focused' : ''}`}>
                    <span>Service</span>
                    <select
                      aria-label="Service type"
                      value={formState.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">Select a service</option>
                      <option value="bridal">Bridal Makeup</option>
                      <option value="event">Event Makeup</option>
                      <option value="photoshoot">Photoshoot Makeup</option>
                      <option value="training">Training</option>
                    </select>
                  </label>
                </div>

                <label className={`field ${focusedField === 'message' ? 'field-focused' : ''}`}>
                  <span>Project details</span>
                  <textarea
                    aria-label="Project details"
                    value={formState.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your occasion, preferred look, and timeline"
                    rows={5}
                    required
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto">
                    Send inquiry <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Response within 24 hours</p>
                </div>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 flex items-center gap-3 rounded-[1.25rem] border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300"
                  >
                    <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                      <CheckCircle2 className="h-5 w-5" />
                    </motion.div>
                    Your inquiry has been received. Mina will get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[rgba(255,255,255,0.18)] p-4 md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brand-gold/70">Location</p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">Find us</h2>
                </div>
                <div className="rounded-full border border-brand-gold/25 bg-brand-gold/[0.08] px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-brand-gold">Map</div>
              </div>

              <div className="map-panel relative h-[320px] overflow-hidden rounded-[1.5rem] border border-[color:var(--border-color)] bg-[#efe3d2] md:h-[420px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_22%),linear-gradient(135deg,#f7e8d0,#e8d9c4_40%,#cdb299)]" />
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(80,60,40,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(80,60,40,0.18) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute left-[52%] top-[46%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-brand-gold shadow-[0_0_30px_rgba(210,176,122,0.8)]" />
                <div className="absolute left-[58%] top-[58%] rounded-full border border-brand-gold/30 bg-white/35 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-primary shadow-lg backdrop-blur-sm">
                  Addis Ababa
                </div>
                <div className="absolute left-[18%] top-[22%] rounded-full border border-brand-gold/30 bg-white/40 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                  Studio
                </div>
              </div>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[rgba(255,255,255,0.18)] p-4 md:p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brand-gold/70">Social links</p>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">Stay in touch</h2>

              <div className="mt-6 space-y-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-[1.2rem] border border-[color:var(--border-subtle)] bg-[rgba(255,255,255,0.15)] p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold/25 hover:bg-brand-gold/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/[0.08] text-brand-gold/80 transition-transform duration-500 group-hover:rotate-12">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-primary">{label}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-gold/80 transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-subtle-grid" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Clock className="mx-auto mb-6 h-10 w-10 text-brand-gold/80" />
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">{t.contact.bookingTitle}</h2>
            <div className="gold-divider" />
            <p className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">{t.contact.bookingText}</p>
            <p className="text-sm text-muted">{t.contact.bookingUrgent}</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
