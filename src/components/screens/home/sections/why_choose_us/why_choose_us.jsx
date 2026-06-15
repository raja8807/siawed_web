import React from "react";
import styles from "./why_choose_us.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Globe2, ShieldCheck, CurrencyDollar } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";

const WhyChooseUsSection = () => {
  return (
    <section className={styles.WhyChooseUsSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          {/* Left Column: Content and List */}
          <div className={styles.left}>
            <div className={styles.badge} data-aos="fade-down">
              <span className={styles.dot} /> Why Choose Us
            </div>
            <h2 className={`${styles.title} ${FONTS.font1}`} data-aos="fade-up">
              What Makes our Impact Strong
            </h2>
            <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
              We approach every initiative with compassion, operate with full
              transparency, and focus on creating sustainable impact that improves
              lives.
            </p>

            <div
              className={styles.listCard}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <Globe2 className={styles.icon} />
                </div>
                <p className={styles.itemText}>
                  We operate with complete openness, clearly communicating
                </p>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <ShieldCheck className={styles.icon} />
                </div>
                <p className={styles.itemText}>
                  Ensuring every program is guided by empathy, dignity, & community
                </p>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <CurrencyDollar className={styles.icon} />
                </div>
                <p className={styles.itemText}>
                  Our initiative focus on long-term solution that empower community
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Collage Images */}
          <div className={styles.right} data-aos="fade-left">
            <div className={styles.collageContainer}>
              <div className={styles.imageMain}>
                <Image src="/impact-rally-1.png" alt="Empowerment walk" />
              </div>
              <div className={styles.imageSub}>
                <Image src="/impact-rally-2.png" alt="World Population Day rally" />
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WhyChooseUsSection;
