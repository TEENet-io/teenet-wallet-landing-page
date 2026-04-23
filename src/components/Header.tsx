'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'
import LanguageToggle from './LanguageToggle'

interface HeaderProps {
  content: ContentData['header']
  locale: Locale
}

const WALLET_REPO_URL = 'https://github.com/TEENet-io/teenet-wallet'
const WALLET_APP_URL = 'https://wallet.teenet.app'

export default function Header({ content, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
      const hero = document.getElementById('product')
      if (hero) {
        setOverHero(window.scrollY < hero.offsetTop + hero.offsetHeight - 56)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus management: when drawer opens, focus first interactive element inside
  useEffect(() => {
    if (menuOpen && drawerRef.current) {
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      focusable[0]?.focus()
    }
  }, [menuOpen])

  // Close drawer on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  function handleNavClick(item: string) {
    trackEvent('nav_click', { locale, item })
    setMenuOpen(false)
  }

  function handlePrimaryClick() {
    trackEvent('github_click', { locale, source: 'header' })
    setMenuOpen(false)
  }

  function handleSecondaryClick() {
    trackEvent('app_click', { locale, source: 'header' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          overHero
            ? scrolled
              ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-700'
              : 'bg-[#0f172a]'
            : scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
              : 'bg-white'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Image
              src={overHero ? '/teenet-wallet-logo-nav-dark.svg' : '/teenet-wallet-logo-nav-light.svg'}
              alt="TEENet Wallet"
              width={28}
              height={28}
            />
            <span className={`text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${overHero ? 'text-white' : 'text-gray-900'}`}>
              {content.brandName}
            </span>
          </div>

          {/* Center nav — desktop */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`text-sm transition-colors ${overHero ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs — desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WALLET_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSecondaryClick}
              className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${overHero ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              {content.ctaSecondary}
            </a>
            <a
              href={WALLET_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePrimaryClick}
              className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${overHero ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
            >
              {content.ctaPrimary}
            </a>
            <LanguageToggle locale={locale} dark={overHero} />
          </div>

          {/* Hamburger — mobile */}
          <button
            ref={hamburgerRef}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            className={`lg:hidden flex items-center justify-center h-9 w-9 rounded-md transition-colors ${overHero ? 'text-slate-300 hover:bg-slate-800' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setMenuOpen(true)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile drawer overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Mobile drawer */}
        <div
          id="mobile-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 lg:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-900">{content.brandName}</span>
            <button
              onClick={() => {
                setMenuOpen(false)
                hamburgerRef.current?.focus()
              }}
              aria-label="Close menu"
              className="flex items-center justify-center h-8 w-8 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 border-t border-gray-100 px-4 py-4">
            <a
              href={WALLET_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSecondaryClick}
              className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {content.ctaSecondary}
            </a>
            <a
              href={WALLET_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePrimaryClick}
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              {content.ctaPrimary}
            </a>
            <div className="flex justify-center pt-1">
              <LanguageToggle locale={locale} dark={overHero} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
