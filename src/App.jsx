import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Features from './components/sections/Features.jsx'
import TrustedBy from './components/sections/TrustedBy.jsx'
import Consultants from './components/sections/Consultants.jsx'
import AdditionalFeatures from './components/sections/AdditionalFeatures.jsx'
import CTA from './components/sections/CTA.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0b16]">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Features />
        <TrustedBy />
        <Consultants />
        <AdditionalFeatures />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
