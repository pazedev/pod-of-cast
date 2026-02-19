import { FeaturedEpisodesSection } from './FeaturedEpisodesSection.jsx'
import { SubscribeButton } from '../UI/SubscribeButton.jsx'
import { DECORATIONS } from '../../constants/index.js'
import { SupportedBy } from './SupportedBy.jsx'

export function Hero() {
  return (
    <section className="hero bg-champagne flex flex-col items-center py-10">
      <div className="relative flex justify-center w-full mt-20">
        <img
          src={DECORATIONS.shapeStars}
          alt=""
          className="absolute right-[5%] bottom-[60%] sm:right-[10%] lg:right-[8%] lg:bottom-[3%] xl:right-[10%] xl:bottom-[-40%] w-18 md:w-20 lg:w-25 xl:w-32"
        />
        <img
          src={DECORATIONS.shapeSwirl}
          alt=""
          className="absolute right-[57%] top-[98%] sm:right-[70%] md:right-[73%] md:top-[40%] lg:right-[75%] lg:top-[-10%] xl:left-[0%] xl:top-[-40%] w-65 xl:w-80"
        />
        <h1 className="text-display text-center">
          Your <br className="md:hidden" />
          Daily <br />
          <span className="text-vermillion">Podcast</span>
        </h1>
      </div>
      <p className="text-body-medium text-davys-grey text-center my-10">
        We cover all kinds of categories and <br /> a weekly special guest.
      </p>
      <SubscribeButton text="Subscribe" variant="mobile" />
      <div className="mt-12">
        <FeaturedEpisodesSection />
      </div>
      <div className="mt-12">
        <SupportedBy />
      </div>
    </section>
  )
}
