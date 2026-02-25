import googlePodcast from '../../assets/medium-google-podcast.png'
import spotify from '../../assets/medium-spotify.png'
import youtube from '../../assets/medium-youtube.png'

const sponsors = [
  { name: 'Spotify', logo: spotify, url: 'https://open.spotify.com' },
  {
    name: 'Google Podcast',
    logo: googlePodcast,
    url: 'https://podcasts.google.com',
  },
  { name: 'Youtube', logo: youtube, url: 'https://youtube.com' },
]

export function SupportedBy() {
  return (
    <section className="w-full px-10 md:px-20">
      <div className="max-w-[1160px] mx-auto py-6 border-y-2 border-davys-grey">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-[210px]">
          <p className="text-md font-semibold font-base whitespace-nowrap">
            Supported by:
          </p>

          <ul className="flex items-center gap-4 md:gap-[45px]">
            {sponsors.map(sponsor => (
              <li key={sponsor.name}>
                <a
                  href={sponsor.url}
                  target="_blank" //abre nova aba
                  rel="noopener noreferrer" //segurança
                  aria-label={`Ouça no ${sponsor.name} (abre em nova aba)`}
                >
                  <img
                    src={sponsor.logo}
                    alt="" //texto já esta no link
                    className="h-6 sm:h-8 md:h-auto"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
