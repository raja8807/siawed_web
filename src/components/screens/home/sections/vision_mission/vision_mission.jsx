import React from "react";
import styles from "./vision_mission.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { Eye, Rocket } from "react-bootstrap-icons";

const VisionMissionSection = () => {
  return (
    <section className={styles.VisionMissionSection}>
      <CustomContainer>
        <SectionHeading
          title="Our Focus"
          head="Vision & Mission"
          caption="Steering our efforts towards empowering women and fostering sustainable entrepreneurship."
        />

        <div className={styles.cardsWrap}>
          {/* Vision Card */}
          <div
            className={styles.card}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className={styles.iconWrapper}>
              <Eye className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.cardText}>
              Women are given a foundation course on basics of Entrepreneurship
              Development ( EDP ) and grouped with similar skills. Each group
              will be headed by a <span>TEAM LEADER</span> responsible for
              training and co ordination of the members as per the requisites of
              Business.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={styles.card}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className={styles.iconWrapper}>
              <Rocket className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Mission</h3>
            <p className={styles.cardText}>
              Our mission is to strengthen the entrepreneurial skills of women
              both in rural and urban regions and empower the girls to choose
              <span> entrepreneurship</span> against employment.
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default VisionMissionSection;
