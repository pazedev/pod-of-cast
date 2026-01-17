import { useState, useRef, useEffect } from 'react'

export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    function onDocumentClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onDocumentClick)
    document.addEventListener('mousedown', onDocumentClick)
    document.addEventListener('keydown', onKeyDown)

    const first = menuRef.current?.querySelector('[role="menuitem"]')
    if (first) requestAnimationFrame(() => first.focus())

    return () => {
      document.removeEventListener('pointerdown', onDocumentClick)
      document.removeEventListener('mousedown', onDocumentClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const handleMenuKeyDown = e => {
    const items = Array.from(
      menuRef.current?.querySelectorAll('[role="menuitem"]') ?? []
    )
    if (!items.length) return

    const currentIndex = items.indexOf(document.activeElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(currentIndex + 1) % items.length].focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(currentIndex - 1 + items.length) % items.length].focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      items[0].focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      items[items.length - 1].focus()
    }
  }

  const handleButtonKeyDown = e => {
    const items = Array.from(
      menuRef.current?.querySelectorAll('[role="menuitem"]') ?? []
    )

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsOpen(true)
      requestAnimationFrame(() => items[0]?.focus())
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIsOpen(true)
      requestAnimationFrame(() => items[items.length - 1]?.focus())
    }
  }

  return {
    isOpen,
    setIsOpen,
    buttonRef,
    menuRef,
    handleMenuKeyDown,
    handleButtonKeyDown,
  }
}
