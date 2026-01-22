import { BECOME_SPONSOR } from '../../../constants/index'
import SponsorCard from './SponsorCard'

export function SponsorSection() {
  return (
    <div className="flex flex-col gap-25 items-center px-25 py-8 md:py-36 xl:px-35 m-auto sm:m-1">
      <img
        src="/src/assets/sparkle-icon-2.svg"
        alt=""
        className="absolute z-0 -translate-x-54 -translate-y-8 w-[60px] sm:-translate-x-80 sm:-translate-y-16 sm:w-[120px]"
      />
      <div className="flex flex-col gap-5 h-[127px]">
        <h1 className="text-h1 text-center whitespace-nowrap">
          Become our sponsor
        </h1>
        <h3 className="text-h3-style-1 text-center text-davys-grey">
          Get exclusive episodes, merch and more
        </h3>
      </div>
      <section className="flex flex-wrap gap-5 relative z-10">
        {BECOME_SPONSOR.map(content => (
          <SponsorCard content={content} emphasis={content.emphasis} />
        ))}
      </section>
      <img
        src="/src/assets/star-4.svg"
        alt=""
        className="absolute z-0 translate-x-35 w-[100px] sm:w-[120px] md:w-[200px] sm:translate-x-42 md:translate-x-38 lg:translate-x-95 xl:translate-x-145 translate-y-40"
      />
      <img
        src="/src/assets/vector-4.svg"
        alt=""
        className="hidden lg:block absolute z-0 lg:-translate-x-148 lg:translate-y-200"
      />
    </div>
  )
}
