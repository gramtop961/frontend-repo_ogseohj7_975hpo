import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Solutions />
        <Industries />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span>Flames AI Agency</span>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
