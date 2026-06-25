import React, { useState, useEffect } from "react";
import Link from "next/link";


import styles from "./Header.module.scss";
import { 
  GeoAltFill, TelephoneFill, EnvelopeFill, Globe, 
  ChevronDown, HeartFill, House, Gear, Briefcase, People, List 
} from "react-bootstrap-icons";
import { Image } from "react-bootstrap";

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
      <div className="topbar" role="banner">
        <span><GeoAltFill /> 601 &#8220;DEEPA&#8221;, Choolaimedu High Road, Chennai &#8211; 600094</span>
        <div className="topbar__right">
          <a href="tel:+914443514334"><TelephoneFill /> 044 4351 4334</a>
          <a href="mailto:info@siawed.org"><EnvelopeFill /> info@siawed.org</a>
          <a href="http://www.siawed.org" target="_blank" rel="noopener noreferrer"><Globe /> www.siawed.org</a>
        </div>
      </div>

      <nav className="nav" role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav__logo" aria-label="SIAWED Home">
          <Image src="/logo/logo4.png" alt="SIAWED" width={200} />
        </Link>

        <ul className="nav__menu">
          <li className="nav__item">
            <Link href="/" className="nav__link">Home</Link>
          </li>
          
          <li className="nav__item">
            <Link href="/about" className="nav__link">
              About <span className="nav__link-arrow"><ChevronDown /></span>
            </Link>
            <div className="dropdown">
              <span className="dropdown__label">Organisation</span>
              <Link href="/about" className="dropdown__link">Who We Are</Link>
              <Link href="/about#vision" className="dropdown__link">Vision & Mission</Link>
              <Link href="/about#team" className="dropdown__link">Our Team</Link>
              <hr className="dropdown__divider"/>
              <span className="dropdown__label">Recognition</span>
              <Link href="/awards" className="dropdown__link">Awards</Link>
              <Link href="/reports" className="dropdown__link">Annual Reports</Link>
            </div>
          </li>

          <li className="nav__item">
            <Link href="/programs" className="nav__link">
              Programs <span className="nav__link-arrow"><ChevronDown /></span>
            </Link>
            <div className="dropdown">
              <span className="dropdown__label">Skill & Enterprise</span>
              <Link href="/programs/entrepreneurship" className="dropdown__link">Entrepreneurship</Link>
              <Link href="/programs/training" className="dropdown__link">Training</Link>
              <Link href="/programs/shg" className="dropdown__link">SHG</Link>
            </div>
          </li>

          <li className="nav__item nav__item--wenba">
            <Link href="/wenba" className="nav__link">
              WENBA <span className="nav__link-arrow"><ChevronDown /></span>
            </Link>
            <div className="dropdown dropdown--mega">
              <div className="dropdown__col">
                <span className="dropdown__label">For Vendors</span>
                <Link href="/wenba/register" className="dropdown__link">Registration</Link>
                <Link href="/wenba/catalogue" className="dropdown__link">Catalogue</Link>
                <Link href="/wenba/empanelled" className="dropdown__link">Empanelled</Link>
              </div>
              <div className="dropdown__col">
                <span className="dropdown__label">For Corporates</span>
                <Link href="/wenba/procurement" className="dropdown__link">Procurement</Link>
                <Link href="/wenba/raise-request" className="dropdown__link">Raise Request</Link>
                <Link href="/wenba/csr" className="dropdown__link">CSR</Link>
              </div>
            </div>
          </li>

          <li className="nav__item">
            <Link href="/membership" className="nav__link">
              Membership <span className="nav__link-arrow"><ChevronDown /></span>
            </Link>
            <div className="dropdown">
              <Link href="/membership/join" className="dropdown__link">Become Member</Link>
              <Link href="/membership/benefits" className="dropdown__link">Benefits</Link>
              <Link href="/login" className="dropdown__link">Member Login</Link>
            </div>
          </li>

          <li className="nav__item">
            <Link href="/events" className="nav__link">Events</Link>
          </li>
          
          <li className="nav__item">
            <Link href="/contact" className="nav__link">Contact</Link>
          </li>
        </ul>

        <div className="nav__ctas">
          <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
          <Link href="/donate" className="btn btn-orange btn-sm"><HeartFill /> Donate</Link>
        </div>

        <button 
          className={`hamburger ${drawerOpen ? 'is-open' : ''}`} 
          id="hamburger" 
          aria-label="Toggle menu" 
          aria-expanded={drawerOpen}
          onClick={toggleDrawer}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`drawer ${drawerOpen ? 'is-open' : ''}`} id="drawer" aria-hidden={!drawerOpen}>
        <div className="drawer__overlay" id="drawer-overlay" onClick={closeDrawer}></div>
        <div className="drawer__panel">
          <div className="drawer__header">
            <img src="/assets/images/siawed-logo-nav.png" alt="SIAWED"/>
            <button className="drawer__close" id="drawer-close" onClick={closeDrawer} aria-label="Close menu">&times;</button>
          </div>
          <div className="drawer__body">
            <div className="drawer-item">
              <Link href="/" className="drawer-trigger" onClick={closeDrawer}>Home</Link>
            </div>
            <div className="drawer-item">
              <button className={`drawer-trigger ${openSubmenu === 'about' ? 'is-open' : ''}`} onClick={() => toggleSubmenu('about')}>
                About Us <span className="drawer-trigger__chevron"><ChevronDown /></span>
              </button>
              <div className={`drawer-sub ${openSubmenu === 'about' ? 'is-open' : ''}`}>
                <Link href="/about" onClick={closeDrawer}>Who We Are</Link>
                <Link href="/about#vision" onClick={closeDrawer}>Vision & Mission</Link>
                <Link href="/about#team" onClick={closeDrawer}>Our Team</Link>
              </div>
            </div>
            <div className="drawer-item">
              <button className={`drawer-trigger drawer-trigger--wenba ${openSubmenu === 'wenba' ? 'is-open' : ''}`} onClick={() => toggleSubmenu('wenba')}>
                WENBA Marketplace <span className="drawer-trigger__chevron"><ChevronDown /></span>
              </button>
              <div className={`drawer-sub ${openSubmenu === 'wenba' ? 'is-open' : ''}`}>
                <span className="drawer-sub__label">Vendors</span>
                <Link href="/wenba/register" onClick={closeDrawer}>Registration</Link>
                <Link href="/wenba/catalogue" onClick={closeDrawer}>Catalogue</Link>
                <span className="drawer-sub__label">Corporates</span>
                <Link href="/wenba/procurement" onClick={closeDrawer}>Procurement</Link>
              </div>
            </div>
            <div className="drawer-item">
              <Link href="/programs" className="drawer-trigger" onClick={closeDrawer}>Programs</Link>
            </div>
            <div className="drawer-item">
              <Link href="/membership" className="drawer-trigger" onClick={closeDrawer}>Membership</Link>
            </div>
            <div className="drawer-item">
              <Link href="/contact" className="drawer-trigger" onClick={closeDrawer}>Contact</Link>
            </div>
          </div>
          <div className="drawer__footer">
            <Link href="/donate" className="btn btn-orange" onClick={closeDrawer}><HeartFill /> Donate</Link>
            <Link href="/login" className="btn btn-outline-blue" onClick={closeDrawer}>Member Login</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM TABS FOR MOBILE */}
      <nav className="bottom-tabs">
        <ul className="bottom-tabs__list">
          <li className="bottom-tabs__item">
            <Link href="/" className="bottom-tab is-active">
              <span className="bottom-tab__icon"><House /></span>
              Home
            </Link>
          </li>
          <li className="bottom-tabs__item">
            <Link href="/programs" className="bottom-tab">
              <span className="bottom-tab__icon"><Gear /></span>
              Programs
            </Link>
          </li>
          <li className="bottom-tabs__item">
            <Link href="/wenba" className="bottom-tab bottom-tab--wenba">
              <span className="bottom-tab__icon"><Briefcase /></span>
              WENBA
            </Link>
          </li>
          <li className="bottom-tabs__item">
            <Link href="/membership" className="bottom-tab">
              <span className="bottom-tab__icon"><People /></span>
              Members
            </Link>
          </li>
          <li className="bottom-tabs__item">
            <button className="bottom-tab" onClick={toggleDrawer}>
              <span className="bottom-tab__icon"><List /></span>
              More
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
