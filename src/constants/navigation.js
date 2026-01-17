/**
 * All links for site navigation
 */
export const ALL_LINKS = {
  about: { href: '#about', label: 'About' },
  testimonials: { href: '#testimonials', label: 'Testimonials' },
  features: { href: '#features', label: 'Features' },
  episodes: { href: '#episodes', label: 'Episodes' },
  pricing: { href: '#pricing', label: 'Pricing' },
  blog: { href: '#blog', label: 'Blog' },
}

/**
 * Navbar Links (main)
 */
export const NAV_LINKS = [ALL_LINKS.episodes, ALL_LINKS.about]

/**
 * More Links (dropdown in Navbar)
 */
export const MORE_LINKS = [
  ALL_LINKS.testimonials,
  ALL_LINKS.features,
  ALL_LINKS.pricing,
  ALL_LINKS.blog,
]

/**
 * Footer Navigation Links
 */
export const FOOTER_NAVIGATION = [
  [ALL_LINKS.about, ALL_LINKS.testimonials, ALL_LINKS.features],
  [ALL_LINKS.episodes, ALL_LINKS.pricing, ALL_LINKS.blog],
]

/**
 * Legal Links displayed in the footer
 */
export const LEGAL_LINKS = [
  { href: '#terms', label: 'Terms' },
  { href: '#privacy', label: 'Privacy' },
]
