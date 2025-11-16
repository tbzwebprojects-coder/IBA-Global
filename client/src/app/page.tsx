'use client'

import Hero from '@/components/home/Hero'
import QuoteCalculator from '@/components/quote/QuoteCalculator'
import Services from '@/components/home/Services'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ServiceArea from '@/components/home/ServiceArea'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteCalculator />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <Testimonials />
      <CTASection />
    </>
  )
}
