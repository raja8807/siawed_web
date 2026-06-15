import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./membership.module.scss";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { CheckCircleFill, StarFill, Building, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const MEMBERSHIP_TIERS = [
  {
    id: 1,
    title: "Student / Start up",
    price: "₹1000",
    period: "/ year",
    subtitle: "“From Student to Future Entrepreneur”",
    advantages: [
      {
        title: "Early Exposure to Entrepreneurship",
        desc: "Understand how to start and run a business while still studying.",
      },
      {
        title: "Skill Development for Career Growth",
        desc: "Learn communication, leadership, digital marketing, and business basics.",
      },
      {
        title: "Internship & Real Business Experience",
        desc: "Get opportunities to work with real women entrepreneurs.",
      },
      {
        title: "Build a Powerful Network Early",
        desc: "Connect with entrepreneurs, mentors, and like-minded students.",
      },
      {
        title: "Participation in Competitions & Events",
        desc: "Showcase ideas in startup challenges and win recognition.",
      },
      {
        title: "Boost Your Resume & Confidence",
        desc: "Stand out in placements and future opportunities.",
      },
    ],
    outcome: "Clarity, confidence, and career direction at an early stage.",
    highlight: false,
  },
  {
    id: 2,
    title: "Homepreneurs / Small Business",
    price: "₹3000",
    period: "/ year",
    subtitle: "“Turn Your Small Business into a Growing Brand”",
    advantages: [
      {
        title: "Learn How to Get Customers",
        desc: "Practical training in marketing, sales, and social media.",
      },
      {
        title: "Sell Beyond Your Local Area",
        desc: "Opportunity to sell through WENBA.",
      },
      {
        title: "Improve Your Product & Branding",
        desc: "Guidance on packaging, pricing, and presentation.",
      },
      {
        title: "Supportive Women Network",
        desc: "Connect with other homepreneurs for collaboration and motivation.",
      },
      {
        title: "Exhibitions & Sales Events",
        desc: "Directly showcase and sell your products.",
      },
      {
        title: "Govt Schemes & Guidance",
        desc: "Learn how to benefit from MSME and women-focused schemes.",
      },
    ],
    outcome: "More customers, better income, and business growth.",
    highlight: true,
  },
  {
    id: 3,
    title: "SME / Established Business",
    price: "₹5000",
    period: "/ year",
    subtitle: "“Scale Your Business with the Right Network”",
    advantages: [
      {
        title: "Expand Your Business Network",
        desc: "Connect with serious entrepreneurs, partners, and collaborators.",
      },
      {
        title: "Increase Brand Visibility",
        desc: "Showcase your business in SIAWED events, exhibitions, and platforms.",
      },
      {
        title: "Access New Markets & Customers",
        desc: "Leverage community and WENBA.",
      },
      {
        title: "Advanced Business Strategies",
        desc: "Workshops on scaling, digital growth, and business expansion.",
      },
      {
        title: "Position Yourself as a Leader",
        desc: "Opportunities to speak, mentor, and build authority.",
      },
      {
        title: "Collaboration & Opportunities",
        desc: "Find suppliers, distributors, and partners within the network.",
      },
    ],
    outcome: "Business expansion, visibility, and leadership positioning.",
    highlight: false,
  },
  {
    id: 4,
    title: "Diamond Members / Mentors",
    price: "₹10,000",
    period: "/ year",
    subtitle: "“Lead, Influence & Create Impact”",
    advantages: [
      {
        title: "Recognized as Mentor & Leader",
        desc: "Position yourself as a key contributor to women empowerment.",
      },
      {
        title: "High Visibility & Personal Branding",
        desc: "Featured in SIAWED platforms, events, and promotions.",
      },
      {
        title: "Exclusive Networking Circles",
        desc: "Connect with top entrepreneurs, corporates, and decision-makers.",
      },
      {
        title: "Speaking Opportunities",
        desc: "Lead sessions, panels, and masterclasses.",
      },
      {
        title: "Create Real Social Impact",
        desc: "Mentor and uplift aspiring women entrepreneurs.",
      },
      {
        title: "Priority Recognition",
        desc: "Special recognition at annual events and award functions.",
      },
    ],
    outcome: "Influence, recognition, and meaningful impact.",
    highlight: false,
  },
];

const MembershipCard = ({ tier }) => {
  return (
    <div
      className={`${styles.tierCard} ${
        tier.highlight ? styles.highlightCard : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={tier.id * 100}
    >
      <div className={styles.cardHeader}>
        <h3 className={`${styles.title} ${FONTS.font1}`}>{tier.title}</h3>
        <div className={styles.priceWrap}>
          <span className={styles.price}>{tier.price}</span>
          <span className={styles.period}>{tier.period}</span>
        </div>
        <p className={styles.subtitle}>{tier.subtitle}</p>
      </div>

      <div className={styles.cardBody}>
        <h4 className={styles.advantagesTitle}>Key Advantages:</h4>
        <ul className={styles.advantagesList}>
          {tier.advantages.map((adv, i) => (
            <li key={i}>
              <StarFill className={styles.icon} />
              <div className={styles.textWrap}>
                <strong>{adv.title}</strong>
                <p>{adv.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.outcomeBox}>
          <strong>Desired Outcome:</strong>
          <p>{tier.outcome}</p>
        </div>
        <CustomButton variant="outline" className={styles.btn}>
          Join Now
        </CustomButton>
      </div>
    </div>
  );
};

const MembershipSection = () => {
  return (
    <section className={styles.MembershipSection}>
      <CustomContainer lg>
        <div className={styles.headerWrap}>
          <SectionHeading
            title="SIAWED Membership Advantages"
            subTitle="Empowering Women Through Enterprise"
            alignment="center"
          />
        </div>

        {/* 4 Tier Grid */}
        <Row className={styles.tiersRow}>
          {MEMBERSHIP_TIERS.map((tier) => (
            <Col lg={3} md={6} sm={12} key={tier.id} className={styles.tierCol}>
              <MembershipCard tier={tier} />
            </Col>
          ))}
        </Row>

        {/* Corporate Membership Full Width Box */}
        <div className={styles.corporateBox} data-aos="fade-up" data-aos-delay="500">
          <Row className="align-items-center">
            <Col lg={7} md={12}>
              <div className={styles.corpContent}>
                <div className={styles.corpBadge}>NEW</div>
                <h3 className={`${styles.corpTitle} ${FONTS.font1}`}>
                  <Building className={styles.corpIcon} /> Corporate Membership
                </h3>
                <div className={styles.corpPriceWrap}>
                  <span className={styles.price}>₹25,000</span>
                  <span className={styles.period}>/ year</span>
                </div>
                <p className={styles.corpDesc}>
                  Partner with SIAWED to drive vendor diversity and empower women entrepreneurs on a large scale.
                </p>
                
                <h4 className={styles.corpAdvTitle}>Benefits for Corporate Membership:</h4>
                <ul className={styles.corpList}>
                  <li>
                    <CheckCircleFill className={styles.checkIcon} />
                    <span>Access to women-owned supplier database</span>
                  </li>
                  <li>
                    <CheckCircleFill className={styles.checkIcon} />
                    <span>Participation in buyer-seller meets</span>
                  </li>
                  <li>
                    <CheckCircleFill className={styles.checkIcon} />
                    <span>CSR partnership opportunities</span>
                  </li>
                  <li>
                    <CheckCircleFill className={styles.checkIcon} />
                    <span>Vendor diversity sourcing support</span>
                  </li>
                  <li>
                    <CheckCircleFill className={styles.checkIcon} />
                    <span>Recognition as Women Empowerment Partner</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={12} className={styles.corpCtaCol}>
              <div className={styles.corpCtaBox}>
                <h4 className={FONTS.font1}>Ready to Make an Impact?</h4>
                <p>Join forces with us and support the growth of women-led enterprises across the region.</p>
                <CustomButton variant="primary" className={styles.corpBtn}>
                  Join as Corporate Member
                </CustomButton>
              </div>
            </Col>
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default MembershipSection;
