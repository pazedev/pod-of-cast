import { Fragment } from 'react'
import Logo from '../Logo'
import SocialLinks from '../../SocialLinks'
import PlatformLinks from '../../PlatformLinks'
import {
  BRANDING,
  FOOTER_NAVIGATION,
  LEGAL_LINKS,
  APP_STORES,
} from '../../../constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full flex flex-col gap-20 md:gap-35 py-20 px-10 justify-center items-center md:pt-30 md:px-20">
      <div className="w-full flex flex-col gap-10 md:gap-10 justify-center items-center sm:flex-wrap sm:justify-between md:items-start md:flex-row">
        <div className="flex flex-col gap-12 md:gap-14 order-1 md:order-0">
          <Logo />
          <SocialLinks />
        </div>

        <nav
          className="flex flex-row gap-25 text-body-medium order-2 md:order-0 mt-6 md:mt-0"
          aria-label="Footer navigation"
        >
          {FOOTER_NAVIGATION.map((links, index) => (
            <div key={index} className="flex flex-col gap-[0.69rem]">
              {links.map(({ href, label }) => (
                <a key={href} href={href} aria-label={`Navigate to ${label}`}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className="flex flex-col text-body-medium text-davys-grey gap-10 items-center sm:items-start order-3 md:order-0 mt-6 md:mt-0">
          <PlatformLinks />

          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-left">{BRANDING.footer.appAvailableText}</p>
            <div className="flex flex-row gap-[0.94rem]">
              {APP_STORES.map(({ id, name, icon, url }) => (
                <a key={id} href={url} aria-label={`Download on ${name}`}>
                  <img src={icon} alt={`Logo ${name}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between border-t pt-6 border-davys-grey text-small-medium text-davys-grey gap-4 items-center">
        <p>
          &copy;{currentYear}. All Rights Reserved.{' '}
          <strong>{BRANDING.copyright.company}</strong>
        </p>
        <nav className="flex flex-row gap-4" aria-label="Legal links">
          {LEGAL_LINKS.map(({ href, label }, index) => (
            <Fragment key={href}>
              <a href={href} aria-label={`View ${label}`}>
                {label}
              </a>
              {index < LEGAL_LINKS.length - 1 && (
                <span aria-hidden="true">•</span>
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </footer>
  )
}
