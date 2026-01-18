import { Hero } from '../../components/landing/Hero'
/* 
Import statements for other sections that are currently commented out:

import { TalkListenSection } from '../../components/landing/TalkListenSection'
import { WhatListenersSay } from '../../components/landing/WhatListenersSay'
import { MembershipBenefits } from '../../components/landing/MembershipBenefits'
import { RecentEpisodesSection } from '../../components/landing/RecentEpisodesSection'
import { SponsorsSection } from '../../components/landing/SponsorsSection'
import { ArticlesAndNews } from '../../components/landing/ArticlesAndNews'
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
        */}
      </main>
    </>
  )
}
