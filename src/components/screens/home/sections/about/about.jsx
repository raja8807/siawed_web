import React from "react";
import styles from "./About.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import { RocketTakeoff, People, Tree, Megaphone } from "react-bootstrap-icons";

const AboutSection = () => {
  return (
    <div className={styles.aboutContainer}>
      <SectionWrapper id="about" bgColor="white" aos="fade-up">
        <div className={styles.about__grid}>
          {/* Left Col: Overlapping Images */}
          <div className={styles.about__images}>
            <img src="https://siawed-demo.vercel.app/images/about/women-meeting.jpg" alt="Women collaborating" loading="lazy" className={styles['about__img-main']}/>
            <img src="https://siawed-demo.vercel.app/images/about/women-workshop.jpg" alt="Workshop session" loading="lazy" className={styles['about__img-sec']}/>
            <div className={styles.about__stamp}>
              <span className={styles['about__stamp-num']}>14</span>
              <span className={styles['about__stamp-lbl']}>Years of Impact</span>
            </div>
          </div>

          {/* Right Col: Text & Pillars */}
          <div className={styles.about__content}>
            <p className="eyebrow eyebrow-blue">About SIAWED</p>
            <h2 className={`section-heading ${FONTS.font2}`}>Empowering Women Through <em className="em-blue">Entrepreneurship</em></h2>
            <p className="lead">
              Southern Industrial Academy for Women Entrepreneurs Development (SIAWED) is a not-for-profit organisation dedicated to empowering women through entrepreneurship, skill development, leadership and economic opportunities across India.
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillar__icon}><RocketTakeoff /></div>
                <div>
                  <h4 className={`${styles.pillar__title} ${FONTS.font2}`}>Enterprise Support</h4>
                  <p className={styles.pillar__desc}>Training, mentorship &amp; market access</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillar__icon}><People /></div>
                <div>
                  <h4 className={`${styles.pillar__title} ${FONTS.font2}`}>Corporate Connect</h4>
                  <p className={styles.pillar__desc}>Linking women-owned businesses to buyers</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillar__icon}><Tree /></div>
                <div>
                  <h4 className={`${styles.pillar__title} ${FONTS.font2}`}>Community Growth</h4>
                  <p className={styles.pillar__desc}>SHG support &amp; artisan uplift</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillar__icon}><Megaphone /></div>
                <div>
                  <h4 className={`${styles.pillar__title} ${FONTS.font2}`}>Advocacy &amp; Policy</h4>
                  <p className={styles.pillar__desc}>Human rights &amp; women&#39;s dignity</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '36px' }}>
              <CustomButton href="/about" variant="blue" size="lg">Read Our Story &#8594;</CustomButton>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutSection;
