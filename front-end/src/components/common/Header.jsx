// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/careers', label: 'Careers' },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25 }}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Brand */}
        <Link to="/" className={styles.brand} aria-label="Coursify home">
          <GraduationCap size={24} />
          <span className={styles.brandText}>Coursify</span>
        </Link>

        {/* Desktop navigation */}
        <nav className={styles.desktopNav} role="navigation" aria-label="Main">
          {navLinks.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={styles.navLink}
              aria-current={location.pathname === l.path ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileOpen(v => !v)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          type="button"
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.24 }}
              aria-label="Mobile menu"
            >
              <nav className={styles.mobileNav}>
                {navLinks.map(l => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
