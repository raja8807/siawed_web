import React from "react";
import styles from "./Hero.module.scss";

import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import { Trophy } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.hero}>
        <div className={styles.hero__left} data-aos="fade-right">
          <div className={styles.hero__pill}>
            <span className={styles['hero__pill-dot']}></span> Est. 2013 &#183; Chennai, India
          </div>
          <h1 className={`${styles.hero__h1} ${FONTS.font2}`}>Empowering<br/><em>Women</em><br/>Entrepreneurs.</h1>
          <p className={styles.hero__sub}>
            SIAWED connects women-led enterprises, rural artisans, SHGs and social enterprises with corporates, institutions and consumers &#8212; creating lasting economic freedom.
          </p>
          <div className={styles.hero__ctas}>
            <CustomButton href="/membership" variant="orange" size="lg">Join SIAWED</CustomButton>
            <CustomButton href="/wenba" variant="outline-white" size="lg">Register on WENBA &#8594;</CustomButton>
          </div>
          
          <div className={styles.hero__stats}>
            <div className={styles['hero-stat']}>
              <span className={`${styles['hero-stat__number']} ${FONTS.font2}`}>14+</span>
              <span className={styles['hero-stat__label']}>Years Active</span>
            </div>
            <div className={styles['hero-stat']}>
              <span className={`${styles['hero-stat__number']} ${FONTS.font2}`}>3,500+</span>
              <span className={styles['hero-stat__label']}>Volunteers</span>
            </div>
            <div className={styles['hero-stat']}>
              <span className={`${styles['hero-stat__number']} ${FONTS.font2}`}>1,000+</span>
              <span className={styles['hero-stat__label']}>Beneficiaries</span>
            </div>
            <div className={styles['hero-stat']}>
              <span className={`${styles['hero-stat__number']} ${FONTS.font2}`}>400+</span>
              <span className={styles['hero-stat__label']}>Entrepreneurs</span>
            </div>
          </div>
        </div>

        <div className={styles.hero__right}>
          <Image src="/hero/hero-img-lg.jpeg" alt="Women Entrepreneurs smiling" loading="lazy" className={styles.hero__photo}/>
          <div className={styles.hero__overlay}></div>
          
          <div className={styles.hero__badge} data-aos="fade-up" data-aos-delay="300">
            <div className={styles['hero-badge__icon']}><Trophy /></div>
            <div className={styles['hero__badge-content']}>
              <span className={styles['hero-badge__title']}>500+ Women Artisans</span>
              <span className={styles['hero-badge__sub']}>Empanelled on WENBA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
