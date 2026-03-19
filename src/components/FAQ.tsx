'use client'

import { useState } from 'react'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface FAQProps {
  content: ContentData['faq']
  locale: Locale
}

export default function FAQ({ content, locale }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function handleToggle(index: number) {
    const isOpening = openIndex !== index
    setOpenIndex(isOpening ? index : null)
    if (isOpening) {
      trackEvent('faq_expand', { locale, question: content.items[index].question })
    }
  }

  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="text-sm font-medium text-gray-400 tracking-widest uppercase text-center">
          {content.eyebrow}
        </p>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-3">
          {content.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base text-gray-500 text-center mt-3 leading-relaxed">
          {content.subtitle}
        </p>

        {/* Accordion */}
        <div className="mt-12">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`

            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleToggle(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  <svg
                    className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div id={panelId} className="pb-5">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
