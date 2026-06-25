import React, { useState, useEffect } from "react";
import Link from "next/link";


import styles from "./Header.module.scss";
import { 
  GeoAltFill, TelephoneFill, EnvelopeFill, Globe, 
  ChevronDown, HeartFill, House, Gear, Briefcase, People, List 
} from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);
  
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.topbar} role="banner">
        <span><GeoAltFill /> 601 &#8220;DEEPA&#8221;, Choolaimedu High Road, Chennai &#8211; 600094</span>
        <div className={styles.topbarRight}>
          <a href="tel:+914443514334"><TelephoneFill /> 044 4351 4334</a>
          <a href="mailto:info@siawed.org"><EnvelopeFill /> info@siawed.org</a>
          <a href="http://www.siawed.org" target="_blank" rel="noopener noreferrer"><Globe /> www.siawed.org</a>
        </div>
      </div>

      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <Link href="/" className={styles.navLogo} aria-label="SIAWED Home">
          <Image src="/logo/logo4.png" alt="SIAWED" width={200} />
        </Link>

        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About <span className={styles.navLinkArrow}><ChevronDown /></span>
            </Link>
            <div className={styles.dropdown}>
              <span className={styles.dropdownLabel}>Organisation</span>
              <Link href="/about" className={styles.dropdownLink}>Who We Are</Link>
              <Link href="/about#vision" className={styles.dropdownLink}>Vision & Mission</Link>
              <Link href="/about#team" className={styles.dropdownLink}>Our Team</Link>
              <hr className={styles.dropdownDivider}/>
              <span className={styles.dropdownLabel}>Recognition</span>
              <Link href="/awards" className={styles.dropdownLink}>Awards</Link>
              <Link href="/reports" className={styles.dropdownLink}>Annual Reports</Link>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link href="/programs" className={styles.navLink}>
              Programs <span className={styles.navLinkArrow}><ChevronDown /></span>
            </Link>
            <div className={styles.dropdown}>
              <span className={styles.dropdownLabel}>Skill & Enterprise</span>
              <Link href="/programs/entrepreneurship" className={styles.dropdownLink}>Entrepreneurship</Link>
              <Link href="/programs/training" className={styles.dropdownLink}>Training</Link>
              <Link href="/programs/shg" className={styles.dropdownLink}>SHG</Link>
            </div>
          </li>

          <li className={`${styles.navItem} ${styles.navItemWenba}`}>
            <Link href="/wenba" className={styles.navLink}>
              WENBA <span className={styles.navLinkArrow}><ChevronDown /></span>
            </Link>
            <div className={`${styles.dropdown} ${styles.dropdownMega}`}>
              <div className={styles.dropdownCol}>
                <span className={styles.dropdownLabel}>For Vendors</span>
                <Link href="/wenba/register" className={styles.dropdownLink}>Registration</Link>
                <Link href="/wenba/catalogue" className={styles.dropdownLink}>Catalogue</Link>
                <Link href="/wenba/empanelled" className={styles.dropdownLink}>Empanelled</Link>
              </div>
              <div className={styles.dropdownCol}>
                <span className={styles.dropdownLabel}>For Corporates</span>
                <Link href="/wenba/procurement" className={styles.dropdownLink}>Procurement</Link>
                <Link href="/wenba/raise-request" className={styles.dropdownLink}>Raise Request</Link>
                <Link href="/wenba/csr" className={styles.dropdownLink}>CSR</Link>
              </div>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link href="/membership" className={styles.navLink}>
              Membership <span className={styles.navLinkArrow}><ChevronDown /></span>
            </Link>
            <div className={styles.dropdown}>
              <Link href="/membership/join" className={styles.dropdownLink}>Become Member</Link>
              <Link href="/membership/benefits" className={styles.dropdownLink}>Benefits</Link>
              <Link href="/login" className={styles.dropdownLink}>Member Login</Link>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link href="/events" className={styles.navLink}>Events</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>

        <div className={styles.navCtas}>
          <CustomButton href="/login" variant="ghost" size="sm">Login</CustomButton>
          <CustomButton href="/donate" variant="orange" size="sm"><HeartFill /> Donate</CustomButton>
        </div>

        <button 
          className={`${styles.hamburger} ${drawerOpen ? styles.isOpen : ''}`} 
          id="hamburger" 
          aria-label="Toggle menu" 
          aria-expanded={drawerOpen}
          onClick={toggleDrawer}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.isOpen : ''}`} id="drawer" aria-hidden={!drawerOpen}>
        <div className={styles.drawerOverlay} id="drawer-overlay" onClick={closeDrawer}></div>
        <div className={styles.drawerPanel}>
          <div className={styles.drawerHeader}>
            <img src="/assets/images/siawed-logo-nav.png" alt="SIAWED"/>
            <button className={styles.drawerClose} id="drawer-close" onClick={closeDrawer} aria-label="Close menu">&times;</button>
          </div>
          <div className={styles.drawerBody}>
            <div className={styles.drawerItem}>
              <Link href="/" className={styles.drawerTrigger} onClick={closeDrawer}>Home</Link>
            </div>
            <div className={styles.drawerItem}>
              <button className={`${styles.drawerTrigger} ${openSubmenu === 'about' ? styles.isOpen : ''}`} onClick={() => toggleSubmenu('about')}>
                About Us <span className={styles.drawerTriggerChevron}><ChevronDown /></span>
              </button>
              <div className={`${styles.drawerSub} ${openSubmenu === 'about' ? styles.isOpen : ''}`}>
                <Link href="/about" onClick={closeDrawer}>Who We Are</Link>
                <Link href="/about#vision" onClick={closeDrawer}>Vision & Mission</Link>
                <Link href="/about#team" onClick={closeDrawer}>Our Team</Link>
              </div>
            </div>
            <div className={styles.drawerItem}>
              <button className={`${styles.drawerTrigger} ${styles.drawerTriggerWenba} ${openSubmenu === 'wenba' ? styles.isOpen : ''}`} onClick={() => toggleSubmenu('wenba')}>
                WENBA Marketplace <span className={styles.drawerTriggerChevron}><ChevronDown /></span>
              </button>
              <div className={`${styles.drawerSub} ${openSubmenu === 'wenba' ? styles.isOpen : ''}`}>
                <span className={styles.drawerSubLabel}>Vendors</span>
                <Link href="/wenba/register" onClick={closeDrawer}>Registration</Link>
                <Link href="/wenba/catalogue" onClick={closeDrawer}>Catalogue</Link>
                <span className={styles.drawerSubLabel}>Corporates</span>
                <Link href="/wenba/procurement" onClick={closeDrawer}>Procurement</Link>
              </div>
            </div>
            <div className={styles.drawerItem}>
              <Link href="/programs" className={styles.drawerTrigger} onClick={closeDrawer}>Programs</Link>
            </div>
            <div className={styles.drawerItem}>
              <Link href="/membership" className={styles.drawerTrigger} onClick={closeDrawer}>Membership</Link>
            </div>
            <div className={styles.drawerItem}>
              <Link href="/contact" className={styles.drawerTrigger} onClick={closeDrawer}>Contact</Link>
            </div>
          </div>
          <div className={styles.drawerFooter}>
            <CustomButton href="/donate" variant="orange" className={styles.btn} onClick={closeDrawer}><HeartFill /> Donate</CustomButton>
            <CustomButton href="/login" variant="outline-blue" className={styles.btn} onClick={closeDrawer}>Member Login</CustomButton>
          </div>
        </div>
      </div>

      {/* BOTTOM TABS FOR MOBILE */}
      <nav className={styles.bottomTabs}>
        <ul className={styles.bottomTabsList}>
          <li className={styles.bottomTabsItem}>
            <Link href="/" className={`${styles.bottomTab} ${styles.isActive}`}>
              <span className={styles.bottomTabIcon}><House /></span>
              Home
            </Link>
          </li>
          <li className={styles.bottomTabsItem}>
            <Link href="/programs" className={styles.bottomTab}>
              <span className={styles.bottomTabIcon}><Gear /></span>
              Programs
            </Link>
          </li>
          <li className={styles.bottomTabsItem}>
            <Link href="/wenba" className={`${styles.bottomTab} ${styles.bottomTabWenba}`}>
              <span className={styles.bottomTabIcon}><Briefcase /></span>
              WENBA
            </Link>
          </li>
          <li className={styles.bottomTabsItem}>
            <Link href="/membership" className={styles.bottomTab}>
              <span className={styles.bottomTabIcon}><People /></span>
              Members
            </Link>
          </li>
          <li className={styles.bottomTabsItem}>
            <button className={styles.bottomTab} onClick={toggleDrawer}>
              <span className={styles.bottomTabIcon}><List /></span>
              More
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
