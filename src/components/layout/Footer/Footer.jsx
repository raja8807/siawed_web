import React, { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FONTS } from "@/styles/fonts";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  GeoAltFill, 
  TelephoneFill, 
  EnvelopeFill, 
  Globe 
} from "react-bootstrap-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  return (
    <div className={styles.footerContainer}>
      <footer id="contact">
        <div className="footer__grid">
          {/* Col 1: Brand */}
          <div>
            <img className="footer__brand-logo" src="/assets/images/siawed-logo-footer.png" alt="SIAWED – Empower Elevate Enrich" />
            <p className="footer__brand-desc">
              Southern Industrial Academy for Women Entrepreneurs Development — creating pathways for women across India to build, grow, and scale successful enterprises through the SIAWED & WENBA ecosystem.
            </p>
            <div className="footer__social" aria-label="SIAWED social media links">
              <a href="https://facebook.com/siawed" title="Facebook" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a href="https://instagram.com/siawed" title="Instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href="https://linkedin.com/company/siawed" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              <a href="https://youtube.com/@siawed" title="YouTube" target="_blank" rel="noopener noreferrer"><Youtube /></a>
            </div>
            {/* WENBA mini in footer */}
            <div className="footer__wenba">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 54" aria-label="WENBA">
                <path d="M36 38 C25 28,6 26,2 34 C9 39,24 40,36 38Z" fill="#66D8CC"/>
                <path d="M36 38 C47 28,66 26,70 34 C63 39,48 40,36 38Z" fill="#66D8CC"/>
                <path d="M36 38 C27 18,29 4,36 0 C43 4,45 18,36 38Z" fill="#0D7A6E"/>
                <circle cx="36" cy="15" r="6.5" fill="#CC2222"/>
                <path d="M36 22 L36 34 M36 27 L26 20 M36 27 L46 20 M36 34 L30 45 M36 34 L42 45" stroke="#0D7A6E" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                <text x="86" y="26" fontFamily="Georgia,serif" fontSize="19" fontWeight="800" fill="#CC2222" letterSpacing="3">WENBA</text>
                <text x="86" y="44" fontFamily="Arial,sans-serif" fontSize="11.5" fontWeight="600" fill="#1BA090">WE make IT Happen!</text>
              </svg>
              <span className="footer__wenba-text">Vendor & procurement marketplace<br/>powered by SIAWED</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer__col">
            <h4 className={FONTS.font2}>Quick Links</h4>
            <nav className="footer__links" aria-label="Footer quick links">
              <Link href="/about">About Us</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/wenba">WENBA Marketplace</Link>
              <Link href="/membership">Membership</Link>
              <Link href="/corporate-solutions">Corporate Solutions</Link>
              <Link href="/events">Events</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/careers">Careers</Link>
            </nav>
          </div>

          {/* Col 3: WENBA Links */}
          <div className="footer__col">
            <h4 className={FONTS.font2}>WENBA</h4>
            <nav className="footer__links" aria-label="WENBA links">
              <Link href="/wenba/register">Register as Vendor</Link>
              <Link href="/wenba/catalogue">Product Catalogue</Link>
              <Link href="/wenba/procurement">Corporate Procurement</Link>
              <Link href="/wenba/empanelled">Empanelled Vendors</Link>
              <Link href="/wenba/raise-request">Raise a Request</Link>
              <Link href="/wenba/dashboard">WENBA Dashboard</Link>
              <Link href="/wenba/about">About WENBA</Link>
            </nav>
          </div>

          {/* Col 4: Contact + Newsletter */}
          <div className="footer__col">
            <h4 className={FONTS.font2}>Get in Touch</h4>
            <address style={{ fontStyle: "normal" }}>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true"><GeoAltFill /></span>
                <span className="footer__contact-text">601 &#8220;DEEPA&#8221;, Chitra Avenue, Choolaimedu High Road, Chennai &#8211; 600094</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true"><TelephoneFill /></span>
                <span className="footer__contact-text"><a href="tel:+914443514334">044 4351 4334</a></span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true"><EnvelopeFill /></span>
                <span className="footer__contact-text"><a href="mailto:info@siawed.org">info@siawed.org</a></span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true"><Globe /></span>
                <span className="footer__contact-text"><a href="http://www.siawed.org" target="_blank" rel="noopener noreferrer">www.siawed.org</a></span>
              </div>
            </address>

            <span className="footer__newsletter-label" id="newsletter-label">Newsletter</span>
            <div className="footer__newsletter" role="form" aria-labelledby="newsletter-label">
              <input 
                type="email" 
                placeholder={isSubscribed ? "You're subscribed!" : "Your email address"} 
                aria-label="Email address for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="button" 
                onClick={handleSubscribe} 
                style={isSubscribed ? { background: '#0D7A6E' } : {}}
              >
                {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&#169; 2026 SIAWED. All rights reserved.</span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link> &#183;
            <Link href="/terms-of-use">Terms of Use</Link> &#183;
            <Link href="/sitemap">Sitemap</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
