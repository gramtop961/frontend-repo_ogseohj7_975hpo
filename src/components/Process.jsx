const steps = [
  {
    title: 'Discovery',
    desc: 'Understand your scripts, pricing, service areas, and scheduling rules.'
  },
  {
    title: 'Build',
    desc: 'We design your agent flows, connect calendars/CRMs, and train on FAQs.'
  },
  {
    title: 'Go Live',
    desc: 'Number is provisioned, chat widget embedded, and agents begin handling traffic.'
  },
  {
    title: 'Optimize',
    desc: 'Weekly reviews of transcripts, improving routing and upsell playbooks.'
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">From first call to booked job in minutes</h2>
          <p className="mt-3 text-gray-600">A proven implementation playbook tailored for trades.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-500">Step {i + 1}</div>
              <div className="mt-2 text-xl font-semibold text-gray-900">{s.title}</div>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
