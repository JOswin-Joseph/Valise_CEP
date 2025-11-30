// src/components/common/Header.jsx
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // optionally close if window is resized to desktop (prevents stale mobile open)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        // set header height CSS var — keep synced with your CSS --header-height value
        style={{ "--header-height": "72px" }}
      >
        <div className={styles.inner}>
          <a href="/" className={styles.brand} aria-label="Homepage">
            {/* replace /logo.png with your actual logo path */}
            <img src={logo} alt="Site logo" className={styles.brandLogo} />
          </a>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#courses" className={styles.navLink}>Courses</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className={styles.actions}>
              <a href="#explore" className={styles.signupBtn}>Explore Courses</a>
            </div>

            <button
              className={styles.mobileToggle}
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {!open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu/backdrop (starts below the fixed header via CSS var) */}
      {open && (
        <>
          <div
            className={styles.mobileBackdrop}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="mobile-menu"
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <nav className={styles.mobileNav}>
              <a href="#home" className={styles.mobileNavLink} onClick={() => setOpen(false)}>Home</a>
              <a href="#courses" className={styles.mobileNavLink} onClick={() => setOpen(false)}>Courses</a>
              <a href="#about" className={styles.mobileNavLink} onClick={() => setOpen(false)}>About</a>
              <a href="#contact" className={styles.mobileNavLink} onClick={() => setOpen(false)}>Contact</a>

              <div style={{ marginTop: "auto", padding: "12px 18px" }}>
                <a
                  href="#get-started"
                  className={styles.mobileBtnAccent}
                  style={{ display: "block", padding: "12px 14px" }}
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
