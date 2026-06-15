import React from "react";
import BannerSection from "./sections/banner/banner";
import AboutSection from "./sections/about/about";
import VisionMissionSection from "./sections/vision_mission/vision_mission";
import ImpactSection from "./sections/impact/impact";
import WhyChooseUsSection from "./sections/why_choose_us/why_choose_us";
import FocusedActionsSection from "./sections/focused_actions/focused_actions";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <VisionMissionSection />
      <ImpactSection />
      <FocusedActionsSection />
      <WhyChooseUsSection />
    </>
  );
};

export default HomeScreen;
