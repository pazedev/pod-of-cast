import { SubscribeButton } from '../../UI/SubscribeButton.jsx'
import { PODCAST_PLATFORMS } from '../../../constants/platforms.js'

export default function DownloadSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[816px] border-b border-davys-grey bg-alice-blue relative">
      <img
        src="/src/assets/scribble-icon-red.png"
        alt="Imagem de uma linha vermelha"
        className="absolute -translate-y-100 h-[123px] lg:h-[150px]"
      />
      <div className="hidden lg:block overflow-hidden lg:w-1/3 h-full">
        <img
          src="/src/assets/vector-1.png"
          alt="Imagem ilustrativa de uma tela de celular"
          className="w-[410px] max-w-none -translate-x-2/6 translate-y-3/6 xl:-translate-x-1/6 xl:w-[450px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-16 pt-24 pb-4 sm:h-full sm:w-full lg:w-1/3 lg:h-[816px]">
        <span className="text-center text-vermillion text-caption-bold border border-vermillion rounded-lg p-1">
          BETA
        </span>
        <div className="flex flex-col items-center gap-5">
          <h1 className="w-86 text-h1 text-center sm:w-140">
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
            {PODCAST_PLATFORMS.map(Item => (
              <a
                href={Item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={Item.label}
                id={Item.id}
              >
                <Item.Logo
                  className="social-platforms-icons"
                  size={Item.logoWidth}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full lg:w-1/3 lg:h-full">
        <img
          src="/src/assets/vector-2.png"
          alt="Imagem ilustrativa de uma tela de celular"
          className="ml-auto lg:translate-x-2/6 lg:translate-y-1/6 lg:max-w-none lg:w-[550px]"
        />
      </div>
    </div>
  )
}
