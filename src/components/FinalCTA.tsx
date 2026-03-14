'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface FinalCTAProps {
  content: ContentData['finalCTA']
  locale: Locale
  onBetaClick: () => void
}

export default function FinalCTA({ content, locale, onBetaClick }: FinalCTAProps) {
  function handlePrimaryClick() {
    trackEvent('final_cta_primary', { locale })
    onBetaClick()
  }

  function handleSecondaryClick() {
    trackEvent('final_cta_secondary', { locale })
    trackEvent('demo_click', { locale, source: 'final_cta' })
    const faqEl = document.getElementById('faq')
    if (faqEl) {
      faqEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {content.headline}
        </h2>

        <div className="text-lg text-gray-600 mt-6 space-y-2">
          {content.body.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={handlePrimaryClick}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors"
          >
            {content.ctaPrimary}
          </button>
          <button
            onClick={handleSecondaryClick}
            className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            {content.ctaSecondary}
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-6">{content.supporting}</p>
      </div>
    </section>
  )
}
