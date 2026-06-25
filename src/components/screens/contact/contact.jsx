import React from "react";
import styles from "./contact.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import PageBanner from "@/components/common/page_banner/page_banner";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { TelephoneFill, EnvelopeFill, ClockFill } from "react-bootstrap-icons";
import { CONTACT_DETAILS } from "@/constants/conatct";
import FONTS from "@/styles/fonts";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";

const ContactScreen = () => {
  return (
    <>
     

      <section className={styles.contactWrap}>
         <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        bgImage="/impact-rally-2.png" // using another image for variety
      />
        <CustomContainer>
          {/* Info Cards */}
          <div className={styles.infoCardsGrid}>
            <div className={styles.infoCard} data-aos="fade-up" data-aos-delay="0">
              <div className={styles.iconWrap}>
                <TelephoneFill />
              </div>
              <h4 className={FONTS.font2}>Phone Number</h4>
              <p>We work closely with communities to identify real needs.</p>
              <h5 className={FONTS.font2}>Call Us: {CONTACT_DETAILS.phone1.text}</h5>
            </div>

            <div className={styles.infoCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.iconWrap}>
                <EnvelopeFill />
              </div>
              <h4 className={FONTS.font2}>Email Address</h4>
              <p>We work closely with communities to identify real needs.</p>
              <h5 className={FONTS.font2}>Email: {CONTACT_DETAILS.emails[0]}</h5>
            </div>

            <div className={styles.infoCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.iconWrap}>
                <ClockFill />
              </div>
              <h4 className={FONTS.font2}>Working Hours</h4>
              <p>We work closely with communities to identify real needs.</p>
              <h5 className={FONTS.font2}>Mon - Fri: 09 AM - 06 PM</h5>
            </div>
          </div>

          {/* Form Section */}
          <div className={styles.formSection}>
            <div className={styles.imageCol} data-aos="fade-right">
              {/* Replace with a highly relevant image like the one in the mockup */}
              <Image 
                src="/impact-rally-1.png" 
                alt="Community Impact" 
                layout="fill" 
                objectFit="cover" 
                className={styles.sideImg}
              />
            </div>
            
            <div className={styles.formCol} data-aos="fade-left">
              <SectionHeading
                title="Get In Touch"
                head="Contact Us Today"
                caption="We'd love to hear from you! Whether you want to volunteer, support our programs, or learn more about our initiatives."
                leftAllign
              />

              <Form className={styles.contactForm}>
                <div className={styles.inputRow}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" required className={styles.customInput} />
                  </Form.Group>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" required className={styles.customInput} />
                  </Form.Group>
                </div>

                <div className={styles.inputRow}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Phone Number" required className={styles.customInput} />
                  </Form.Group>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" required className={styles.customInput} />
                  </Form.Group>
                </div>

                <Form.Group className={styles.formGroup}>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Any Message..." className={styles.customInput} />
                </Form.Group>

                <Button variant="warning" type="submit" className={styles.submitBtn}>
                  Submit Message
                </Button>
              </Form>
            </div>
          </div>
        </CustomContainer>
        <br/>
        <br/>
        <br/>
      </section>

      

      {/* Map Section */}
      <section className={styles.mapSection}>
        <CustomContainer>
          <div className={styles.mapHeader} data-aos="fade-up">
            <SectionHeading
              title="Our Location"
              head="Where We Make an Impact"
              caption="Our offices and outreach centers are located across key regions, allowing us to connect directly with communities and deliver programs efficiently and effectively."
            />
          </div>
        </CustomContainer>

        <div className={styles.mapWrapper} data-aos="fade-up" data-aos-delay="100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3886.539828236714!2d80.222718114823!3d13.064951190794553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668e1a3bc33d%3A0x6b13b63e80cc425a!2s9%2C%20Choolaimedu%20High%20Rd%2C%20Choolaimedu%2C%20Chennai%2C%20Tamil%20Nadu%20600094!5e0!3m2!1sen!2sin!4v1683901923456!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br/>
        <br/>
        <br/>
      </section>
    </>
  );
};

export default ContactScreen;
