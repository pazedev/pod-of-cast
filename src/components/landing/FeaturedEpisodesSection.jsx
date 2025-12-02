import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { EPISODES } from '../../constants/episodes'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useCarousel } from '../../hooks/useCarousel'
import { EpisodeCard } from './EpisodeCard'

const CARD_WIDTH = 360
const CARD_GAP = 16

export function FeaturedEpisodesSection() {
  const isMobile = useIsMobile()
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const cardsPerPage = isMobile ? 1 : 4
  const cardWidth = CARD_WIDTH + CARD_GAP
  const totalPages = Math.ceil(EPISODES.length / cardsPerPage)
  const episodes = isMobile ? EPISODES : [...EPISODES, ...EPISODES]

  const { marqueeRef } = useCarousel({
    isMobile,
    cardWidth,
    episodesLength: EPISODES.length,
    isPaused,
  })

  const goToPage = useCallback(
    page => {
      let newPage = page
      if (page < 0) newPage = totalPages - 1
      if (page >= totalPages) newPage = 0
      setCurrentPage(newPage)
    },
    [totalPages]
  )

  const handlePause = useCallback(() => setIsPaused(true), [])
  const handleResume = useCallback(() => setIsPaused(false), [])

  useEffect(() => {
    if (isMobile && marqueeRef.current) {
      marqueeRef.current.style.transform = `translateX(${-currentPage * cardWidth}px)`
    }
  }, [currentPage, isMobile, cardWidth, marqueeRef])

  const renderCarousel = () => {
    if (isMobile) {
      const episode = EPISODES[currentPage] || EPISODES[0]
      return (
        <div className="relative flex items-center w-full min-h-[373px] px-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 pointer-events-auto"
            aria-label="Previous"
          >
            <ChevronLeft color="#E34234" size={32} strokeWidth={2} />
          </button>
          <div className="mx-auto w-full max-w-[3600px] pointer-events-none">
            <EpisodeCard episode={episode} index={currentPage} />
          </div>
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 pointer-events-auto"
            aria-label="Next"
          >
            <ChevronRight color="#E34234" size={32} strokeWidth={2} />
          </button>
        </div>
      )
    }

    return (
      <div ref={marqueeRef} className="flex gap-4 will-change-transform">
        {episodes.map((episode, index) => (
          <EpisodeCard
            key={`${episode.id}-${index}`}
            episode={episode}
            index={index}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="mt-16 w-full overflow-hidden">
      <div
        className="relative w-full"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onFocus={handlePause}
        onBlur={handleResume}
        tabIndex={0}
      >
        {renderCarousel()}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`transition-all duration-300 rounded-full ${currentPage === index ? 'bg-pewter-blue w-8' : 'bg-pewter-blue/30 w-2'} h-2`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
