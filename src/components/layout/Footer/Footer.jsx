import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  TelephoneFill,
  Facebook,
  Instagram,
  Pinterest,
  EnvelopeFill,
  GeoAltFill,
  ArrowUpRight,
} from "react-bootstrap-icons";
import { CONTACT_DETAILS } from "@/constants/conatct";
import FONTS from "@/styles/fonts";
import { PAGES } from "@/constants/constants";

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);

const QUICK_LINKS = [
  ...PAGES,
  { title: "WENBA - Register your product", href: "https://www.wenba.in/register" },
  { title: "WENBA - Corporate solutions", href: "https://www.wenba.in/corporate" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <Container>
          <Row className={styles.footerRow}>
            {/* Column 1: Logo & Description */}
            <Col lg={4} md={6} sm={12} className={styles.footerCol}>
              <div className={styles.logoSection}>
                <div className={styles.brandMark}>
                  <Image
                    src="/logo/logo.png"
                    alt="SIAWED Logo"
                    className={styles.logoImage}
                  />
                </div>
                <p className={styles.description} style={{fontWeight: '600', fontSize: '16px', color: 'rgba(255,255,255,0.95)'}}>
                  Empowering Women. Connecting Opportunities. Creating Sustainable Growth.
                </p>
                <div style={{ marginTop: "20px" }}>
                  <button 
                    style={{ 
                      backgroundColor: "transparent", 
                      border: "1px solid rgba(255,255,255,0.3)", 
                      color: "#fff", 
                      padding: "10px 20px", 
                      borderRadius: "8px", 
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  >
                    Request Corporate Catalogue
                  </button>
                </div>
              </div>
            </Col>

            {/* Column 2: Quick Links */}
            <Col lg={3} md={6} sm={12} className={styles.footerCol}>
              <h4 className={`${styles.widgetTitle} ${FONTS.font1}`}>
                Quick Links
              </h4>
              <ul className={styles.linkList}>
                {QUICK_LINKS.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href}>
                      <span className={styles.bullet}>•</span> {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Column 3: Location & Socials */}
            <Col lg={5} md={6} sm={12} className={styles.footerCol}>
              <h4 className={`${styles.widgetTitle} ${FONTS.font1}`}>
                Our Location
              </h4>
              <div className={styles.locationBlock}>
                <div className={styles.locationIconCircle}>
                  <GeoAltFill className={styles.locIcon} />
                </div>
                <p className={styles.locationText}>
                  {CONTACT_DETAILS.address.join(" ")}
                </p>
              </div>

              <h5 className={styles.socialTitle}>Follow Us On Socials:</h5>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Pinterest">
                  <Pinterest />
                </a>
                <a href="#" aria-label="X / Twitter">
                  <XIcon />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Middle Bar: Newsletter & Contact */}
      <div className={styles.middleBar}>
        <Container>
          <div className={styles.middleBarInner}>
            {/* Newsletter Form */}
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter Email Address*"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>
                Subscribe <ArrowUpRight className={styles.arrow} />
              </button>
            </div>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
              <div className={styles.contactBlock}>
                <div className={styles.contactIconCircle}>
                  <EnvelopeFill className={styles.contactIcon} />
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Email Address</span>
                  <a href={`mailto:${CONTACT_DETAILS.emails[0]}`}>
                    {CONTACT_DETAILS.emails[0]}
                  </a>
                </div>
              </div>

              <div className={styles.contactBlock}>
                <div className={styles.contactIconCircle}>
                  <TelephoneFill className={styles.contactIcon} />
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Phone Number</span>
                  <a href={`tel:+${CONTACT_DETAILS.phone1.number}`}>
                    {CONTACT_DETAILS.phone1.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Copyright */}
      <div className={styles.copyright}>
        <Container>
          <p>Copyright © 2026 SIAWED. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
