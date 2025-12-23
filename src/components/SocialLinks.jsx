import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

export default function SocialLinks() {
  return (
    <div className="flex flex-row gap-[25px] justify-center sm:justify-start">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Link para Twitter"
      >
        <FaTwitter size={24} className="social-platforms-icons" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Link para Instagram"
      >
        <FaInstagram size={24} className="social-platforms-icons" />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Link para TikTok"
      >
        <FaTiktok size={24} className="social-platforms-icons" />
      </a>
    </div>
  )
}
