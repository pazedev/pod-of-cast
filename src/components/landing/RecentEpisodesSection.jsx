import { useMemo } from 'react'
import { EPISODES } from '../../constants/index'
import { SubscribeButton } from '../UI/SubscribeButton'
import { EpisodeGrid } from '../UI/EpisodeGrid'

export default function RecentEpisodes() {
  const recentEpisodes = useMemo(() => {
    if (!Array.isArray(EPISODES)) {
      return []
    }

    return [...EPISODES].reverse()
  }, [])

  const sectionClasses = [
    'bg-champagne',
    'py-24',
    'sm:py-48',
    'px-0',
    'sm:px-6',
    'relative',
  ].join(' ')
  const containerClasses = 'max-w-6xl mx-auto items-center'
  const headerClasses = 'text-center mb-16 sm:mb-24 relative px-6'
  const titleClasses = 'text-h1 text-black mb-4'
  const subtitleClasses = 'text-h3-style-1 text-davys-grey'
  const gridWrapperClasses = 'mb-16 sm:mb-28'
  const actionWrapperClasses = 'flex justify-center px-6'

  return (
    <section className={sectionClasses}>
      <img
        src="/src/assets/scribble-icon-black.svg"
        alt="Decorative scribble"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 sm:h-[150px] pointer-events-none z-10"
      />
      <div className={containerClasses}>
        <div className={headerClasses}>
          <h2 className={titleClasses}>Recent Episodes</h2>
          <p className={subtitleClasses}>Available on your favorite platform</p>
        </div>

        {recentEpisodes.length > 0 && (
          <div className={gridWrapperClasses}>
            <EpisodeGrid episodes={recentEpisodes} layout="carousel" />
          </div>
        )}

        <div className={actionWrapperClasses}>
          <SubscribeButton text="Browse all episodes" variant="mobile" />
        </div>
      </div>
      <img
        src="/src/assets/scribble-icon-black.svg"
        alt="Decorative scribble"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-20 sm:h-[150px] pointer-events-none z-10"
      />
    </section>
  )
}
