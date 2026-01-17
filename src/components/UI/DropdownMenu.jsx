import { ChevronDown } from 'lucide-react'

export function DropdownMenu({
  label,
  items,
  isOpen,
  buttonRef,
  menuRef,
  onToggle,
  onItemClick,
  onKeyDown,
  onButtonKeyDown,
}) {
  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={onToggle}
        onKeyDown={onButtonKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center text-davys-grey hover:text-vermillion transition-colors duration-200 font-medium"
        type="button"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          onKeyDown={onKeyDown}
          className="absolute top-full left-0 -mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
        >
          {items.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              role="menuitem"
              tabIndex={0}
              className="block px-4 py-2 text-davys-grey hover:bg-vermillion hover:text-white"
              onClick={onItemClick}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
