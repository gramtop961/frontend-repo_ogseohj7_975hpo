export default function Logos() {
  const logos = [
    { name: 'Bosch', w: 72 },
    { name: 'Makita', w: 72 },
    { name: 'DeWalt', w: 72 },
    { name: 'Hilti', w: 64 },
    { name: 'Festool', w: 72 },
  ]
  return (
    <section className="py-12" id="logos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-8 text-gray-500">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              <div className="h-6 w-auto font-semibold tracking-wider text-gray-400" style={{width: l.w}}>
                {l.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
