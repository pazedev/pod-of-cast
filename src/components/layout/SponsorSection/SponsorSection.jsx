import { BECOME_SPONSOR } from '../../../constants/index'
import SponsorCard from './SponsorCard'

export function SponsorSection() {
  return (
    <div className="flex flex-col gap-25 items-center px-35 py-16 m-auto sm:m-1 relative">
      <div className="flex flex-col gap-5 w-[623px] h-[127px]">
        <h1 className="text-h1 text-center">Become our sponsor</h1>
        <h3 className="text-h3-style-1 text-center text-davys-grey">
          Get exclusive episodes, merch and more
        </h3>
      </div>
      <section className="flex flex-wrap gap-5">
        {BECOME_SPONSOR.map(content => (
          <SponsorCard content={content} emphasis={content.emphasis} />
        ))}
      </section>
    </div>
  )
}
