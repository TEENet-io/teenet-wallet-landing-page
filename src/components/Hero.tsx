'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'
import HeroMockup from './mockups/HeroMockup'

interface HeroProps {
  content: ContentData['hero']
  locale: Locale
  onBetaClick: () => void
}

export default function Hero({ content, locale, onBetaClick }: HeroProps) {
  function handlePrimaryClick() {
    trackEvent('hero_cta_primary', { locale })
    onBetaClick()
  }

  function handleSecondaryClick() {
    trackEvent('hero_cta_secondary', { locale })
    trackEvent('demo_click', { locale, source: 'hero' })
    const el = document.getElementById('faq')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="product"
      className="bg-[#0f172a] pt-20 pb-16 md:pt-28 md:pb-24 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          {/* Left column: value proposition */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">
              {content.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight text-white leading-[1.2]">
              {content.headline.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 mt-5 leading-relaxed">
              {content.subheadline}
            </p>

            {/* Benefit Chips */}
            <div className="grid grid-cols-2 gap-2 mt-6">
              {content.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-300"
                >
                  <svg className="h-3 w-3 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={handlePrimaryClick}
                className="bg-white text-slate-900 px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
              >
                {content.ctaPrimary}
              </button>
              <button
                onClick={handleSecondaryClick}
                className="border border-slate-600 text-slate-300 px-7 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                {content.ctaSecondary}
              </button>
            </div>

            {/* Supporting Line */}
            <p className="text-sm text-slate-400 mt-6 leading-relaxed max-w-lg">
              {content.supporting}
            </p>

            {/* Trust Line */}
            <p className="text-xs text-slate-500 mt-3 font-medium tracking-wide">
              {content.trustLine}
            </p>
          </div>

          {/* Right column: 3-layer stacked mockup */}
          <div className="mt-14 lg:mt-0 flex-shrink-0 flex justify-center lg:justify-end">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
