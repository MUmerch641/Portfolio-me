export default function Process() {
  const processSteps = [
    {
      title: "Frontend Expertise",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Integration",
        "Animation & Interactions",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "API Design",
        "Authentication",
        "Database Architecture",
        "Error Handling",
        "Security Best Practices",
      ],
    },
    {
      title: "Full-Stack Integration",
      items: [
        "State Management",
        "API Integration",
        "Deployment",
        "Vercel & Render",
        "CI/CD Pipelines",
        "Testing",
        "Debugging",
        "Performance Tuning",
      ],
    },
    {
      title: "Additional Skills",
      items: [
        "UI/UX Design Principles",
        "Animation Integration",
        "Form Validation",
        "Data Fetching",
        "Git & Version Control",
        "Problem Solving",
        "Code Documentation",
        "Collaborative Development",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-16 uppercase">MY EXPERTISE & SKILLS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {processSteps.map((step, idx) => (
            <div key={idx}>
              <h3 className="text-2xl md:text-3xl font-light italic text-white mb-8">{step.title}</h3>
              <div className="flex flex-wrap gap-3">
                {step.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1.5 bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-gray-300 text-sm rounded border border-gray-800 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
