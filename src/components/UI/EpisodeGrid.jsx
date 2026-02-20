import { useRef } from 'react'
import { EpisodeCardDetail } from './EpisodeCardDetail'

export const EpisodeGrid = ({ episodes, layout = 'carousel' }) => {
  const scrollRef = useRef(null)
  const episodeList = Array.isArray(episodes) ? episodes : []
  const isGridLayout = layout === 'grid'

  const renderEpisode = episode => (
    <div
      key={episode.id}
      className={isGridLayout ? 'relative' : 'snap-center relative'}
    >
      <EpisodeCardDetail episode={episode} />
      {(episode.number === 5 || episode.number === '5') && (
        <img
          src="/src/assets/decorations/highlights-icon-red.svg"
          alt=""
          className="hidden xl:block absolute -right-24 -top-24 w-32 h-32 pointer-events-none"
        />
      )}
    </div>
  )

  const gridClasses = [
    'sm:grid',
    'sm:grid-cols-1',
    'lg:grid-cols-2',
    'sm:justify-items-center',
  ].join(' ')
  const carouselClasses = [
    'flex',
    'sm:grid',
    'sm:grid-cols-1',
    'lg:grid-cols-2',
    'gap-x-8',
    'gap-y-8',
    'lg:gap-y-4',
    'overflow-x-auto',
    'sm:overflow-x-visible',
    'snap-x',
    'snap-mandatory',
    'no-scrollbar',
    'pt-6',
    'pl-6',
    'pr-8',
    'pb-16',
    '-mt-6',
    'sm:pt-0',
    'sm:px-0',
    'sm:pb-0',
    'sm:mt-0',
    'sm:justify-items-center',
  ].join(' ')

  if (isGridLayout) {
    return <div className={gridClasses}>{episodeList.map(renderEpisode)}</div>
  }

  return (
    <div ref={scrollRef} className={carouselClasses}>
      {episodeList.map(renderEpisode)}
    </div>
  )
}
