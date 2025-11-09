"use client"

import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import HeroScroll from "@/components/hero-scroll"
import AnimatedHand from "@/components/animated-hand"
import Clients from "@/components/clients"
import Process from "@/components/process"
import WhyChooseUs from "@/components/why-choose-us"
import HorizontalScrollProjects from "@/components/horizontal-scroll-projects"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedHand />
      <Header />
      <HeroScroll />
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Clients />
        <Process />
      </section>
      <section id="why-hire">
        <WhyChooseUs />
      </section>
      <section id="projects">
        <HorizontalScrollProjects />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  )
}
