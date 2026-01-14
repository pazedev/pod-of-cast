/**
 * Links de redes sociais
 */
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

export const SOCIAL_NETWORKS = [
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com',
    Icon: FaTwitter,
    label: 'Abrir Twitter',
    size: 24,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com',
    Icon: FaInstagram,
    label: 'Abrir Instagram',
    size: 24,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://tiktok.com',
    Icon: FaTiktok,
    label: 'Abrir TikTok',
    size: 24,
  },
]
