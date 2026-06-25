import React from "react";
import HeroSection from "./sections/hero/Hero";
import ImpactSectionx from "./sections/impact/impact";
import AboutSection from "./sections/about/about";
import WhatWeDoSection from "./sections/what_we_do/WhatWeDo";
import FounderSpotlightSection from "./sections/founder_spotlight/FounderSpotlight";
import WenbaSection from "./sections/wenba_teaser/Wenba";
import MembershipSection from "./sections/membership/membership";
import TestimonialsSection from "./sections/testimonials/testimonials";
import CtaBannerSection from "./sections/cta_banner/CtaBanner";
// import ImpactSection from "./sections/impact/Impact";


const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <ImpactSectionx />
      <AboutSection />
      <WhatWeDoSection />
      <FounderSpotlightSection />
      <WenbaSection />
      <MembershipSection />
      <TestimonialsSection />
      <CtaBannerSection />
    </>
  );
};

export default HomeScreen;
