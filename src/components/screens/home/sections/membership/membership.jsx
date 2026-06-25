import React from "react";
import styles from "./Membership.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";

const MembershipSection = () => {
  return (
    <div className={styles.membershipContainer}>
      <SectionWrapper id="membership" bgColor="ivory" aos="fade-up">
        <p className="eyebrow eyebrow-orange">Membership Plans</p>
        <h2 className={`section-heading ${FONTS.font2}`}>Find the Right Plan for <em className="em-blue">Your Journey</em></h2>
        <p className="lead">From students to established businesses &#8212; every woman entrepreneur has a place in the SIAWED ecosystem.</p>

        <div className={styles.membership__grid}>
          {/* Tier 1 */}
          <article className={styles['plan-card']}>
            <span className={styles['plan-card__badge']}>Student / Startup</span>
            <h3 className={FONTS.font2}>Early Explorer</h3>
            <p className={styles['plan-card__tagline']}>&#8220;From Student to Future Entrepreneur&#8221;</p>
            <div className={`${styles['plan-card__price']} ${FONTS.font2}`}>&#8377;1,000</div>
            <div className={styles['plan-card__period']}>per year</div>
            <hr className={styles['plan-card__divider']}/>
            <ul className={styles['plan-card__features']}>
              <li>Entrepreneurship exposure</li>
              <li>Skill development workshops</li>
              <li>Internship opportunities</li>
              <li>Startup challenges &amp; competitions</li>
              <li>Mentor network access</li>
            </ul>
            <CustomButton href="/membership" variant="blue" fullWidth={true}>Join Now</CustomButton>
          </article>

          {/* Tier 2 — Featured/Popular */}
          <article className={`${styles['plan-card']} ${styles['plan-card--featured']}`}>
            <span className={styles['plan-card__badge']}>Most Popular</span>
            <h3 className={FONTS.font2}>Homepreneur</h3>
            <p className={styles['plan-card__tagline']}>&#8220;Turn Your Small Business into a Brand&#8221;</p>
            <div className={`${styles['plan-card__price']} ${FONTS.font2}`}>&#8377;3,000</div>
            <div className={styles['plan-card__period']}>per year</div>
            <hr className={styles['plan-card__divider']}/>
            <ul className={styles['plan-card__features']}>
              <li>Marketing &amp; social media training</li>
              <li>Sell through WENBA marketplace</li>
              <li>Branding &amp; packaging guidance</li>
              <li>Exhibitions &amp; sales events</li>
              <li>Govt scheme advisory</li>
            </ul>
            <CustomButton href="/membership" variant="orange" fullWidth={true}>Join Now</CustomButton>
          </article>

          {/* Tier 3 */}
          <article className={styles['plan-card']}>
            <span className={styles['plan-card__badge']}>SME / Established</span>
            <h3 className={FONTS.font2}>Growth Leader</h3>
            <p className={styles['plan-card__tagline']}>&#8220;Scale with the Right Network&#8221;</p>
            <div className={`${styles['plan-card__price']} ${FONTS.font2}`}>&#8377;5,000</div>
            <div className={styles['plan-card__period']}>per year</div>
            <hr className={styles['plan-card__divider']}/>
            <ul className={styles['plan-card__features']}>
              <li>Advanced business strategy</li>
              <li>Brand visibility at SIAWED events</li>
              <li>New markets via WENBA</li>
              <li>Partner collaboration opportunities</li>
              <li>Authority &amp; mentoring track</li>
            </ul>
            <CustomButton href="/membership" variant="blue" fullWidth={true}>Join Now</CustomButton>
          </article>

          {/* Tier 4 */}
          <article className={styles['plan-card']}>
            <span className={styles['plan-card__badge']}>Diamond / Mentor</span>
            <h3 className={FONTS.font2}>Impact Maker</h3>
            <p className={styles['plan-card__tagline']}>&#8220;Lead, Influence &amp; Create Impact&#8221;</p>
            <div className={`${styles['plan-card__price']} ${FONTS.font2}`}>&#8377;10,000</div>
            <div className={styles['plan-card__period']}>per year</div>
            <hr className={styles['plan-card__divider']}/>
            <ul className={styles['plan-card__features']}>
              <li>Featured on SIAWED platforms</li>
              <li>Exclusive networking circles</li>
              <li>Speaking &amp; panel opportunities</li>
              <li>Annual awards recognition</li>
              <li>Mentor aspiring entrepreneurs</li>
            </ul>
            <CustomButton href="/membership" variant="blue" fullWidth={true}>Join Now</CustomButton>
          </article>

          {/* Tier 5 — Corporate */}
          <article className={`${styles['plan-card']} ${styles['plan-card--teal']}`}>
            <span className={styles['plan-card__badge']}>Corporate</span>
            <h3 className={FONTS.font2}>Corporate Partner</h3>
            <p className={styles['plan-card__tagline']}>&#8220;Drive Vendor Diversity at Scale&#8221;</p>
            <div className={`${styles['plan-card__price']} ${FONTS.font2}`}>&#8377;25,000</div>
            <div className={styles['plan-card__period']}>per year</div>
            <hr className={styles['plan-card__divider']}/>
            <ul className={styles['plan-card__features']}>
              <li>Women-owned supplier database</li>
              <li>Buyer-seller meets access</li>
              <li>CSR partnership opportunities</li>
              <li>Vendor diversity sourcing support</li>
              <li>Women Empowerment Partner badge</li>
            </ul>
            <CustomButton href="/corporate" variant="teal" fullWidth={true}>Enquire Now</CustomButton>
          </article>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MembershipSection;
