import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../Logo'
import { SubscribeButton } from '../../UI/SubscribeButton'
import { DropdownMenu } from '../../UI/DropdownMenu'
import { useDropdown } from '../../../hooks/useDropdown'
import { NAV_LINKS, MORE_LINKS } from '../../../constants/index.js'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {
    isOpen: isMoreOpen,
    setIsOpen: setIsMoreOpen,
    buttonRef: moreButtonRef,
    menuRef: moreMenuRef,
    handleMenuKeyDown,
    handleButtonKeyDown,
  } = useDropdown()

  return (
    <nav className="navbar bg-champagne text-davys-grey pt-6">
      <div className="w-full px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <a href="/">
              <Logo size={64} showCopyright={false} showDescription={false} />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-davys-grey hover:text-vermillion transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}

            <DropdownMenu
              label="More"
              items={MORE_LINKS}
              isOpen={isMoreOpen}
              buttonRef={moreButtonRef}
              menuRef={moreMenuRef}
              onToggle={() => setIsMoreOpen(prev => !prev)}
              onItemClick={() => setIsMoreOpen(false)}
              onKeyDown={handleMenuKeyDown}
              onButtonKeyDown={handleButtonKeyDown}
            />
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <SubscribeButton text="RECENT EPISODES" variant="outlineNavbar" />
            <SubscribeButton text="SUBSCRIBE" variant="navbar" />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-davys-grey transition-colors duration-200"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-2 pb-4 space-y-3">
          {[...NAV_LINKS, ...MORE_LINKS].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block px-4 py-3 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <div className="flex flex-col px-4 pt-2 gap-4">
            <SubscribeButton text="RECENT EPISODES" variant="outlineNavbar" />
            <SubscribeButton text="SUBSCRIBE" variant="navbar" />
          </div>
        </div>
      </div>
    </nav>
  )
}
