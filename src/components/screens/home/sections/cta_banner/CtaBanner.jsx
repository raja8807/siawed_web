import React from "react";
import styles from "./CtaBanner.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";

const CtaBannerSection = () => {
  return (
    <div className={styles.ctaBannerContainer}>
      <SectionWrapper id="cta-banner" bgColor="transparent" aos="fade-up">
        <div className={styles['cta-banner']}>
          <div className={styles['cta-banner__inner']}>
            <div>
              <h2 className={`${styles['cta-banner__heading']} ${FONTS.font2}`}>Ready to <em>Empower</em><br/>or Be Empowered?</h2>
              <p className={styles['cta-banner__sub']}>Whether you&#39;re a woman entrepreneur ready to grow, or a corporate seeking diverse vendors &#8212; there&#39;s a place for you in the SIAWED ecosystem.</p>
            </div>
            <div className={styles['cta-banner__btns']}>
              <CustomButton href="/membership" variant="orange" size="lg">Join SIAWED &#8594;</CustomButton>
              <CustomButton href="/corporate" variant="outline-white" size="lg">Corporate Catalogue</CustomButton>
              <CustomButton href="/donate" variant="outline-white">&#9829; Donate</CustomButton>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CtaBannerSection;
