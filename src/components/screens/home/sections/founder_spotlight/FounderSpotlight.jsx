import React from "react";
import styles from "./FounderSpotlight.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";

const FounderSpotlightSection = () => {
  return (
    <div className={styles.founderContainer}>
      <SectionWrapper id="founder" bgColor="parchment" aos="fade-up">
        <div className={styles.founder__grid}>
          <div className={styles['founder__img-wrap']}>
            <img src="https://siawed-demo.vercel.app/founder.webp" alt="Ms T Vanadhi Devi &#8211; Founder &amp; President, SIAWED" loading="lazy" />
            <blockquote className={styles.founder__quote}>
              <p>Empowering women to lead, build, and scale their dreams &#8212; one enterprise at a time.</p>
              <cite>&#8212; Ms T Vanadhi Devi, Founder &amp; President, SIAWED</cite>
            </blockquote>
          </div>

          <div className="founder__content">
            <p className="eyebrow eyebrow-blue">Founder Spotlight</p>
            <h2 className={`section-heading ${FONTS.font2}`}>14 Years Creating <em className="em-blue">Opportunity, Dignity</em> &amp; Freedom</h2>
            
            <p className="lead">
              Led by a first-generation entrepreneur with over 25 years of business leadership experience, SIAWED&#39;s founder has dedicated her life to creating economic freedom for women across India &#8212; shaping SIAWED into a thriving ecosystem of thousands of entrepreneurs.
            </p>

            <ol className={styles.timeline} aria-label="Founder milestones">
              <li className={styles['timeline-item']}>
                <div className={styles['timeline-item__dot']} aria-hidden="true"></div>
                <div>
                  <span className={styles['timeline-item__title']}>Founded SIAWED in 2013</span>
                  <span className={styles['timeline-item__desc']}>Started with a mission to empower women through entrepreneurship in Chennai</span>
                </div>
              </li>
              <li className={styles['timeline-item']}>
                <div className={styles['timeline-item__dot']} aria-hidden="true"></div>
                <div>
                  <span className={styles['timeline-item__title']}>Launched WENBA Marketplace</span>
                  <span className={styles['timeline-item__desc']}>Created India&#39;s dedicated platform for women-owned native businesses</span>
                </div>
              </li>
              <li className={styles['timeline-item']}>
                <div className={styles['timeline-item__dot']} aria-hidden="true"></div>
                <div>
                  <span className={styles['timeline-item__title']}>1,000+ Beneficiaries Today</span>
                  <span className={styles['timeline-item__desc']}>Network spanning Chennai and beyond, connecting women to corporate buyers</span>
                </div>
              </li>
            </ol>

            <div style={{ marginTop: '36px' }}>
              <CustomButton href="/about-founder" variant="blue" size="lg">Read Full Story &#8594;</CustomButton>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FounderSpotlightSection;
