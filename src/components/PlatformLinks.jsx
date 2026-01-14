import { PODCAST_PLATFORMS } from '../constants/platforms'

export default function PlatformLinks() {
  return (
    <div className="flex flex-col gap-7 items-center sm:items-start">
      <p className="text-left">Listen to episodes on your fav platform:</p>
      <div className="flex flex-row gap-6 w-[373px] h-[22px] sm:gap-9 items-center justify-center">
        {PODCAST_PLATFORMS.map(item => (
          <a key={item.id} href={item.url} aria-label={item.name}>
            <img
              src={item.icon}
              alt={`Logo ${item.name}`}
              style={{ width: `${item.width}px` }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
