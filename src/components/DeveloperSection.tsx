import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface DeveloperSectionProps {
  content: ContentData['developerSection']
  locale: Locale
}

const CODE_SNIPPET = `import { TEENetWallet } from '@teenet/sdk'

const wallet = await TEENetWallet.create({
  chain: 'ethereum',
  rules: {
    transferThreshold: '0.1 ETH',
    requireApproval: true,
  }
})`

export default function DeveloperSection({ content, locale }: DeveloperSectionProps) {
  function handlePrimaryClick() {
    trackEvent('developer_cta_primary', { locale })
  }

  function handleSecondaryClick() {
    trackEvent('developer_cta_secondary', { locale })
  }

  return (
    <section id="developers" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + CTAs */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {content.title}
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
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
          </div>

          {/* Right: Code Snippet */}
          <div>
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-green-400 whitespace-pre">{CODE_SNIPPET}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
