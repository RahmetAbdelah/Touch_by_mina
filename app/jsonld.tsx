import { siteConfig, socialUrls } from '@/lib/siteConfig'

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Touch By Mina',
    description: 'Professional makeup artist specializing in bridal, event, and photoshoot makeup',
    url: siteConfig.url,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: 'Addis Ababa',
      addressCountry: 'ET'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude
    },
    priceRange: '$$',
    image: `${siteConfig.url}/mina2.png`,
    sameAs: [
      socialUrls.instagram,
      socialUrls.tiktok
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Makeup Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bridal Makeup',
            description: 'Complete bridal makeup service with trial session'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Makeup',
            description: 'Glamorous makeup for parties and special occasions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Photoshoot Makeup',
            description: 'Camera-ready makeup for professional photography'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Makeup Training',
            description: 'Professional makeup courses and training classes'
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
