/**
 * Plataformas de podcast onde os episódios estão disponíveis
 */
import { PiGooglePodcastsLogoBold } from 'react-icons/pi'
import { SiSpotify } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

export const PODCAST_PLATFORMS = [
  {
    id: 'google-podcasts',
    name: 'Google Podcasts',
    icon: '/src/assets/google-podcast.png',
    iconLogo: '/src/assets/mini-google-podcast.svg',
    Logo: PiGooglePodcastsLogoBold,
    url: 'https://podcasts.google.com',
    width: 122,
    logoWidth: 24,
    label: 'Abrir Google Podcast',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    icon: '/src/assets/Spotify.png',
    iconLogo: '/src/assets/mini-spotify.svg',
    Logo: SiSpotify,
    url: 'https://spotify.com',
    width: 80,
    logoWidth: 24,
    label: 'Abrir Spotify',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '/src/assets/Youtube.png',
    iconLogo: '/src/assets/mini-youtube.svg',
    Logo: FaYoutube,
    url: 'https://youtube.com',
    width: 94,
    logoWidth: 24,
    label: 'Abrir Youtube',
  },
]

/**
 * Lojas de aplicativos onde o app pode ser baixado
 */
export const APP_STORES = [
  {
    id: 'app-store',
    name: 'App Store',
    icon: '/src/assets/app-store.png',
    url: 'https://apps.apple.com',
  },
  {
    id: 'google-play',
    name: 'Google Play',
    icon: '/src/assets/google-play.svg',
    url: 'https://play.google.com',
  },
]
