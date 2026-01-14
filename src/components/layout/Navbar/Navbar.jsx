import { useState, useRef, useEffect } from 'react'
import logo from '../../../assets/logo.png'
import { SubscribeButton } from '../../UI/SubscribeButton'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const moreButtonRef = useRef(null)
  const moreMenuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMore = () => {
    setIsMoreOpen(prev => !prev)
  }

  // Close the dropdown when clicking outside or pressing Escape. Manage arrow-key navigation inside the menu.
  useEffect(() => {
    function onDocumentClick(e) {
      if (!isMoreOpen) return
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(e.target) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(e.target)
      ) {
        setIsMoreOpen(false)
      }
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setIsMoreOpen(false)
        moreButtonRef.current?.focus()
      }
    }

    if (isMoreOpen) {
      // Use pointerdown for better touch/pointer support and keep mousedown as a fallback
      document.addEventListener('pointerdown', onDocumentClick)
      document.addEventListener('mousedown', onDocumentClick)
      document.addEventListener('keydown', onKeyDown)

      // Focus first item when opening (use role selector and requestAnimationFrame to ensure it's mounted)
      const first =
        moreMenuRef.current?.querySelector('[role="menuitem"]') ?? null
      if (first) {
        requestAnimationFrame(() => first.focus())
      }
    }

    return () => {
      document.removeEventListener('pointerdown', onDocumentClick)
      document.removeEventListener('mousedown', onDocumentClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isMoreOpen])

  const handleMoreKeyDown = e => {
    const items = moreMenuRef.current
      ? Array.from(moreMenuRef.current.querySelectorAll('[role="menuitem"]'))
      : []
    if (!items.length) return

    const currentIndex = items.indexOf(document.activeElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = items[(currentIndex + 1) % items.length]
      next.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = items[(currentIndex - 1 + items.length) % items.length]
      prev.focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      items[0].focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      items[items.length - 1].focus()
    } else if (e.key === 'Tab') {
      // If tabbing out of the menu, close it
      const first = items[0]
      const last = items[items.length - 1]
      if (!e.shiftKey && document.activeElement === last) {
        setIsMoreOpen(false)
      } else if (e.shiftKey && document.activeElement === first) {
        setIsMoreOpen(false)
      }
    }
  }

  const handleMoreButtonKeyDown = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsMoreOpen(true)
      requestAnimationFrame(() =>
        moreMenuRef.current?.querySelector('[role="menuitem"]')?.focus()
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIsMoreOpen(true)
      requestAnimationFrame(() => {
        const items = Array.from(
          moreMenuRef.current?.querySelectorAll('[role="menuitem"]') ?? []
        )
        items[items.length - 1]?.focus()
      })
    }
  }

  return (
    <nav className="navbar text-davys-grey mt-6">
      <div className="w-full px-10 md:px-20">
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
              className="text-davys-grey hover:text-vermillion transition-colors duration-200 font-medium"
            >
              Episodes
            </a>
            <a
              href="/about"
              className="text-davys-grey hover:text-vermillion transition-colors duration-200 font-medium"
            >
              About
            </a>

            {/* Dropdown "More" */}
            <div className="relative">
              <button
                id="more-button"
                ref={moreButtonRef}
                onClick={toggleMore}
                onKeyDown={handleMoreButtonKeyDown}
                aria-haspopup="true"
                aria-expanded={isMoreOpen}
                aria-controls="more-menu"
                className="flex items-center text-davys-grey hover:text-vermillion transition-colors duration-200 font-medium cursor-pointer"
                type="button"
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
                <div
                  id="more-menu"
                  ref={moreMenuRef}
                  role="menu"
                  aria-labelledby="more-button"
                  aria-hidden={!isMoreOpen}
                  onKeyDown={handleMoreKeyDown}
                  className="absolute top-full left-0 -mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  <a
                    href="/hosts"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 text-davys-grey hover:bg-vermillion hover:text-white"
                    onClick={() => setIsMoreOpen(false)}
                  >
                    Hosts
                  </a>
                  <a
                    href="/contact"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 text-davys-grey hover:bg-vermillion hover:text-white"
                    onClick={() => setIsMoreOpen(false)}
                  >
                    Contact
                  </a>
                  <a
                    href="/faq"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 text-davys-grey hover:bg-vermillion hover:text-white"
                    onClick={() => setIsMoreOpen(false)}
                  >
                    FAQ
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Botões Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <SubscribeButton text="RECENT EPISODES" variant="outlineNavbar" />
            <SubscribeButton text="SUBSCRIBE" variant="navbar" />
          </div>

          {/* Botão Hamburger Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-davys-grey transition-colors duration-200 focus:outline-none"
            aria-label="Menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
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
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-2 pb-4 space-y-3">
          <a
            href="/episodes"
            className="block px-4 py-3 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
          >
            Episodes
          </a>
          <a
            href="/about"
            className="block px-4 py-3 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/hosts"
            className="block px-4 py-3 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
          >
            Hosts
          </a>
          <a
            href="/contact"
            className="block px-4 py-3 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact
          </a>

          <div className="flex flex-col lg:hidden px-4 pt-2 gap-4 items-start">
            <SubscribeButton text="RECENT EPISODES" variant="outlineNavbar" />
            <SubscribeButton text="SUBSCRIBE" variant="navbar" />
          </div>
        </div>
      </div>
    </nav>
  )
}
