import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 w-full">
        <div className="py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            Voice + Chat AI Agents for Craftsman Businesses
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Book more jobs with always-on AI agents
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We design, deploy, and train concierge-quality AI agents that answer calls, quote jobs, and schedule appointments for contractors and local trades.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800 transition-colors">
              Get a custom demo
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50">
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=8" />
              <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=15" />
              <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=23" />
            </div>
            <span>Trusted by electrical, HVAC, and landscaping teams</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center relative">
          <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-orange-400/10 blur-3xl" />
          <div className="relative bg-white/70 backdrop-blur rounded-2xl border border-white/40 shadow-xl p-6 w-full max-w-md">
            <div className="text-sm text-gray-600">24/7 Agent</div>
            <div className="mt-2 text-2xl font-semibold text-gray-900">Meet "Spark" — your on-call coordinator</div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Answers within 2 rings</li>
              <li>• Books jobs directly into your calendar</li>
              <li>• Captures leads from web chat and voicemail</li>
              <li>• Speaks 50+ languages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
