import { motion } from 'framer-motion'
import { PODCAST_PLATFORMS } from '../../constants/platforms'

const MotionArticle = motion.article

export function EpisodeCard({ episode, index }) {
  const handleClick = () => {
    // TODO: Implementar navegação para a página do episódio
    console.log('Episode clicked:', episode.id)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <MotionArticle
      className="w-full max-w-[360px] sm:min-w-[360px] h-[373px] overflow-hidden rounded-xl relative group cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-black/40 focus-within:shadow-2xl focus-within:shadow-black/40"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Episode: ${episode.title} - ${episode.category}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
    >
      <img
        src={episode.imageUrl}
        alt={`Episode cover ${episode.title}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105 group-focus-within:scale-105"
        loading="lazy"
        onError={e => {
          e.target.onerror = null
          e.target.src = '/assets/episodes/fallback.jpg'
        }}
      />

      <div
        className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <div
        className="absolute top-3 right-3 z-10 flex gap-2 items-center"
        aria-label="Available on:"
      >
        {PODCAST_PLATFORMS.map(({ id, name, logo, iconLogo }) => (
          <img
            key={id}
            src={logo ?? iconLogo}
            alt={name}
            title={`Available on ${name}`}
            className="object-contain p-1 w-8 h-8"
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 to-transparent pb-4 px-6 pt-12 pointer-events-none">
        <h3 className="text-pewter-blue text-h2-style-1 tracking-[-0.08em] transition-transform duration-300 will-change-transform group-hover:-translate-y-[18px] group-focus-within:-translate-y-[18px]">
          {episode.title}
        </h3>
        <p className="text-white/70 text-caption-medium transition-all duration-300 opacity-0 translate-y-2 will-change-[opacity,transform] group-hover:opacity-100 group-hover:-translate-y-[15px] group-focus-within:opacity-100 group-focus-within:-translate-y-[15px]">
          {episode.category}
        </p>
      </div>
    </MotionArticle>
  )
}
