import googlePodcast from '../../assets/medium-google-podcast.png'
import spotify from '../../assets/medium-spotify.png'
import youtube from '../../assets/medium-youtube.png'

const sponsors = [
  { name: 'Spotify', logo: spotify, url: 'https://open.spotify.com'},
  { name: 'Google Podcast', logo: googlePodcast, url: 'https://podcasts.google.com'},
  { name: 'Youtube', logo: youtube,  url: 'https://youtube.com'},
]

export function SupportedBy() {
  return (
    <section className="w-full px-10 md:px-20">
      <div className="max-w-[1160px] mx-auto py-6 border-y-2 border-davys-grey">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-[210px]">
          <p className="text-md font-semibold font-base whitespace-nowrap">
            Supported by:
          </p>

          <div
            className="flex flex-row items-center gap-[45px]"
            aria-label="Plataformas que apoiam o podcast (ao clicar abre em nova aba)"
          >
            {sponsors.map(sponsor => (
              <span key={sponsor.name}>
                <img src={sponsor.logo} alt={`Logo do ${sponsor.name}`} href={sponsor.url}/>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
