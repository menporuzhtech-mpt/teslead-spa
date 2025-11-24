"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail, Phone } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const email = "sales@teslead.com"
  const phone = "9655217270"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Teslead Logo"
              width={130}
              height={130}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Contact Section */}
          <div className="hidden md:flex items-center gap-8">
            <span className="text-sm font-semibold text-gray-900 tracking-wide">
              For any queries:
            </span>

            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-gray-50 hover:border-blue-300 hover:shadow-lg hover:text-blue-900 transition-all duration-300"
            >
              <Mail size={20} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="truncate">{email}</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gradient-to-r hover:from-green-50 hover:to-gray-50 hover:border-green-300 hover:shadow-lg hover:text-green-900 transition-all duration-300"
            >
              <Phone size={20} className="text-green-600 group-hover:text-green-700 transition-colors" />
              <span>{phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Contact Section */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 md:hidden bg-white rounded-xl p-5 border border-gray-200 shadow-md">
            <span className="text-sm font-semibold text-gray-900 tracking-wide">
              Get in Touch
            </span>

            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-3 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-900 py-2 px-3 rounded-md transition-all duration-200"
            >
              <Mail size={20} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="truncate">{email}</span>
            </a>
            <a
              href={`tel:${phone}`}
              className="group flex items-center gap-3 text-sm font-medium text-gray-900 hover:bg-green-50 hover:text-green-900 py-2 px-3 rounded-md transition-all duration-200"
            >
              <Phone size={20} className="text-green-600 group-hover:text-green-700 transition-colors" />
              <span>{phone}</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
