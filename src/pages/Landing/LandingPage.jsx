import { Hero } from '../../components/landing/Hero'
import RecentEpisodes from '../../components/landing/RecentEpisodesSection'
import { SponsorSection } from '../../components/landing/SponsorSection/SponsorSection'

export function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <RecentEpisodes />
        <SponsorSection />
      </main>
    </>
  )
}
