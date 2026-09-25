import { Finishes } from "@/components/finishes"
import { Hero } from "@/components/hero"
import { Photos } from "@/components/photos"
import { Process } from "@/components/process"
import { QuoteForm } from "@/components/quote-form"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Finishes />
        <Photos />
        <Process />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  )
}
