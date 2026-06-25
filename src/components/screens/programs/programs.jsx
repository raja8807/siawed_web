import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./programs.module.scss";
import FONTS from "@/styles/fonts";

const ProgramsScreen = () => {
  return (
    <>
      <PageBanner
        title="Our Programs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
        bgImage="/impact-rally-1.png"
      />

      <section className={styles.programsContentSection}>
        <CustomContainer>
          
          {/* EDP Program */}
          <div id="entrepreneurship" className={styles.sectionBlock} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <img src="/about-us-image-1.jpg" alt="Entrepreneurship Development" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Entrepreneurship Development Program (EDP)
              </h2>
              <div className={styles.content}>
                <p><strong>Basic and Advanced.</strong></p>
                <p>
                  These programs are conducted to develop and implement training programs and workshops 
                  to promote women entrepreneurship. These programs offer customized mentorship and 
                  guidance for each target group as per their requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Capacity Building - Reversed */}
          <div id="training" className={`${styles.sectionBlock} ${styles.sectionBlockReverse}`} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.imageWrap}>
              <img src="/about-us-image-2.jpg" alt="Capacity Building and Training" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Capacity Building and Training
              </h2>
              <div className={styles.content}>
                <p>
                  SIAWED creates a platform to facilitate collaboration with local women associations, 
                  corporate leaders, business entities, and academic institutions.
                </p>
                <p>
                  Such livelihood enhancement training establishes partnerships with government bodies, 
                  banks, investors, and venture capitalists to support entrepreneurial ventures.
                </p>
              </div>
            </div>
          </div>

          {/* SHG & Artisan */}
          <div id="shg" className={styles.sectionBlock} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.imageWrap}>
              <img src="/women Entrepreneur-sm.png" alt="SHG & Artisan Support" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                SHG & Artisan Support
              </h2>
              <div className={styles.content}>
                <p>
                  SIAWED empowers self help groups and artisans by providing entrepreneurship training, 
                  skill enhancement, mentoring and livelihood opportunities, thereby enabling sustainable 
                  and scalable enterprises for women and rural communities.
                </p>
                <p>
                  SIAWED helps SHG members transition from income generation activities to sustainable businesses.
                </p>
              </div>
            </div>
          </div>

        </CustomContainer>
      </section>
    </>
  );
};

export default ProgramsScreen;
