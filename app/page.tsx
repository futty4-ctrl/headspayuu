import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
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
      <About />
      <MenuSection />
      <Evidence />
      <Faq />
      <AccessMap />
      <CategoryLinks />
      <SiteFooter />
    </main>
  )
}
