import { SOCIAL_NETWORKS } from '../constants/social-networks'

export default function SocialLinks() {
  return (
    <div className="flex flex-row gap-[25px] justify-center sm:justify-start">
      {SOCIAL_NETWORKS.map(Item => (
        <a
          key={Item.id}
          href={Item.url}
          target="_blank"
          rel="noreferrer"
          aria-label={Item.label}
        >
          <Item.Icon size={Item.size} className="social-platforms-icons" />
        </a>
      ))}
    </div>
  )
}
