import { SubscribeButton } from '../../UI/SubscribeButton'

export function SponsorSection() {
  return (
    <div className="flex flex-col items-center h-[816px] bg-white">
      <div className="flex flex-col gap-5 w-[623px] h-[127px]">
        <h1 className="text-h1 text-center">Become our sponsor</h1>
        <h3>Get exclusive episodes, merch and more</h3>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col items-center gap-5 w-[373px] h-[689px]">
          <div className="w-[373px] h-[312px] border rounded-lg">
            <h2 className="text-h2-style-2">Member</h2>
            <p className="text-caption-medium text-davys-grey">
              Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
              tempor.
            </p>
            <SubscribeButton text="Subscribe" />
            <div>
              <span>$9.99</span>
              <span>/month</span>
            </div>
          </div>
          <div className="w-[373px] h-[357px] border rounded-lg">
            <p className="text-caption-bold text-davys-grey">
              What’s included:
            </p>
            <ul className="list-disc pl-5 text-body-medium">
              <li>Exclusive Content</li>
              <li>5% Discount on Merch</li>
              <li>Join the Community</li>
              <li>Livestreaming Access</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 w-[373px] h-[689px]">
          <div className="w-[373px] h-[312px] border rounded-lg bg-champagne">
            <h2 className="text-h2-style-2">Family</h2>
            <span>MOST POPULAR</span>
            <p className="text-caption-medium text-davys-grey">
              Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
              tempor.
            </p>
            <SubscribeButton text="Subscribe" />
            <div>
              <span>$14.99</span>
              <span>/month</span>
            </div>
          </div>
          <div className="w-[373px] h-[357px] border rounded-lg bg-champagne">
            <p className="text-caption-bold text-davys-grey">
              What’s included:
            </p>
            <ul className="list-disc pl-5 text-body-medium">
              <li>Everything in Tier 1</li>
              <li>Free tickets to Events</li>
              <li>Limited Edition Merch</li>
              <li>Promote your Product</li>
              <li>Request Topic</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 w-[373px] h-[689px]">
          <div className="w-[373px] h-[312px] border rounded-lg">
            <h2 className="text-h2-style-2">Official</h2>
            <p className="text-caption-medium text-davys-grey">
              Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
              tempor.
            </p>
            <SubscribeButton text="Subscribe" />
            <div>
              <span>$29.99</span>
              <span>/month</span>
            </div>
          </div>
          <div className="w-[373px] h-[357px] border rounded-lg">
            <p className="text-caption-bold text-davys-grey">
              What’s included:
            </p>
            <ul className="list-disc pl-5 text-body-medium">
              <li>Everything in Tier 2</li>
              <li>Exclusive Badge on Livestreaming</li>
              <li>Become an Official Sponsor</li>
              <li>Early Access to All Episodes</li>
              <li>Free Stikers and Merch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
