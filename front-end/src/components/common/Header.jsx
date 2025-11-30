// src/components/common/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

import logo from "../../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // NAV ORDER: Home → Courses → About Us → Blog → Careers
  // Contact is only the CTA button
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      role="banner"
    >
      <div className={styles.inner}>
        {/* BRAND – full logo (icon + text), no wrapper */}
        <Link to="/" className={styles.brand} aria-label="Conzura home">
          <img
            src={logo}
            alt="Conzura Soft Solutions"
            className={styles.brandLogo}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={styles.navLink}
              aria-current={location.pathname === l.path ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA (desktop) – single clear action */}
        <div className={styles.actions}>
          <Link to="/contact" className={styles.signupBtn}>
            Contact us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileOpen((v) => !v)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          type="button"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              className={styles.mobilePanel}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div className={styles.mobileNav}>
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className={`${styles.mobileNavLink} ${styles.mobileBtnAccent}`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
