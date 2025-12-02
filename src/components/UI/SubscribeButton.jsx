export const SubscribeButton = ({ text, variant = 'desktop', onClick }) => {
  const variants = {
    desktop:
      'button-black md:px-8 md:py-3 md:text-base lg:px-12 lg:py-6 lg:text-lg',
    mobile: 'button-black px-8 py-4 text-sm',
    outlineDesktop:
      'button-outline md:px-8 md:py-3 md:text-base lg:px-12 lg:py-6 lg:text-lg',
    outlineMobile: 'button-outline px-8 py-4 text-sm',
  }

  return (
    <button onClick={onClick} className={variants[variant]}>
      {text}
    </button>
  )
}
