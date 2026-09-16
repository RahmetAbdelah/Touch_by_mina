const digitsOnly = (value: string) => value.replace(/\D/g, '')

const configuredWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappNumber = digitsOnly(configuredWhatsapp)
const hasConfiguredWhatsapp = whatsappNumber.length >= 8 && !/[xX]/.test(configuredWhatsapp)

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://touchbymina.com',
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Touch By Mina',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'hello@touchbymina.com',
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '',
  whatsappNumber: hasConfiguredWhatsapp ? whatsappNumber : '',
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? 'touchbymina',
  tiktokHandle: process.env.NEXT_PUBLIC_TIKTOK_HANDLE ?? 'touchbymina',
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? 'Zeymo Building, Bethel, Addis Ababa',
  latitude: process.env.NEXT_PUBLIC_LATITUDE ?? '9.0087618',
  longitude: process.env.NEXT_PUBLIC_LONGITUDE ?? '38.7577605',
} as const

export const socialUrls = {
  instagram: `https://instagram.com/${siteConfig.instagramHandle}`,
  tiktok: `https://tiktok.com/@${siteConfig.tiktokHandle}`,
  whatsapp: siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}` : '',
  email: `mailto:${siteConfig.email}`,
} as const

export function createWhatsappUrl(message: string) {
  if (!socialUrls.whatsapp) return ''
  return `${socialUrls.whatsapp}?text=${encodeURIComponent(message)}`
}
