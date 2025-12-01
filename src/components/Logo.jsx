import { BRANDING } from '../constants/branding'

export default function Logo({
  size = BRANDING.logo.defaultSize,
  showCopyright = true,
  showDescription = true,
  className = '',
}) {
  const containerClass = showDescription
    ? 'w-48 flex flex-col gap-4'
    : 'flex items-center gap-4'

  return (
    <div className={`${containerClass} ${className}`}>
      <div className="flex flex-row items-end gap-10">
        <img
          src={BRANDING.logo.src}
          alt={BRANDING.logo.alt}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
        {showCopyright && (
          <span className="text-small-medium text-davys-grey">
            &copy; {BRANDING.copyright.year}
          </span>
        )}
      </div>
      {showDescription && (
        <p className="text-caption-medium text-davys-grey">
          {BRANDING.description}
        </p>
      )}
    </div>
  )
}
