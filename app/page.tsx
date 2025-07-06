import Camp from "@/components/Camp";
import FAQSection from "@/components/FAQ";

import Features from "@/components/Features";
import PinterestGallery from "@/components/Gellary";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import PricingSection from "@/components/Pricing";
import StatsSection from "@/components/Stat";
import TestimonialsSection from "@/components/Testimonials";
import VideoG from "@/components/VideoGellary";
import WhatWeCare from "@/components/WhatWeCareAbout";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection/>
      <Guide />
      <Features />
      <WhatWeCare/>
      <PinterestGallery />
      <PricingSection/>
      <VideoG/>
      <FAQSection/>
      <GetApp />
    </>
  )
}
