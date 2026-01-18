import { Hero } from '../../components/landing/Hero'
import { SponsorSection } from '../../components/layout/SponsorSection/SponsorSection'
/* 
Importação das outras seções da Landing Page:

import { TalkListenSection } from '../../components/landing/TalkListenSection'
import { WhatListenersSay } from '../../components/landing/WhatListenersSay'
import { MembershipBenefits } from '../../components/landing/MembershipBenefits'
import { RecentEpisodesSection } from '../../components/landing/RecentEpisodesSection'
import { ArticlesAndNews } from '../../components/landing/ArticlesAndNews'
import { AppDownloadSection } from '../../components/landing/AppDownloadSection'
*/

export function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <SponsorSection />

        {/* 
        <TalkListenSection />
        <WhatListenersSay />
        <MembershipBenefits />
        <RecentEpisodesSection />
        
        <ArticlesAndNews />
        <AppDownloadSection />
        */}
      </main>
    </>
  )
}
