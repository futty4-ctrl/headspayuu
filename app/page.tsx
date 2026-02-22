import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { InformationCarousel } from "@/components/information-carousel"
import { About } from "@/components/about"
import { Essences } from "@/components/essences"
import { MenuSection } from "@/components/menu-section"
import { Evidence } from "@/components/evidence"
import { Faq } from "@/components/faq"
import { AccessMap } from "@/components/access-map"
import { CategoryLinks } from "@/components/category-links"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <InformationCarousel />
      <About />
      <Essences />
      <MenuSection />
      <Evidence />
      <Faq />
      <AccessMap />
      <CategoryLinks />
      <SiteFooter />
    </main>
  )
}
