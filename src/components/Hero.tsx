'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface HeroProps {
  content: ContentData['hero']
  locale: Locale
}

const WALLET_REPO_URL = 'https://github.com/TEENet-io/teenet-wallet'
const WALLET_APP_URL = 'https://wallet.teenet.app'

export default function Hero({ content, locale }: HeroProps) {
  function handlePrimaryClick() {
    trackEvent('github_click', { locale, source: 'hero' })
  }

  function handleSecondaryClick() {
    trackEvent('app_click', { locale, source: 'hero' })
  }

  const { nodes } = content.flowDiagram

  return (
    <section
      id="product"
      className="bg-[#0f172a] px-6 overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        {/* Eyebrow */}
        <p className="mb-10 text-xs font-medium uppercase tracking-widest text-slate-500 md:mb-12">
          {content.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="mx-auto max-w-[980px] text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-white"
          style={{ textWrap: 'balance' }}
        >
          {content.headline}
        </h1>

        {/* Flow Diagram */}
        <div className="mx-auto mt-12 flex max-w-[920px] flex-col items-center justify-center gap-4 md:mt-14 md:flex-row md:gap-0">
          {nodes.map((node, i) => {
            const isLast = i === nodes.length - 1
            const isMiddle = i === 1

            let borderColor = 'border-slate-700'
            let bgColor = 'bg-slate-800/70'
            let accentColor = ''
            if (isMiddle) {
              borderColor = 'border-amber-500/40'
              bgColor = 'bg-amber-950/25'
              accentColor = 'text-amber-400'
            } else if (isLast) {
              borderColor = 'border-emerald-500/40'
              bgColor = 'bg-emerald-950/25'
              accentColor = 'text-emerald-400'
            }

            return (
              <div key={i} className="flex flex-col md:flex-row items-center">
                {/* Node card */}
                <div
                  className={`relative ${bgColor} ${borderColor} w-[240px] rounded-2xl border px-5 py-4 text-center backdrop-blur-sm md:w-[220px]`}
                >
                  <p className={`text-sm font-semibold ${accentColor || 'text-white'}`}>
                    {node.title}
                    {isLast && (
                      <svg
                        className="ml-1 inline-block h-3.5 w-3.5 -mt-0.5 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{node.subtitle}</p>
                </div>

                {/* Arrow between nodes */}
                {!isLast && (
                  <>
                    {/* Horizontal arrow — desktop */}
                    <svg
                      className="hidden h-5 w-10 flex-shrink-0 text-slate-500 md:block"
                      viewBox="0 0 40 20"
                      fill="none"
                    >
                      <line x1="0" y1="10" x2="32" y2="10" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M30 4 L38 10 L30 16" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    </svg>
                    {/* Vertical arrow — mobile */}
                    <svg
                      className="block h-7 w-5 text-slate-500 md:hidden"
                      viewBox="0 0 20 32"
                      fill="none"
                    >
                      <line x1="10" y1="0" x2="10" y2="24" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M4 22 L10 30 L16 22" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    </svg>
                  </>
                )}
              </div>
            )
          })}
        </div>

        {/* Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:mt-12">
          {content.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
            >
              <svg
                className="w-3 h-3 text-emerald-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12">
          <a
            href={WALLET_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePrimaryClick}
            className="bg-white text-slate-900 px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
          >
            {content.ctaPrimary}
          </a>
          <a
            href={WALLET_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSecondaryClick}
            className="border border-slate-600 text-slate-300 px-7 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            {content.ctaSecondary}
          </a>
        </div>

        {/* Tagline */}
        <p className="mt-7 text-sm font-medium text-slate-400 md:mt-8">
          {content.tagline}
        </p>
      </div>
    </section>
  )
}
