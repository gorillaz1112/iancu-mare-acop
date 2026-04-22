import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { ServicesGrid } from "@/components/sections/services-grid"
import { Manifesto } from "@/components/sections/manifesto"
import { About } from "@/components/sections/about"
import { Process } from "@/components/sections/process"
import { Guarantee } from "@/components/sections/guarantee"
import { ServiceAreas } from "@/components/sections/service-areas"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Faq } from "@/components/sections/faq"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Manifesto />
      <About />
      <Process />
      <Guarantee />
      <ServiceAreas />
      <CtaBanner />
      <Faq />
    </>
  )
}
