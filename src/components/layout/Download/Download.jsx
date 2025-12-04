import { SubscribeButton } from '../../UI/SubscribeButton.jsx'
import { PODCAST_PLATFORMS } from '../../../constants/platforms.js'

console.log(PODCAST_PLATFORMS)
export default function DownloadSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 min-h-[645px] sm:min-h-screen w-full bg-background-AliceBlue">
      <div>
        <img
          src="/src/assets/vector-1.png"
          alt="Figura de celular"
          width="300px"
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-20 px-20">
        <span className="text-vermillion font-bold border border-vermillion rounded-lg p-1">
          BETA
        </span>
        <div className="flex flex-col items-center gap-5">
          <h1 className="w-80 sm:w-140 text-center text-h1">
            Available now Pod of Cast App
          </h1>
          <h3 className="text-h3-style-1">We just launched our podcast app!</h3>
        </div>
        <SubscribeButton text="Download now" />
        <div className="flex flex-col gap-2">
          <p className="text-small-medium text-davys-grey">
            Content also available on:
          </p>
          <div className="flex justify-center gap-5">
            {PODCAST_PLATFORMS.map(({ id, name, logo, icon }) => (
              <img
                key={id}
                src={logo ?? icon}
                alt={name}
                title={`Available on ${name}`}
                className="object-contain p-1 w-8 h-8 invert"
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <img
          src="/src/assets/vector-2.png"
          alt="Figura de celular"
          width="400px"
        />
      </div>
    </div>
  )
}
