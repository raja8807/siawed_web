import React, { useState } from "react";
import styles from "./focused_actions.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Cpu, Gear, People, Grid, TelephoneFill, ArrowUpRight } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";

const FocusedActionsSection = () => {
  const [activeTab, setActiveTab] = useState("awareness");

  const tabsContent = {
    awareness: {
      title: "Empowering Communities",
      description: "We design and implement programs that address real community needs–ranging from education and healthcare to women & youth.",
      icon: <Cpu className={styles.icon} />,
    },
    capacity: {
      title: "Capacity Building & Training",
      description: "Providing courses on Entrepreneurship Development (EDP) and grouping women with similar skills to prepare them for market demands.",
      icon: <Gear className={styles.icon} />,
    },
    collaboration: {
      title: "Strategic Collaboration",
      description: "Fostering partnerships between local women groups, vendor networks, corporate institutions, and public organizations for scalable growth.",
      icon: <People className={styles.icon} />,
    },
  };

  return (
    <section className={styles.FocusedActionsSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          {/* Left Column: Image Collage & Metric Cards */}
          <div className={styles.left} data-aos="fade-right">
            <div className={styles.collageContainer}>
              {/* Top-Left Card */}
              <div className={styles.cardVolunteers}>
                <h4 className={styles.cardTitle}>3,500+ Active Volunteers</h4>
                <div className={styles.avatarsRow}>
                  <Image src="/avtr1.jpg" alt="Volunteer 1" className={styles.avatar} />
                  <Image src="/avtr1.jpg" alt="Volunteer 2" className={styles.avatar} />
                  <Image src="/avtr1.jpg" alt="Volunteer 3" className={styles.avatar} />
                  <Image src="/avtr1.jpg" alt="Volunteer 4" className={styles.avatar} />
                </div>
              </div>

              {/* Top-Right Image (Behind) */}
              <div className={styles.imgTopRight}>
                <Image src="/about-us-image-1.jpg" alt="Impact Action behind" />
              </div>

              {/* Middle-Left Image */}
              <div className={styles.imgMiddleLeft}>
                <Image src="/about-us-image-2.jpg" alt="Rally Walk" />
              </div>

              {/* Middle-Right Image (Main) */}
              <div className={styles.imgMain}>
                <Image src="/impact-rally-1.png" alt="Main Action Rally" />
              </div>

              {/* Bottom-Left Card */}
              <div className={styles.cardProjects}>
                <div className={styles.iconCircle}>
                  <Grid className={styles.gridIcon} />
                </div>
                <div className={styles.projectsInfo}>
                  <h4>250+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tab switcher and details */}
          <div className={styles.right}>
            <div className={styles.badge} data-aos="fade-down">
              <span className={styles.dot} /> What We Do
            </div>
            <h2 className={`${styles.title} ${FONTS.font1}`} data-aos="fade-up">
              Focused Actions That Deliver Impacts
            </h2>
            <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
              Through thoughtfully planned programs and community-led action, we
              empower individuals, strengthen neighborhoods, and foster lasting
              positive change one initiative at a time.
            </p>

            {/* Tabs Row */}
            <div className={styles.tabsRow} data-aos="fade-up" data-aos-delay="150">
              <button
                className={`${styles.tabBtn} ${activeTab === "awareness" ? styles.active : ""}`}
                onClick={() => setActiveTab("awareness")}
              >
                Awareness
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === "capacity" ? styles.active : ""}`}
                onClick={() => setActiveTab("capacity")}
              >
                Capacity Building
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === "collaboration" ? styles.active : ""}`}
                onClick={() => setActiveTab("collaboration")}
              >
                Collaboration
              </button>
            </div>

            {/* Dynamic Content Display */}
            <div
              className={styles.dynamicContent}
              key={activeTab} // triggers re-render animation
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.contentIconContainer}>
                {tabsContent[activeTab].icon}
              </div>
              <div className={styles.contentText}>
                <h3 className={styles.contentTitle}>{tabsContent[activeTab].title}</h3>
                <p className={styles.contentDescription}>{tabsContent[activeTab].description}</p>
              </div>
            </div>

            {/* Action Button */}
            <div className={styles.buttonWrapper} data-aos="fade-up" data-aos-delay="250">
              <button className={styles.contactBtn}>
                Contact Us <ArrowUpRight className={styles.arrow} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Contact Note */}
        <div className={styles.bottomNote} data-aos="fade-up" data-aos-delay="300">
          <div className={styles.noteAvatarWrapper}>
            <Image src="/avtr1.jpg" alt="Representative" className={styles.noteAvatar} />
            <div className={styles.phoneBadge}>
              <TelephoneFill className={styles.phoneIcon} />
            </div>
          </div>
          <p className={styles.noteText}>
            Let's make something great work together. <a href="/contact">Get Free Quote</a>
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FocusedActionsSection;
