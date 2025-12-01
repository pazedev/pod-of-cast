import { SubscribeButton } from '../SubscribeButton'

export default function DownloadSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-background-AliceBlue overflow-hidden">
      <img
        src="/src/assets/vector-download-section1.png"
        alt=""
        width="373px"
        class="hidden md:block absolute -left-16 top-88  pointer-events-none select-none"
      />
      <img
        src="/src/assets/vector-download-section2.png"
        alt=""
        width="490px"
        class="hidden md:block absolute -right-55 top-50  pointer-events-none select-none"
      />

      <div className="flex flex-col items-center justify-between gap-10">
        <span className="text-font-Vermillion font-bold border border-font-Vermillion rounded-lg p-1">
          BETA
        </span>
        <h1 className="w-80 sm:w-140 text-center">
          Available now Pod of Cast App
        </h1>
        <p>We just launched our podcast app!</p>
        <SubscribeButton text="Download now" />
        <p>Content also available on:</p>
        <div className="flex flex-row gap-5">
          <a href="#">
            <img
              src="/src/assets/google-podcast-icon-black.png"
              alt="Logo Google podcasts"
            />
          </a>
          <a href="#">
            <img src="/src/assets/spotify-icon-black.png" alt="Logo spotify" />
          </a>
          <a href="#">
            <img src="/src/assets/youtube-icon-black.png" alt="Logo YouTube" />
          </a>
        </div>
      </div>
    </div>
  )
}
