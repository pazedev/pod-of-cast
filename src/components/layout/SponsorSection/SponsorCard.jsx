import clsx from 'clsx'
import { SubscribeButton } from '../../UI/SubscribeButton'

export default function SponsorCard({ content, emphasis }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center gap-5 w-[373px] min-h-[480px]">
        <div
          className={clsx(
            'flex flex-col justify-between border-[1.5px] rounded-lg px-10 pt-10 pb-8 w-[373px] h-[480px] sm:pt-15 sm:h-[312px]',
            emphasis ? 'bg-champagne border-vermillion' : 'bg-white'
          )}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-h2-style-2">{content.tiers}</h2>
              {content.emphasis && (
                <span className="px-1.5 py-1 rounded-sm border border-vermillion bg-vermillion text-small-bold text-white">
                  MOST POPULAR
                </span>
              )}
            </div>
            <p className="text-caption-medium text-davys-grey">
              {content.description}
            </p>
          </div>
          <div className="sm:hidden">
            <p className="text-caption-bold text-davys-grey">
              What’s included:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 text-body-medium">
              {content.whatsIncluded.map(item => (
                <li className="whitespace-nowrap">{item}</li>
              ))}
            </ul>
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
        <div
          className={clsx(
            'hidden sm:flex sm:flex-col gap-5 w-[373px] h-[312px] border-[1.5px] rounded-lg px-10 pt-15 pb-8',
            emphasis ? 'bg-champagne border-vermillion' : 'bg-white'
          )}
        >
          <p className="text-caption-bold text-davys-grey">What’s included:</p>
          <ul className="flex flex-col gap-2.5 list-disc pl-5 text-body-medium">
            {content.whatsIncluded.map(item => (
              <li className="whitespace-nowrap">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
