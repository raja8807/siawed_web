import React from "react";
import HeroSection from "./sections/hero/Hero";
// import ImpactSection from "./sections/impact/Impact";
import AboutSection from "./sections/about/About";
import WhatWeDoSection from "./sections/what_we_do/WhatWeDo";
import FounderSpotlightSection from "./sections/founder_spotlight/FounderSpotlight";
import WenbaSection from "./sections/wenba_teaser/Wenba";
import MembershipSection from "./sections/membership/Membership";

import CtaBannerSection from "./sections/cta_banner/CtaBanner";
import ImpactSectionx from "./sections/impact/impact";
import TestimonialsSection from "./sections/testimonials/testimonials";

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
