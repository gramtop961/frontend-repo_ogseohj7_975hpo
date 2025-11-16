const industries = [
  'Electrical', 'Plumbing', 'HVAC', 'Landscaping', 'Painting', 'Carpentry', 'Roofing', 'Flooring'
]

export default function Industries() {
  return (
    <section className="py-20" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900">Built for craftsman companies</h3>
            <p className="mt-3 text-gray-600">From solo contractors to multi-crew ops, our agents adapt to your playbook and tools.</p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-gray-700">
              {industries.map((i) => (
                <li key={i} className="rounded-full border border-gray-200 px-4 py-2 bg-white text-sm">{i}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-600">Outcome</div>
              <div className="mt-2 text-2xl font-semibold text-gray-900">Answer every lead, book more jobs</div>
              <p className="mt-3 text-gray-600">Most trades miss 20-40% of calls. We convert them into scheduled work without adding staff.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-600">Capability</div>
              <div className="mt-2 text-2xl font-semibold text-gray-900">Integrates with your stack</div>
              <p className="mt-3 text-gray-600">Calendar, CRM, forms, and phone systems. We fit your workflow, not the other way around.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
