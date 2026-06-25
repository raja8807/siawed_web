import React, { useState } from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./wenba.module.scss";
import FONTS from "@/styles/fonts";
import { 
  Globe, Shop, CalendarEvent, Gift, 
  Megaphone, Cart3, Whatsapp, PeopleFill,
  CheckCircleFill,
  Building, BriefcaseFill, BoxSeam, Award,
  GraphUpArrow, Layers, Search, BarChartFill
} from "react-bootstrap-icons";

const WenbaScreen = () => {

  const [formData, setFormData] = useState({
    organization: "",
    contactPerson: "",
    requirement: "",
    quantity: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Procurement Request Submitted:", formData);
    // Reset form after submission
    setFormData({
      organization: "",
      contactPerson: "",
      requirement: "",
      quantity: ""
    });
    alert("Request logged to console!");
  };

  return (
    <div className={styles.wenbaPage}>
      <PageBanner
        title="WENBA Marketplace"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "WENBA" },
        ]}
        bgImage="/hero-bg1.jpg"
      />

      <header className={styles.sectionHeader}>
        <CustomContainer>
          <h1 className={FONTS.font2}>Welcome to <span>WENBA</span></h1>
          <p>
            Connecting dynamic women entrepreneurs, self-help groups, and rural artisans 
            with corporate procurement and impactful market opportunities across India.
          </p>
        </CustomContainer>
      </header>
      
      <div className={styles.sectionDivider}></div>

      {/* ================= FOR VENDORS ================= */}
      <CustomContainer>
        <div className={styles.groupHeading}>
          <h2 className={FONTS.font2}>For Vendors</h2>
        </div>
      </CustomContainer>

      {/* 1. About WENBA (Marketplace) */}
      <section id="catalogue" className={`${styles.section} ${styles.sectionLight}`}>
        <CustomContainer>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrap} data-aos="fade-right">
              <img src="/wenba_prod_1.webp" alt="WENBA Marketplace Vendors" />
            </div>
            
            <div className={styles.aboutContent} data-aos="fade-left">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>Market Linkages & Exhibitions</h3>
              <p className={styles.description}>
                SIAWED offers comprehensive market linkages through WENBA by providing robust online and offline 
                platforms to showcase and sell products, unlocking sustainable revenue streams.
              </p>
              
              <div id="register" className={styles.featureCardsGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.icon}><Globe /></div>
                  <h4>Online Marketplace</h4>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.icon}><Shop /></div>
                  <h4>Offline Exhibitions</h4>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.icon}><CalendarEvent /></div>
                  <h4>Trade Fairs</h4>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.icon}><Gift /></div>
                  <h4>Corporate Gifting</h4>
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* 2. Capacity Building & Digital Training */}
      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <CustomContainer>
          <div className="text-center" data-aos="fade-up">
            <h3 className={`${styles.heading} ${FONTS.font2} mx-auto text-center`}>Capacity Building & Training</h3>
            <p className={styles.description} style={{ maxWidth: "700px", margin: "0 auto" }}>
              We train budding entrepreneurs and artisan communities with modern business skills, 
              ensuring they thrive in today's digital-first economy.
            </p>
          </div>
          
          <div className={styles.capacityGrid}>
            <div className={styles.capacityCard} data-aos="zoom-in" data-aos-delay="0">
              <div className={styles.iconWrap}><Megaphone /></div>
              <h4>Digital Marketing</h4>
              <p>Mastering online visibility and social media strategies.</p>
            </div>
            
            <div className={styles.capacityCard} data-aos="zoom-in" data-aos-delay="100">
              <div className={styles.iconWrap}><Cart3 /></div>
              <h4>E-Commerce</h4>
              <p>Navigating modern digital storefronts and online sales.</p>
            </div>
            
            <div className={styles.capacityCard} data-aos="zoom-in" data-aos-delay="200">
              <div className={styles.iconWrap}><Whatsapp /></div>
              <h4>WhatsApp Business</h4>
              <p>Leveraging direct communication for customer relations.</p>
            </div>
            
            <div className={styles.capacityCard} data-aos="zoom-in" data-aos-delay="300">
              <div className={styles.iconWrap}><PeopleFill /></div>
              <h4>Mentorship</h4>
              <p>Guided support from seasoned industry professionals.</p>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* ================= FOR CORPORATES ================= */}
      <CustomContainer>
        <div className={styles.groupHeading}>
          <h2 className={FONTS.font2}>For Corporates</h2>
        </div>
      </CustomContainer>

      {/* 3. Corporate Procurement */}
      <section id="procurement" className={`${styles.section} ${styles.sectionLight}`}>
        <CustomContainer>
          <div className={styles.procurementGrid}>
            <div className={styles.procurementContent} data-aos="fade-right">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>Corporate Procurement</h3>
              <p className={styles.description}>
                Source authentic, sustainable, and socially impactful products. Partner with WENBA to integrate 
                inclusive procurement into your supply chain while creating measurable social impact.
              </p>
              
              <div className={styles.checklistGrid}>
                <div className={styles.checklistItem}>
                  <CheckCircleFill className={styles.checkIcon} /> Women Entrepreneurs
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircleFill className={styles.checkIcon} /> Self-Help Groups (SHGs)
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircleFill className={styles.checkIcon} /> Rural Artisans
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircleFill className={styles.checkIcon} /> Sustainable Products
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircleFill className={styles.checkIcon} /> Inclusive Procurement
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircleFill className={styles.checkIcon} /> Social Impact
                </div>
              </div>
              
              <CustomButton href="#raise-request" variant="teal" size="lg">Become a Procurement Partner</CustomButton>
            </div>
            
            <div className={styles.procurementImageWrap} data-aos="fade-left">
              <img src="/wenba_2.webp" alt="Corporate Partnership" />
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* 4. Raise Procurement Request */}
      <section id="raise-request" className={`${styles.section} ${styles.sectionSoft}`}>
        <CustomContainer>
          <div className={styles.requestGrid}>
            <div className={styles.requestInfo} data-aos="fade-up">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>Raise a Procurement Request</h3>
              <p className={styles.description}>
                Looking for customized products, corporate gifts, employee engagement kits, or bulk supplies? 
                Share your requirements, and our team will connect you with verified enterprises best suited to your needs.
              </p>
              
              <div className={styles.requestCategories}>
                <div className={styles.categoryCard}>
                  <Gift className={styles.icon} />
                  <h5>Corporate Gifts</h5>
                </div>
                <div className={styles.categoryCard}>
                  <BriefcaseFill className={styles.icon} />
                  <h5>Employee Kits</h5>
                </div>
                <div className={styles.categoryCard}>
                  <BoxSeam className={styles.icon} />
                  <h5>Bulk Orders</h5>
                </div>
                <div className={styles.categoryCard}>
                  <Award className={styles.icon} />
                  <h5>Customized Products</h5>
                </div>
              </div>
            </div>
            
            <div className={styles.requestFormWrap} data-aos="fade-up" data-aos-delay="200">
              <form className={styles.requestForm} onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                  <label>Organization Name</label>
                  <input 
                    type="text" 
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Enter your company name" 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Contact Person</label>
                  <input 
                    type="text" 
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="Full Name" 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Product Requirement</label>
                  <textarea 
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    placeholder="Describe the products you are looking for..." 
                    required
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Approximate Quantity</label>
                  <input 
                    type="text" 
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 500 units" 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3 fw-bold" style={{backgroundColor: '#e8701a', border: 'none'}}>
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* 5. CSR Partnerships */}
      <section id="csr" className={`${styles.section} ${styles.sectionLight}`}>
        <CustomContainer>
          <div className={styles.csrGrid}>
            <div className={styles.aboutImageWrap} data-aos="fade-right">
              <img src="/about-us-image-1.jpg" alt="CSR Partnerships" />
            </div>
            
            <div className={styles.csrContent} data-aos="fade-left">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>CSR Partnerships</h3>
              <p className={styles.description}>
                Collaborate with SIAWED to design and implement high-impact CSR initiatives. 
                Together, we can create lasting social transformation.
              </p>
              
              <div className={styles.impactCards}>
                <div className={styles.impactCard}>
                  <h4><GraphUpArrow className={styles.icon} /> Women Entrepreneurship</h4>
                </div>
                <div className={styles.impactCard}>
                  <h4><Layers className={styles.icon} /> Skill Development</h4>
                </div>
                <div className={styles.impactCard}>
                  <h4><BriefcaseFill className={styles.icon} /> Livelihood Generation</h4>
                </div>
                <div className={styles.impactCard}>
                  <h4><Building className={styles.icon} /> Sustainable Communities</h4>
                </div>
              </div>
              
              <CustomButton href="/contact" variant="blue" size="lg">Partner with SIAWED</CustomButton>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* 6. WENBA Dashboard */}
      <section id="dashboard" className={`${styles.section} ${styles.dashboardSection}`}>
        <CustomContainer>
          <div className="text-center" data-aos="fade-up">
            <h3 className={`${styles.heading} ${FONTS.font2} mx-auto text-center`}>WENBA Dashboard</h3>
            <p className={styles.description} style={{ maxWidth: "800px", margin: "0 auto" }}>
              A dedicated digital platform providing seamless access to vendors, product catalogues, 
              procurement requests, order tracking, and impact metrics—enabling corporates to make 
              responsible and inclusive sourcing decisions with ease.
            </p>
          </div>
          
          <div className={styles.dashboardShowcase} data-aos="zoom-in" data-aos-delay="200">
            <div className={styles.dashboardImageWrap}>
              <img src="/images/wenba_dashboard.png" alt="WENBA Dashboard Mockup" />
            </div>
            
            {/* Floating Features */}
            <div className={`${styles.floatingCard} ${styles.float1}`}>
              <div className={styles.icon}><Search /></div>
              Vendor Directory
            </div>
            <div className={`${styles.floatingCard} ${styles.float2}`}>
              <div className={styles.icon}><Shop /></div>
              Product Catalogue
            </div>
            <div className={`${styles.floatingCard} ${styles.float3}`}>
              <div className={styles.icon}><BoxSeam /></div>
              Order Tracking
            </div>
            <div className={`${styles.floatingCard} ${styles.float4}`}>
              <div className={styles.icon}><BarChartFill /></div>
              Impact Metrics
            </div>
          </div>
          
          <div className="text-center mt-5">
            <CustomButton href="#register" variant="teal" size="lg">Access Dashboard</CustomButton>
          </div>
        </CustomContainer>
      </section>

      {/* 7. Final CTA Section */}
      <section className={styles.finalCta}>
        <CustomContainer>
          <div className={styles.ctaContent} data-aos="fade-up">
            <h2 className={FONTS.font2}>Join India's Inclusive Procurement Movement</h2>
            <p>
              Whether you are a vendor looking to expand your reach, or a corporate seeking sustainable 
              sourcing partners, WENBA provides the platform and support to achieve measurable social impact.
            </p>
            <div className={styles.btnGroup}>
              <CustomButton href="#raise-request" variant="orange" size="lg">Raise Procurement Request</CustomButton>
              <CustomButton href="/contact" variant="outline" size="lg" style={{ borderColor: 'white', color: 'white' }}>Contact Us</CustomButton>
            </div>
          </div>
        </CustomContainer>
      </section>

    </div>
  );
};

export default WenbaScreen;
