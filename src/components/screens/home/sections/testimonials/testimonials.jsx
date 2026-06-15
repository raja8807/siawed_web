import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./testimonials.module.scss";
import { TESTIMONIALS } from "@/constants/constants";
import { StarFill } from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
  </svg>
);

const TestimonialsSection = () => {
  // We'll show the first 3 for the perfect 3-column layout as per design
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className={styles.TestimonialsSection}>
      <Container>
        {/* Heading Area matching the design */}
        <div className={styles.headerWrap} data-aos="fade-up">
          <div className={styles.pillBadge}>
            <span className={styles.dot}></span> Our Testimonials
          </div>
          <h2 className={`${styles.mainTitle} ${FONTS.font1}`}>
            Voices of Real Peoples
          </h2>
          <p className={styles.subTitle}>
            Hear directly from the people, volunteers, and partners whose lives
            have been touched by our work and who continue to believe in our
            mission.
          </p>
        </div>

        {/* 3 Column Grid */}
        <Row className={styles.gridRow}>
          {displayTestimonials.map((testimonial, idx) => (
            <Col lg={4} md={6} sm={12} key={testimonial.id} className={styles.cardCol}>
              <div
                className={styles.testimonialCard}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className={styles.stars}>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                </div>
                
                <p className={`${styles.quoteText} ${FONTS.font1}`}>
                  “{testimonial.text}”
                </p>
                
                <div className={styles.authorSection}>
                  <div className={styles.authorInfo}>
                    <h5 className={`${styles.authorName} ${FONTS.font1}`}>
                      {testimonial.name}
                    </h5>
                    <span className={styles.authorRole}>
                      {testimonial.location}
                    </span>
                  </div>
                  
                  <div className={styles.authorImageWrap}>
                    {/* Placeholder image since we don't have author photos in constants */}
                    <Image src="/avtr1.jpg" alt={testimonial.name} className={styles.avatar} />
                    <div className={styles.quoteCircle}>
                      <QuoteIcon />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
