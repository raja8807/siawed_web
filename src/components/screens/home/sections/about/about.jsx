import React from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Image } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <div className={styles.main}>
              <Image src="/about-us-image-1.jpg" />

              <div className={styles.sub}>
                <Image src="/about-us-image-2.jpg" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <SectionHeading
              title={"About Us"}
              head={`Empowering Women Through Entrepreneurship and Skill Development`}
              caption=""
              leftAllign
            />
            <p>
              <strong>Southern Industrial Academy for Women Entrepreneurs Development (SIAWED)</strong> is a not-for-profit organization dedicated to empowering women through entrepreneurship, skill development, leadership, and economic opportunities.
            </p>
            <br />
            <p>
              Led by first-generation entrepreneurs with over 25 years of business leadership experience, SIAWED has been creating pathways for women to transform their ideas into successful enterprises — providing access to training, mentorship, networking, market linkages, and business support services.
            </p>
            <br />
            <CustomButton href="/about">Read More &rarr;</CustomButton>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
