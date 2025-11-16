export default function Pricing() {
  return (
    <section className="py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start small, scale as you grow.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-gray-600">Starter</div>
            <div className="mt-2 text-3xl font-semibold text-gray-900">$299<span className="text-base font-normal">/mo</span></div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Web chat concierge</li>
              <li>• Lead capture + SMS</li>
              <li>• 1,000 messages</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-sm">
            <div className="text-sm text-gray-600">Growth</div>
            <div className="mt-2 text-3xl font-semibold text-gray-900">$699<span className="text-base font-normal">/mo</span></div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Phone answering agent</li>
              <li>• Calendar booking</li>
              <li>• 3,000 minutes/messages</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-gray-600">Scale</div>
            <div className="mt-2 text-3xl font-semibold text-gray-900">Custom</div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Multi-line IVR</li>
              <li>• CRM + billing integrations</li>
              <li>• Unlimited messages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
