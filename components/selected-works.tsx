"use client"

import { useState } from "react"

export default function SelectedWorks() {
  const [activeTab, setActiveTab] = useState("websites")

  const websiteProjects = [
    {
      title: "Portfolio Website",
      description: "React + Tailwind CSS",
      details:
        "Personal portfolio showcasing projects and experience. Includes dynamic project grid, contact form via Formspree, and smooth scrolling.",
      year: "2025",
    },
    {
      title: "E-Commerce Store",
      description: "Next.js + Stripe + MongoDB",
      details:
        "Full-stack e-commerce platform with product catalog, shopping cart, payment integration, and order management system.",
      year: "2024",
    },
    {
      title: "Blog Platform",
      description: "React + Firebase",
      details:
        "Content management system with user authentication, rich text editor, and real-time comments. Features SEO optimization.",
      year: "2024",
    },
  ]

  const mobileProjects = [
    {
      title: "Employee Management App",
      description: "React Native + Firebase",
      details:
        "Mobile app for managing employee data on iOS and Android. Features include push notifications, offline sync, and responsive UI.",
      year: "2025",
    },
    {
      title: "Task Dashboard",
      description: "React Native + Redux",
      details:
        "Cross-platform task management app with multiple task components, real-time updates, and advanced user state handling.",
      year: "2025",
    },
    {
      title: "Fitness Tracker",
      description: "React Native + Expo",
      details:
        "Health and fitness tracking mobile app with workout logging, progress charts, and social sharing features.",
      year: "2024",
    },
  ]

  const projectsToShow = activeTab === "websites" ? websiteProjects : mobileProjects

  return (
    <section className="py-24 px-6 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-8 uppercase">SELECTED PROJECTS</h2>

        <div className="flex gap-2 mb-12 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("websites")}
            className={`px-6 py-3 text-sm font-medium transition-all ${
              activeTab === "websites" ? "text-white border-b-2 border-purple-500" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-6 py-3 text-sm font-medium transition-all ${
              activeTab === "mobile" ? "text-white border-b-2 border-purple-500" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Mobile Apps
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsToShow.map((work, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 group-hover:from-gray-700 group-hover:to-gray-800 transition"></div>
              <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{work.description}</p>
              <p className="text-gray-500 text-xs mb-3 leading-relaxed">{work.details}</p>
              <p className="text-gray-600 text-xs">— {work.year}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">open for exciting opportunities :)</p>
        </div>
      </div>
    </section>
  )
}
