import React from "react";
import styles from "./services_grid.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { 
  Lightbulb, 
  PersonVideo3, 
  Tools, 
  Shop, 
  Building, 
  BoxSeam, 
  CalendarEvent, 
  ArrowRightCircle
} from "react-bootstrap-icons";

const ServicesGridSection = () => {
  const services = [
    {
      title: "Entrepreneurship Development",
      desc: "Training programs and workshops for aspiring and existing women entrepreneurs.",
      icon: <Lightbulb />
    },
    {
      title: "Business Mentoring",
      desc: "Expert guidance to overcome business challenges and accelerate growth.",
      icon: <PersonVideo3 />
    },
    {
      title: "Skill Development",
      desc: "Industry-relevant training to enhance professional and entrepreneurial competencies.",
      icon: <Tools />
    },
    {
      title: "Market Access & Promotion",
      desc: "Showcase your products through exhibitions, events, and WENBA.",
      icon: <Shop />
    },
    {
      title: "Corporate Linkages",
      desc: "Connecting women-owned businesses with corporate buyers, procurement teams, and partners.",
      icon: <Building />
    },
    {
      title: "Vendor Development",
      desc: "Supporting businesses in improving visibility, credibility, and readiness for market opportunities.",
      icon: <BoxSeam />
    },
    {
      title: "Events & Knowledge Sharing",
      desc: "Seminars, webinars, conferences, business meetups, and learning forums for growth.",
      icon: <CalendarEvent />
    }
  ];

  return (
    <section className={styles.ServicesGridSection}>
      <CustomContainer>
        <SectionHeading
          title="Our Services"
          head="Comprehensive Ecosystem of Support"
          caption="Providing everything you need to start, manage, and scale your enterprise."
        />

        <div className={styles.gridWrap}>
          {services.map((service, idx) => (
            <div 
              className={styles.serviceCard} 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 100}
            >
              <div className={styles.iconWrap}>{service.icon}</div>
              <h4 className={styles.cardTitle}>{service.title}</h4>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}

          {/* 8th Card as View All CTA */}
          <div 
            className={`${styles.serviceCard} ${styles.ctaCard}`}
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className={styles.ctaContent}>
              <h4>Explore More</h4>
              <p>Discover all our initiatives and programs.</p>
              <CustomButton href="/services">View All Services <ArrowRightCircle className="ms-2" /></CustomButton>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesGridSection;
