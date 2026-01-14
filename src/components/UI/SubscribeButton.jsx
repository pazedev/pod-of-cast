export const SubscribeButton = ({ text, variant = 'desktop', onClick }) => {
  const variants = {
    // Main buttons
    desktop:
      'button-black md:px-4 md:py-3 md:text-base lg:px-12 lg:py-6 lg:text-lg shadow-[6px_6px_0_rgba(0,0,0,0.25)]',
    mobile:
      'button-black px-8 py-4 text-sm shadow-[6px_6px_0_rgba(0,0,0,0.25)]',

    // Outline buttons
    outlineDesktop:
      'button-outline md:px-8 md:py-3 md:text-base lg:px-12 lg:py-6 lg:text-lg shadow-[6px_6px_0_rgba(0,0,0,0.25)]',
    outlineMobile:
      'button-outline px-8 py-4 text-sm shadow-[6px_6px_0_rgba(0,0,0,0.25)]',

    // Buttons in navbar (smaller size and no shadow)
    navbar: 'button-black shadow-none px-6 py-2 text-sm',
    outlineNavbar: 'button-outline shadow-none px-6 py-2 text-sm',
  }

  return (
    <button onClick={onClick} className={variants[variant]}>
      {text}
    </button>
  )
}
