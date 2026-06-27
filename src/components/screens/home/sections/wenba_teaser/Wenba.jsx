import React from "react";
import styles from "./Wenba.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";

const WenbaSection = () => {
  return (
    <div className={styles.wenbaContainer}>
      <SectionWrapper id="wenba" bgColor="charcoal" aos="fade-up">
        <div className={styles.wenbaTop}>
          {/* Left: WENBA brand + info */}
          <div>
            <div
              className={styles.wenbaBrandCard}
              role="img"
              aria-label="WENBA - Women Entrepreneurs Native Business Association"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                aria-label="WENBA Logo"
              >
                <defs>
                  <linearGradient id="wg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22B8A8" />
                    <stop offset="100%" stopColor="#0D7A6E" />
                  </linearGradient>
                  <linearGradient id="wg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#48CEBC" />
                    <stop offset="100%" stopColor="#1BA090" />
                  </linearGradient>
                  <linearGradient id="wg3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9AE8DF" />
                    <stop offset="100%" stopColor="#66D8CC" />
                  </linearGradient>
                </defs>
                <path
                  d="M120 168 C82 134,20 122,2 146 C22 160,76 165,120 168Z"
                  fill="url(#wg3)"
                />
                <path
                  d="M120 168 C158 134,220 122,238 146 C218 160,164 165,120 168Z"
                  fill="url(#wg3)"
                />
                <path
                  d="M120 168 C95 122,50 100,36 122 C56 140,92 156,120 168Z"
                  fill="url(#wg2)"
                />
                <path
                  d="M120 168 C145 122,190 100,204 122 C184 140,148 156,120 168Z"
                  fill="url(#wg2)"
                />
                <path
                  d="M120 168 C96 96,98 36,120 12 C142 36,144 96,120 168Z"
                  fill="url(#wg1)"
                />
                <circle cx="68" cy="84" r="10" fill="#CC2222" />
                <path
                  d="M68 94 L68 124 M68 106 L50 94 M68 106 L86 94 M68 124 L58 144 M68 124 L78 144"
                  stroke="#0D7A6E"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="120" cy="56" r="13" fill="#CC2222" />
                <path
                  d="M120 69 L120 108 M120 84 L96 66 M120 84 L144 66 M120 108 L106 132 M120 108 L134 132"
                  stroke="#0D7A6E"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="172" cy="84" r="10" fill="#CC2222" />
                <path
                  d="M172 94 L172 124 M172 106 L154 94 M172 106 L190 94 M172 124 L162 144 M172 124 L182 144"
                  stroke="#0D7A6E"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <text
                  x="120"
                  y="196"
                  fontFamily="Georgia,'Times New Roman',serif"
                  fontSize="34"
                  fontWeight="800"
                  fill="#CC2222"
                  textAnchor="middle"
                  letterSpacing="7"
                >
                  WENBA
                </text>
                <text
                  x="120"
                  y="220"
                  fontFamily="Arial,sans-serif"
                  fontSize="13"
                  fontWeight="600"
                  fill="#0D7A6E"
                  textAnchor="middle"
                >
                  WE make IT Happen!
                </text>
              </svg>
              <div>
                <span className={styles.wenbaBrandCardPowered}>
                  Powered by SIAWED
                </span>
                <span className={styles.wenbaBrandCardName}>
                  Women Entrepreneurs
                  <br />
                  Native Business Association
                </span>
              </div>
            </div>

            <p className="eyebrow eyebrow-teal">Discover WENBA</p>
            <h2 className={`section-heading heading-inv ${FONTS.font2}`}>
              The Native Business <em className="em-teal">Marketplace</em>
            </h2>
            <p className="lead lead-inv">
              WENBA is SIAWED&#39;s dedicated platform connecting women
              entrepreneurs, rural artisans, and SHGs directly with consumers
              and corporate buyers across India.
            </p>
            {/* 
            <div className={styles.wenbaCats} role="group" aria-label="Filter by category">
              <button className={`${styles.wenbaCat} ${styles.isActive}`}>All</button>
              <button className={styles.wenbaCat}>Handicrafts</button>
              <button className={styles.wenbaCat}>Organic Foods</button>
              <button className={styles.wenbaCat}>Jewellery</button>
              <button className={styles.wenbaCat}>Textiles</button>
              <button className={styles.wenbaCat}>Home Decor</button>
            </div> */}
          </div>

          {/* Right: CTAs + stats */}
          <div className={styles.wenbaRight}>
            <div
              className={styles.ctaGroup}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CustomButton href="/wenba#register" variant="teal" size="lg">
                Register as Vendor
              </CustomButton>
              &nbsp; &nbsp;
              <CustomButton
                href="/wenba#procurement"
                variant="outline-white"
                size="lg"
              >
                Corporate Procurement &#8594;
              </CustomButton>
            </div>
            <div
              className={styles.wenbaStats}
              role="list"
              aria-label="WENBA statistics"
            >
              <div role="listitem">
                <span className={styles.wenbaStatNumber}>1,000+</span>
                <span className={styles.wenbaStatLabel}>Products Listed</span>
              </div>
              <div role="listitem">
                <span className={styles.wenbaStatNumber}>500+</span>
                <span className={styles.wenbaStatLabel}>Women Artisans</span>
              </div>
              <div role="listitem">
                <span className={styles.wenbaStatNumber}>50+</span>
                <span className={styles.wenbaStatLabel}>Categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product image grid */}
        <div className={styles.wenbaImgs}>
          <div className={styles.wenbaImgCard} data-category="handicrafts">
            <img
              src="https://siawed-demo.vercel.app/wenba_prod_1.webp"
              alt="Authentic Handicrafts on WENBA"
              loading="lazy"
            />
            <div className={styles.wenbaImgCardLabel}>
              Authentic Handicrafts
            </div>
          </div>
          <div className={styles.wenbaImgCard} data-category="textiles">
            <img
              src="https://siawed-demo.vercel.app/wenba_2.webp"
              alt="Women Entrepreneurs on WENBA"
              loading="lazy"
            />
            <div className={styles.wenbaImgCardLabel}>Women Entrepreneurs</div>
          </div>
          <div className={styles.wenbaImgCard} data-category="all">
            <img
              src="https://siawed-demo.vercel.app/impact-rally-1.png"
              alt="SIAWED Community Impact"
              loading="lazy"
            />
            <div className={styles.wenbaImgCardLabel}>Community Impact</div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WenbaSection;
