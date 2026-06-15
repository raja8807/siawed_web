import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const BannerSection = () => {
  const images = ["avtr1.jpg", "avtr1.jpg", "avtr1.jpg", "avtr1.jpg"];

  return (
    <section className={styles.BannerSection}>
      <div className={styles.top}>
        <CustomContainer>
          <div className={styles.topWrap}>
            <div className={styles.bar}>
              <div className={styles.images}>
                {images.map((img, idx) => {
                  return (
                    <Image
                      key={`img_${idx}`}
                      src={img}
                      width={25}
                      height={25}
                      alt=""
                    />
                  );
                })}
              </div>
              Driving Positive Change Worldwide
            </div>
            <h1>
              Empowering
              <br />
              Women Entrepreneurs. <br />
              Enabling
              <br />
              Responsible Procurement.
            </h1>
            <div className={styles.btns}>
              <CustomButton>Join Siawed</CustomButton>
              &nbsp; &nbsp;
              <CustomButton variant={2}>Become a CSR Partner</CustomButton>
            </div>
          </div>
        </CustomContainer>
      </div>

      <div className={styles.btm}>
        <CustomContainer>
          <div className={styles.btmWrap}>
            <div className={styles.btmLft}>
              <p>
                Connecting women-led enterprises, native entrepreneurs, rural
                artisans, SHGs and social enterprises with corporates,
                institutions and consumers.
              </p>
              <br/>
              <CustomButton>Request Corporate Catalogue</CustomButton>
            </div>

           
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default BannerSection;
