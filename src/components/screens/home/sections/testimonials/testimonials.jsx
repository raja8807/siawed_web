import React from "react";
import { Container, Image } from "react-bootstrap";
import styles from "./testimonials.module.scss";
import { TESTIMONIALS } from "@/constants/constants";
import { StarFill, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CustomContainer from "@/components/ui/custom_container/custom_container";

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
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const arrowStyle = {
    background: "transparent",
    border: "0",
    color: "#0d3b36",
    fontSize: "30px",
    cursor: "pointer",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(250, 212, 89, 0.3)",
    margin: "0 10px",
    transition: "all 0.3s ease"
  };

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    responsive: responsiveSettings,
    // prevArrow: (
    //   <button style={arrowStyle} className={styles.navArrow}>
    //     <ChevronLeft />
    //   </button>
    // ),
    // nextArrow: (
    //   <button style={arrowStyle} className={styles.navArrow}>
    //     <ChevronRight />
    //   </button>
    // ),
  };

  return (
    <section className={styles.TestimonialsSection}>
      <CustomContainer lg>
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

        {/* Carousel */}
        <div className={styles.carouselContainer} data-aos="fade-up" data-aos-delay="150">
          <Slide {...properties}>
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={testimonial.id} className={styles.slideWrap}>
                <div className={styles.testimonialCard}>
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
                      <Image src={testimonial.image} alt={testimonial.name} className={styles.avatar} />
                      <div className={styles.quoteCircle}>
                        <QuoteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </CustomContainer>
    </section>
  );
};

export default TestimonialsSection;
