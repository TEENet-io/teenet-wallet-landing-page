import { ContentData } from '@/content/types'

interface RulesAndApprovalsProps {
  content: ContentData['rulesAndApprovals']
}

const LEVEL_STYLES = {
  low: {
    dot: 'bg-green-500',
    bar: 'bg-green-50',
    label: 'text-green-700',
  },
  medium: {
    dot: 'bg-amber-500',
    bar: 'bg-amber-50',
    label: 'text-amber-700',
  },
  high: {
    dot: 'bg-red-500',
    bar: 'bg-red-50',
    label: 'text-red-700',
  },
} as const

export default function RulesAndApprovals({ content }: RulesAndApprovalsProps) {
  return (
    <section id="security" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {content.scenarios.map((scenario, index) => {
            const styles = LEVEL_STYLES[scenario.level]
            return (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <div className={`${styles.bar} px-6 py-3 flex items-center gap-2`}>
                  <span className={`inline-block w-2.5 h-2.5 rounded-full ${styles.dot}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wide ${styles.label}`}>
                    {scenario.level} risk
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900">{scenario.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{scenario.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
