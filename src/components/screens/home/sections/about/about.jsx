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
              head={`Helping women never doubt that they are "Valuable & Powerful"`}
              caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci voluptas voluptatem, omnis impedit aperiam!"
              leftAllign
            />
            <p>
              <span>
                Southern Industrial Academy for Women Entrepreneurs Development
                (SIAWED)
              </span>{" "}
              is a <span>Non Governmental Organisation (NGO)</span> founded in
              the year 2013 in Chennai with the mission of providing economic
              empowerment to the women community irrespective of their
              socio-economic barriers. We facilitate <span>women</span> of
              varying backgrounds to join together and develop their common
              skills and knowledge for collective benefit.
            </p>
            <br />
            <CustomButton>Know More</CustomButton>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
