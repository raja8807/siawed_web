import React from "react";
import styles from "./impact.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { People, Shop, Mortarboard, Heart, Handshake } from "react-bootstrap-icons";

const ImpactSection = () => {
  const impacts = [
    {
      id: 1,
      metric: "400+",
      label: "Women Entrepreneurs Network",
      icon: <People className={styles.icon} />,
    },
    {
      id: 2,
      metric: "150+",
      label: "Vendor Partners",
      icon: <Shop className={styles.icon} />,
    },
    {
      id: 3,
      metric: "50+",
      label: "Training Programs",
      icon: <Mortarboard className={styles.icon} />,
    },
    {
      id: 4,
      metric: "1000+",
      label: "Beneficiaries",
      icon: <Heart className={styles.icon} />,
    },
   
  ];

  return (
    <section className={styles.ImpactSection}>
      <CustomContainer>
        <SectionHeading
          title="Our Reach"
          head="Impact at a Glance"
          caption="Making a tangible difference in women's economic empowerment through structured development."
        />

        <div className={styles.grid}>
          {impacts.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
            
            >
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 className={styles.metric}>{item.metric}</h3>
              <div className={styles.line} />
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ImpactSection;
