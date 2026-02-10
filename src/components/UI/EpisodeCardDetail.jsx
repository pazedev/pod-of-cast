const HostAvatarList = ({ hosts }) => {
  const hostList = Array.isArray(hosts) ? hosts : []

  if (hostList.length === 0) {
    return null
  }

  return (
    <div className="flex -space-x-1 ml-1">
      {hostList.map((hostImage, index) => (
        <div
          key={`${hostImage}-${index}`}
          className="w-6 h-6 rounded-full border-2 border-white overflow-hidden"
        >
          <img
            src={hostImage}
            alt="Host"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

const HostInfo = ({ hosts, className }) => {
  const hostList = Array.isArray(hosts) ? hosts : []

  if (hostList.length === 0) {
    return null
  }

  return (
    <div className={className}>
      Hosted by:
      <HostAvatarList hosts={hostList} />
    </div>
  )
}

import { PODCAST_PLATFORMS } from '../../constants/index'

export const EpisodeCardDetail = ({ episode }) => {
  if (!episode) {
    return null
  }

  const { number, hosts, tags, imageUrl, subtitle, description } = episode
  const tagList = Array.isArray(tags) ? tags : []
  const episodeNumber = number ?? '—'
  const episodeTitle = subtitle ?? 'Untitled episode'
  const episodeDescription = description ?? ''

  const containerClasses = [
    'group',
    'bg-white',
    'border-2',
    'border-black',
    'rounded-xl',
    'p-4',
    'flex',
    'flex-col',
    'gap-4',
    '-translate-x-1',
    '-translate-y-1',
    'shadow-[10px_10px_0px_0px_var(--color-pewter-blue)]',
    'sm:translate-x-0',
    'sm:translate-y-0',
    'sm:shadow-none',
    'sm:hover:-translate-x-1',
    'sm:hover:-translate-y-1',
    'sm:hover:shadow-[10px_10px_0px_0px_var(--color-pewter-blue)]',
    'transition-all',
    'duration-300',
    'cursor-pointer',
    'min-w-[85vw]',
    'sm:min-w-0',
    'snap-center',
    'h-[520px]',
    'sm:h-auto',
    'sm:w-xl',
    'sm:max-w-xl',
    'lg:max-w-[500px]',
    'xl:max-w-xl',
  ].join(' ')

  return (
    <div className={containerClasses}>
      <div className="flex justify-between items-center sm:hidden">
        <span className="text-body-bold text-vermillion">
          Eps. {episodeNumber}
        </span>
        <HostInfo
          hosts={hosts}
          className="text-small-bold text-davys-grey flex items-center gap-1"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-5 h-full">
        <div className="w-full sm:w-40 shrink-0 flex flex-col justify-between">
          <div className="h-64 sm:h-40 relative">
            <img
              src={imageUrl}
              alt={episodeTitle}
              className="w-full h-full object-cover rounded-lg border border-black/5"
            />
            <div
              className="absolute top-2 right-2 z-10 flex gap-1 items-center"
              aria-label="Available on:"
            >
              {PODCAST_PLATFORMS.map(({ id, name, logo, iconLogo }) => (
                <img
                  key={id}
                  src={logo ?? iconLogo}
                  alt={name}
                  title={`Available on ${name}`}
                  className="object-contain p-0.5 w-5 h-5 sm:w-4 sm:h-4"
                />
              ))}
            </div>
          </div>

          {tagList.length > 0 && (
            <div className="hidden sm:flex gap-2 mt-4">
              {tagList.map(tag => (
                <span
                  key={tag}
                  className="whitespace-nowrap text-small-medium text-davys-grey border border-davys-grey px-2 py-0.5 rounded bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col grow min-w-0 text-center sm:text-left border-t border-davys-grey/20 pt-4 sm:border-t-0 sm:pt-0">
          <span className="hidden sm:block text-body-bold text-vermillion mb-1">
            Eps. {episodeNumber}
          </span>

          <h3 className="text-h3-style-2 text-black transition-colors duration-300 group-hover:text-vermillion mb-1">
            {episodeTitle}
          </h3>

          <div className="w-full h-px bg-davys-grey/30 my-3"></div>

          <p className="text-caption-medium text-davys-grey mb-4">
            {episodeDescription}
          </p>

          <div className="hidden sm:flex justify-end items-center mt-auto">
            <HostInfo
              hosts={hosts}
              className="text-small-bold text-davys-grey flex items-center gap-1 whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
