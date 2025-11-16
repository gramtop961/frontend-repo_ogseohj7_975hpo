import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'How it works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-bold text-gray-900">Flames AI Agency</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
              Get a demo
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-3 py-2 rounded-md hover:bg-white text-gray-800">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">
                Get a demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
