import React from "react";
import styles from "./Impact.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";

const ImpactSectionx = () => {
  return (
    <div className={styles.impactContainer}>
      <SectionWrapper id="impact" bgColor="charcoal" aos="fade-up" className={styles['impact-wrapper']}>
        <div className={styles['impact-grid']}>
          <div className={styles['impact-cell']}>
            <span className={`${styles['impact-cell__number']} ${FONTS.font2}`}>400+</span>
            <span className={styles['impact-cell__label']}>Women Entrepreneurs</span>
          </div>
          <div className={styles['impact-cell']}>
            <span className={`${styles['impact-cell__number']} ${FONTS.font2}`}>150+</span>
            <span className={styles['impact-cell__label']}>Vendor Partners</span>
          </div>
          <div className={styles['impact-cell']}>
            <span className={`${styles['impact-cell__number']} ${FONTS.font2}`}>50+</span>
            <span className={styles['impact-cell__label']}>Training Programs</span>
          </div>
          <div className={styles['impact-cell']}>
            <span className={`${styles['impact-cell__number']} ${FONTS.font2}`}>1,000+</span>
            <span className={styles['impact-cell__label']}>Beneficiaries</span>
          </div>
          <div className={styles['impact-cell']}>
            <span className={`${styles['impact-cell__number']} ${FONTS.font2}`}>3,500+</span>
            <span className={styles['impact-cell__label']}>Active Volunteers</span>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ImpactSectionx;
