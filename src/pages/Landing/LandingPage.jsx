import { Hero } from '../../components/landing/Hero'
/* 
Importação das outras seções da Landing Page:

import { TalkListenSection } from '../../components/landing/TalkListenSection'
import { WhatListenersSay } from '../../components/landing/WhatListenersSay'
import { MembershipBenefits } from '../../components/landing/MembershipBenefits'
import { RecentEpisodesSection } from '../../components/landing/RecentEpisodesSection'
import { SponsorsSection } from '../../components/landing/SponsorsSection'
import { ArticlesAndNews } from '../../components/landing/ArticlesAndNews'
import { AppDownloadSection } from '../../components/landing/AppDownloadSection'
*/

export function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        {/* 
        <TalkListenSection />
        <WhatListenersSay />
        <MembershipBenefits />
        <RecentEpisodesSection />
        <SponsorsSection />
        <ArticlesAndNews />
        <AppDownloadSection />
        */}
      </main>
    </>
  )
}
