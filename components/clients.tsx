export default function Clients() {
  const clients = [
    { name: "DZRPT", icon: "🎭" },
    { name: "Haguenau", icon: "🏰" },
    { name: "Solarterra", icon: "🌿" },
    { name: "Picasso", icon: "🎨" },
    { name: "FBC", icon: "📱" },
  ]

  return (
    <section className="py-16 px-6 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 mb-8">trusted by 10+ clients</p>

        <div className="flex flex-wrap gap-8 md:gap-16 items-center">
          {clients.map((client, idx) => (
            <div key={idx} className="text-gray-600 hover:text-gray-300 transition">
              <p className="font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
