import { SubscribeButton } from '../../UI/SubscribeButton.jsx'
import { PODCAST_PLATFORMS } from '../../../constants/platforms.js'

export default function DownloadSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[816px]  border-b border-davys-grey bg-alice-blue">
      <div className="hidden lg:block overflow-hidden lg:w-1/3 h-full">
        <img
          src="/src/assets/vector-1.png"
          alt="Imagem ilustrativa de uma tela de celular"
          className="w-[373px] max-w-none -translate-x-1/5 translate-y-3/5"
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-18 pb-2 sm:h-full sm:w-full lg:w-1/3 lg:h-[600px]">
        <span className="text-vermillion text-caption-bold border border-vermillion rounded-lg p-1">
          BETA
        </span>
        <div className="flex flex-col items-center gap-5">
          <h1 className="w-80 sm:w-140 text-center text-h1">
            Available now Pod of Cast App
          </h1>
          <h3 className="text-h3-style-1 text-center">
            We just launched our podcast app!
          </h3>
        </div>

        <SubscribeButton text="Download now" />

        <div className="flex flex-col gap-2.5">
          <p className="text-caption-medium text-davys-grey text-center">
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

      <div className="overflow-hidden w-full lg:w-1/3 lg:h-full">
        <img
          src="/src/assets/vector-2.png"
          alt="Imagem ilustrativa de uma tela de celular"
          className="ml-auto md:translate-x-1/3 lg:translate-x-2/6 lg:translate-y-3/6 lg:max-w-none lg:w-[480px]"
        />
      </div>
    </div>
  )
}
