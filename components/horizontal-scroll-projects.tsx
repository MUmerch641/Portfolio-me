"use client"

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("websites");

 const websiteProjects = [
  {
    title: "Dreams Clothing – E‑commerce Website",
    description: "Full-stack online store",
    details: "Built a responsive e‑commerce platform featuring a product catalogue, shopping cart, payment gateway integration, order tracking, and user accounts.",
    year: "2025",
    image: "/image.png",
    link: "https://dreamsclothing.store/"
  },
  {
    title: "Pakhims – Hospital Management System",
    description: "Web‑based healthcare information system",
    details: "Comprehensive hospital management system including patient registration, doctor scheduling, billing & insurance integration, pharmacy & lab management, and multi-branch support.",
    year: "2025",
    image: "/image%20copy.png",
    link: "https://pakhims.com/"
  },
  {
    title: "Pakhims – Professional Profile / Portfolio",
    description: "Personal portfolio website",
    details: "Portfolio-style site highlighting services, case studies, team, and contact information with clean design and user-friendly navigation.",
    year: "2025",
    image: "/image%20copy%202.png",
    link: "https://profile.pakhims.com/"
  },
  {
    title: "Upward Marketing – Agency Website",
    description: "Digital agency site",
    details: "Corporate website featuring service overview, client showcase, blog section, and lead-generation contact forms. Optimized for performance and SEO.",
    year: "2024",
    image: "/image%20copy%203.png",
    link: "https://upwardmarketing.co.za/"
  },
  {
    title: "Africa Homeland Safaris – Travel & Adventure",
    description: "Tourism experience website",
    details: "Website showcasing mobile camping safari packages, interactive gallery, itinerary breakdowns, and booking integration. Focused on immersive imagery and smooth UX.",
    year: "2024",
    image: "/image%20copy%204.png",
    link: "http://homelandsafaris.com/"
  },

  {
    title: "Africa Homeland Safaris 2.0 – second Travel Site",
    description: "Updated tourism experience website",
    details: "After liking for the first website showcasing mobile camping safari packages, interactive gallery, itinerary breakdowns, and booking integration. Focused on immersive imagery and smooth UX.",
    year: "2024",
    image: "/image%20copy%209.png",
    link: "http://homelandsafaris.com/"
  },
  {
    title: "Esabe Beauty – Online Store",
    description: "Cosmetics and beauty products e-commerce",
    details: "Developed a visually appealing and responsive e-commerce site for Esabe Beauty, featuring product catalog, shopping cart, secure checkout, and customer reviews.",
    year: "2024",
    image: "/image%20copy%205.png",
    link: "http://esabebeauty.co.za/"
  },
  {
    title: "PR Construction Project – Company Website",
    description: "Construction company corporate site",
    details: "Created a professional website for PR Construction showcasing company services, portfolio of projects, team members, and contact functionality for leads.",
    year: "2024",
    image: "/image%20copy%206.png",
    link: "https://prconstructionproject.co.za/"
  },
  {
    title: "Artistic Home Designs – Interior Design Website",
    description: "Creative interior design portfolio",
    details: "Designed a modern website for Artistic Home Designs featuring project galleries, client testimonials, service offerings, and interactive portfolio navigation.",
    year: "2024",
    image: "/image%20copy%207.png",
    link: "https://artistic-home-designs.vercel.app/"
  },
  {
    title: "Virtual Try‑On (VTO) Demo",
    description: "Augmented‑reality web application",
    details: "Web application enabling users to virtually try on apparel or accessories using webcam overlay. Built with WebGL/Web AR for an interactive experience.",
    year: "2025",
    image: "/image%20copy%208.png",
    link: "http://vto.vercel.app/"
  },
];




  const mobileProjects = [
    {
      title: "Employee Management App",
      description: "React Native + Firebase",
      details: "Mobile app for managing employee data on iOS and Android. Features include push notifications, offline sync, and responsive UI.",
      year: "2025",
      image: "bg-gradient-to-br from-blue-600 to-cyan-600",
      link: "#"
    },
    {
      title: "Task Dashboard",
      description: "React Native + Redux",
      details: "Cross-platform task management app with multiple task components, real-time updates, and advanced user state handling.",
      year: "2025",
      image: "bg-gradient-to-br from-amber-600 to-yellow-600",
      link: "#"
    },
    {
      title: "Fitness Tracker",
      description: "React Native + Expo",
      details: "Health and fitness tracking mobile app with workout logging, progress charts, and social sharing features.",
      year: "2024",
      image: "bg-gradient-to-br from-emerald-600 to-green-600",
      link: "#"
    },
    {
      title: "Food Delivery App",
      description: "React Native + Stripe",
      details: "Complete food delivery solution with restaurant listings, real-time order tracking, and secure payment processing.",
      year: "2024",
      image: "bg-gradient-to-br from-red-600 to-orange-600",
      link: "#"
    },
    {
      title: "Music Player",
      description: "React Native + Audio API",
      details: "Feature-rich music streaming app with playlists, offline mode, and personalized recommendations.",
      year: "2023",
      image: "bg-gradient-to-br from-violet-600 to-purple-600",
      link: "#"
    },
  ];

  const projectsToShow = activeTab === "websites" ? websiteProjects : mobileProjects;

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!sectionRef.current || !triggerRef.current) return;
      
      // Only enable horizontal scroll on desktop
      if (window.innerWidth < 768) return;
      
      const horizontalSection = sectionRef.current;
      const scrollWidth = horizontalSection.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollDistance = scrollWidth - windowWidth;

      // Create the horizontal scroll with extended end point
      gsap.to(horizontalSection, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${scrollDistance + windowWidth * 2}`, // Extended scroll area
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: 'horizontal-projects',
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.id === 'horizontal-projects') {
          t.kill();
        }
      });
    };
  }, [activeTab]);

  return (
    <div ref={triggerRef} className="relative bg-black">
      <div className="md:h-screen flex flex-col justify-center py-12 md:py-0">
        {/* Header */}
        <div className="py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-semibold text-gray-500 mb-6 sm:mb-8 uppercase tracking-wider">SELECTED PROJECTS</h2>

            <div className="flex gap-2 mb-6 border-b border-gray-800">
              <button
                onClick={() => setActiveTab("websites")}
                className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "websites" ? "text-white border-b-2 border-purple-500" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Websites
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "mobile" ? "text-white border-b-2 border-purple-500" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Mobile Apps
              </button>
            </div>
            
            <p className="text-gray-600 text-xs hidden md:block">← Scroll to see all projects →</p>
            <p className="text-gray-600 text-xs md:hidden">↓ Scroll to see all projects ↓</p>
          </div>
        </div>

        {/* Horizontal Scroll Container - Desktop / Vertical - Mobile */}
        <div className="overflow-hidden">
          <div
            ref={sectionRef}
            className="flex md:flex-row flex-col gap-6 sm:gap-8 px-4 sm:px-6 py-4 sm:py-8 will-change-transform"
          >
            {projectsToShow.map((work, idx) => (
              <a 
                key={idx} 
                href={work.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-shrink-0 w-full md:w-[450px] group cursor-pointer block"
              >
                <div 
                  className={`aspect-[4/3] ${work.image.startsWith('/') ? '' : work.image} rounded-lg mb-4 sm:mb-6 overflow-hidden relative transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl`}
                  style={work.image.startsWith('/') ? { backgroundImage: `url(${work.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                >
                  {/* Project number indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl sm:text-9xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                        View Project
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">{work.title}</h3>
                <p className="text-gray-400 text-sm mb-2 font-medium">{work.description}</p>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed line-clamp-2">{work.details}</p>
                <p className="text-gray-600 text-xs">— {work.year}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
