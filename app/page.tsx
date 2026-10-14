import { AboutSection } from '@/components/portfolio/about-section'
import { CompetenciesSection } from '@/components/portfolio/competencies-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { HeroSection } from '@/components/portfolio/hero-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'
import { VeilleSection } from '@/components/portfolio/veille-section'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Aller au contenu
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CompetenciesSection />
        <VeilleSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
