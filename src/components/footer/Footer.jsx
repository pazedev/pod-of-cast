export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-35 py-20 px-10 justify-center items-center md:pt-30 md:px-20">
      <div className="w-full flex flex-col gap-10 justify-center items-center sm:flex-wrap sm:justify-between md:items-start md:flex-row">
        <div className="flex flex-col gap-14">
          <div className="w-48 md flex flex-col gap-4">
            <div className="flex flex-row items-end justify-between">
              <img
                src="/src/assets/logo.png"
                alt="Logo PodOfCast"
                width="74px"
                height="74px"
              />
              <span>&copy; 2021</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
          </div>
          <div className="flex flex-row gap-[25px] justify-center sm:justify-start">
            <a href="#">
              <img
                src="/src/assets/twitter.png"
                alt="Logo Twitter"
                width="24px"
                height="24px"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/instagram.png"
                alt="Logo Instagram"
                width="24px"
                height="24px"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/tiktok.png"
                alt="Logo Tiktok"
                width="24px"
                height="24px"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-25">
          <div className="flex flex-col gap-[0.69rem] ">
            <a href="#">About</a>
            <a href="#">Testimonials</a>
            <a href="#">Features</a>
          </div>
          <div className="flex flex-col gap-[0.69rem]">
            <a href="#">Episodes</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center sm:items-start">
          <div className="flex flex-col gap-7 items-center sm:items-start">
            <p className="text-left">Listen episodes on your fav platform:</p>
            <div className="flex flex-row gap-6 w-[373px] h-[22px] sm:gap-9 items-center justify-center">
              <a href="#">
                <img
                  src="/src/assets/Google_Podcast.png"
                  alt="Logo Google podcasts"
                  width="122px"
                />
              </a>
              <a href="#">
                <img
                  src="/src/assets/Spotify.png"
                  alt="Logo spotify"
                  width="80px"
                />
              </a>
              <a href="#">
                <img
                  src="/src/assets/Youtube.png"
                  alt="Logo YouTube"
                  width="94px"
                />
              </a>
            </div>
          
          </div>
          <div className="flex flex-col gap-2">
              <p className="text-left">App available on:</p>
              <div className="flex flex-row gap-[0.94rem]">
                <img src="/src/assets/app_store.png" alt="Logo AppStore" />
                <img src="/src/assets/google_play.svg" alt="Logo GoogePlay" />
          </div>
        </div>
      </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between border-t pt-6 border-gray-400">
        <p>&copy;2022. All Rights Reserved. <strong>Pod of Cast.</strong></p>
        <div className="flex flex-row gap-4">
          <a href="#">Terms</a>
          <span>.</span>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
