import { SubscribeButton } from '../../UI/SubscribeButton'

export default function SponsorCard({ content }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center gap-5 w-[373px] h-[689px]">
        <div className="flex flex-col justify-between w-[373px] h-[312px] border rounded-lg px-10 pt-15 pb-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-h2-style-2">{content.tiers}</h2>
            <p className="text-caption-medium text-davys-grey">
              {content.description}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <SubscribeButton text={content.titleButton} variant="mobile" />
            <div className="flex flex-col">
              <span className="text-h3-style-2 text-vermillion">
                {content.value}
              </span>
              <span className="text-small-bold text-davys-grey">/month</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-10 w-[373px] h-[357px] border rounded-lg">
          <p className="text-caption-bold text-davys-grey">What’s included:</p>
          <ul className="flex flex-col gap-2.5 list-disc pl-5 text-body-medium">
            {content.whatsIncluded.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
