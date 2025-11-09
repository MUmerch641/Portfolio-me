export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-16 uppercase">WHY HIRE ME?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Strong Technical Foundation</h3>
            <p className="text-gray-400 leading-relaxed">
              Deep expertise in React, Node.js, and MongoDB with a focus on clean, maintainable code and modern
              JavaScript practices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Full-Stack Capability</h3>
            <p className="text-gray-400 leading-relaxed">
              Build complete solutions from responsive frontends to robust backends. Handle everything from UI/UX design
              integration to database architecture.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Performance & Quality Focused</h3>
            <p className="text-gray-400 leading-relaxed">
              Delivering optimized, scalable applications with smooth user experiences. Proven deployment experience
              with Vercel and Render.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
