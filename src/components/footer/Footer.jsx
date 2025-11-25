export default function Footer() {
  return (
    <footer className="flex flex-col gap-14 w-full">
      <div className="flex flex-row justify-evenly items-center ">
          <div className="w-48">
            <div className="flex flex-row justify-between items-baseline">
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
          <div className="w-40 flex flex-col items-end gap-[0.81rem]">
            <p>App available on:</p>
            <div className="flex flex-row gap-[0.94rem]">
                <img src="/src/assets/app_store.png" alt="Logo AppStore" />
                <img src="/src/assets/google_play.svg" alt="Logo GoogePlay" />
            </div>
          </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col gap-[0.69rem]">
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
      <div className="flex flex-col gap-7 justify-between items-center">
        <p className="text-center">Listen episodes on your fav platform:</p>
        <div className="flex flex-row w-[373px] h-[22px] justify-between items-center">
            <img src="/src/assets/Google_Podcast.png" alt="Logo Google podcasts" width="122px"/>
            <img src="/src/assets/Spotify.png" alt="Logo spotify" width="80px"/>
            <img src="/src/assets/Youtube.png" alt="Logo YouTube"  width="94px"/>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[25px]">
        <a href=""><img src="/src/assets/twitter.png" alt="" width="24px" height="24px"/></a>
        <a href=""><img src="/src/assets/instagram.png" alt="" width="24px" height="24px" /></a>
        <a href=""><img src="/src/assets/tiktok.png" alt="" width="24px" height="24px"/></a>        
      </div>
    </footer>
  );
}
