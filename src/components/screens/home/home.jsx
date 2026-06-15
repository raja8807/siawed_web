import React from "react";
import BannerSection from "./sections/banner/banner";
import FounderSpotlightSection from "./sections/founder_spotlight/founder_spotlight";
import AboutSection from "./sections/about/about";
import VisionMissionSection from "./sections/vision_mission/vision_mission";
import ImpactSection from "./sections/impact/impact";
import FocusedActionsSection from "./sections/focused_actions/focused_actions";
import MembershipSection from "./sections/membership/membership";
import WhyChooseUsSection from "./sections/why_choose_us/why_choose_us";
import TestimonialsSection from "./sections/testimonials/testimonials";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <FounderSpotlightSection />
      <AboutSection />
      <VisionMissionSection />
      <ImpactSection />
      <FocusedActionsSection />
      <MembershipSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </>
  );
};

export default HomeScreen;
