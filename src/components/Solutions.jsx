import { Check } from 'lucide-react'

const items = [
  {
    title: 'Call Answering Agent',
    desc: 'Greets callers, qualifies jobs, provides pricing ranges, and schedules appointments in your calendar.',
    points: ['Local number + IVR', 'Job qualification tree', 'Calendar integration', 'CRM logging'],
  },
  {
    title: 'Website Chat Concierge',
    desc: 'Turns web visitors into booked jobs with proactive chat, lead capture, and follow-ups by SMS.',
    points: ['Proactive popover', 'Lead capture + SMS', 'FAQ + knowledge base', 'Pipeline handoff'],
  },
  {
    title: 'Quote & Follow-up Bot',
    desc: 'Sends instant quotes from templates, follows up automatically, and closes more deals.',
    points: ['Template library', 'Automated follow-up', 'E-sign approval', 'Payment link'],
  },
]

export default function Solutions() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Purpose-built AI agents for trades</h2>
          <p className="mt-3 text-gray-600">Plug-and-play agents tailored for electricians, plumbers, HVAC, landscapers, and more.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-xl font-semibold text-gray-900">{item.title}</div>
              <p className="mt-2 text-gray-600">{item.desc}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {item.points.map((p) => (
                  <li key={p} className="flex items-center gap-2"><Check size={16} className="text-green-600" /> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
