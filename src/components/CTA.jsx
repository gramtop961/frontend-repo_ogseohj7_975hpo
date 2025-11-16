import { useState } from 'react'

export default function CTA() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    setStatus('Sending...')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-20 bg-gray-50" id="cta">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">Get a custom demo</h3>
          <p className="mt-2 text-gray-600">Tell us about your company and we’ll tailor an agent to your workflow.</p>
          <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
            <input name="email" type="email" required placeholder="Work email" className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
            <input name="company" placeholder="Company" className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
            <input name="industry" placeholder="Industry (e.g., HVAC)" className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
            <textarea name="notes" placeholder="What problems should we solve first?" className="sm:col-span-2 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
            <button className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800 transition-colors">Request demo</button>
          </form>
          {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
        </div>
      </div>
    </section>
  )
}
