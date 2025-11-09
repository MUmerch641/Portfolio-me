export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="italic text-gray-400">Building</span> Modern Web & Mobile Apps with Clean Code
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer specializing in React, Node.js, and MongoDB. Creating responsive, performant applications
          with beautiful UI and solid architecture.
        </p>
      </div>
    </section>
  )
}
