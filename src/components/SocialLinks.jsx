import { SOCIAL_NETWORKS } from '../constants/social-networks'

export default function SocialLinks() {
  return (
    <div className="flex flex-row gap-[25px] justify-center sm:justify-start">
      {SOCIAL_NETWORKS.map(({ id, name, url, icon }) => (
        <a key={id} href={url} aria-label={name}>
          <img src={icon} alt={`Logo ${name}`} className="w-6 h-6" />
        </a>
      ))}
    </div>
  )
}
