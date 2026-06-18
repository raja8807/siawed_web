import React from "react";
import BannerSection from "./sections/banner/banner";
import FounderSpotlightSection from "./sections/founder_spotlight/founder_spotlight";
import AboutSection from "./sections/about/about";
import VisionMissionSection from "./sections/vision_mission/vision_mission";
import WhatWeDoSection from "./sections/what_we_do/what_we_do";
import ImpactSection from "./sections/impact/impact";
import CredibilityBanner from "./sections/credibility_banner/credibility_banner";
import WhyChooseUsSection from "./sections/why_choose_us/why_choose_us";
import ServicesGridSection from "./sections/services_grid/services_grid";
import FocusedActionsSection from "./sections/focused_actions/focused_actions";
import MembershipSection from "./sections/membership/membership";
import TestimonialsSection from "./sections/testimonials/testimonials";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <FounderSpotlightSection />
      <AboutSection />
      <VisionMissionSection />
      <WhatWeDoSection />
      <ServicesGridSection />
      <WhyChooseUsSection />
      <ImpactSection />
      <CredibilityBanner />
      <FocusedActionsSection /> {/* This acts as the WENBA Teaser now */}
      <MembershipSection />
      <TestimonialsSection />
    </>
  );
};

export default HomeScreen;
