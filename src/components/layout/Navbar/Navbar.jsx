import { useState } from 'react'
import logo from '../../../assets/logo.png'
import { SubscribeButton } from '../../UI/SubscribeButton'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar text-gray-800 mt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Pod of Cast" className="h-16 w-auto" />
            </a>
          </div>

          {/* Links Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/episodes"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Episodes
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              About
            </a>

            {/* Dropdown "More" */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium"
              >
                More
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="/hosts"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Hosts
                  </a>
                  <a
                    href="/contact"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                  <a
                    href="/faq"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    FAQ
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Botões Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <SubscribeButton
              text="RECENT EPISODES"
              variant="outlineDesktopNavbar"
            />
            <SubscribeButton text="SUBSCRIBE" variant="desktopNavbar" />
          </div>

          {/* Botão Hamburger Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-2 pb-4 space-y-1 bg-[#dcc5bf]">
          <a
            href="/episodes"
            className="block px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Episodes
          </a>
          <a
            href="/about"
            className="block px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/hosts"
            className="block px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Hosts
          </a>
          <a
            href="/contact"
            className="block px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact
          </a>

          <div className="hidden lg:flex items-center space-x-4">
            <SubscribeButton text="RECENT EPISODES" variant="outlineMobile" />
            <SubscribeButton text="SUBSCRIBE" variant="mobile" />
          </div>
        </div>
      </div>
    </header>
  )
}
