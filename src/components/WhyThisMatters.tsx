'use client'

import { useState } from 'react'
import { ContentData } from '@/content/types'

interface WhyThisMattersProps {
  content: ContentData['whyThisMatters']
}

/* Mini UI illustrations for each card */
function IllustrationRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
        {label}
      </span>
      <span className="text-[11px] font-mono font-medium text-gray-700 bg-gray-100 rounded px-1.5 py-0.5">
        {value}
      </span>
    </div>
  )
}

function CardIllustration1() {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg bg-gray-50 border border-gray-100 p-3 mt-4">
      <IllustrationRow label="Check balance" value="0.42 ETH" />
      <IllustrationRow label="Send transfer" value="0.05 ETH" />
      <IllustrationRow label="Recent activity" value="3 txns" />
    </div>
  )
}

function CardIllustration2() {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg bg-gray-50 border border-gray-100 p-3 mt-4">
      <IllustrationRow label="Transfer limit" value="0.1 ETH" />
      <IllustrationRow label="Allowed contracts" value="only" />
      <IllustrationRow label="Rule changes" value="approval" />
    </div>
  )
}

function CardIllustration3() {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg bg-gray-50 border border-gray-100 p-3 mt-4">
      <IllustrationRow label="Review transaction" value="0.8 ETH" />
      <IllustrationRow label="Verify with" value="Passkey" />
      <IllustrationRow label="Status" value="✓ Done" />
    </div>
  )
}

const CARD_ILLUSTRATIONS = [CardIllustration1, CardIllustration2, CardIllustration3]

const CARD_ICONS = [
  // Chat / message icon
  <svg key="chat" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>,
  // Shield icon
  <svg key="shield" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Fingerprint icon
  <svg key="finger" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-1.334 4.153M12.75 3c.614 0 1.216.046 1.805.135M12.75 3a48.09 48.09 0 00-9.915 1.735M12.75 3c-1.194 0-2.36.107-3.487.308m6.795 2.435a7.5 7.5 0 01-3.308 6.257" />
  </svg>,
]

export default function WhyThisMatters({ content }: WhyThisMattersProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return (
    <section className="bg-white pt-14 pb-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Transition line */}
        <p className="text-base text-gray-500 italic text-center">
          {content.transition}
        </p>

        {/* Section title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 text-center">
          {content.title}
        </h2>

        {/* Section subtitle */}
        <p className="text-lg text-gray-600 mt-3 leading-relaxed text-center">
          {content.subtitle}
        </p>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {content.cards.map((card, index) => {
            const Illustration = CARD_ILLUSTRATIONS[index]
            const isPasskeyCard = index === 2

            return (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 shrink-0">
                    {CARD_ICONS[index]}
                  </div>
                  <h3 className="font-semibold text-gray-900">{card.title}</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed min-h-[4.5rem]">
                  {isPasskeyCard ? (
                    <>
                      {card.description.split('Passkey')[0]}
                      <span
                        className="relative inline-block"
                        onMouseEnter={() => setTooltipOpen(true)}
                        onMouseLeave={() => setTooltipOpen(false)}
                      >
                        <span className="inline-flex items-center gap-0.5 border-b border-dotted border-gray-400 cursor-help font-medium text-gray-900 hover:border-gray-600 transition-colors">
                          Passkey
                          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                        </span>
                        {tooltipOpen && (
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 rounded-lg bg-gray-900 px-4 py-3 text-xs text-gray-200 shadow-xl z-10">
                            <span className="block font-semibold text-white mb-1">
                              {content.passkey.tooltipTitle}
                            </span>
                            {content.passkey.tooltipBody}
                            <span className="block mt-1.5 text-gray-400 text-[10px]">
                              {content.passkey.tooltipRef}
                            </span>
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                          </span>
                        )}
                      </span>
                      {card.description.split('Passkey')[1]}
                    </>
                  ) : (
                    card.description
                  )}
                </p>

                <Illustration />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
