'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../public/logo.png';
import { Container } from 'react-bootstrap';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <nav className={styles.navbar}>
      
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={220} height={75} />
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776; {/* Unicode for menu (hamburger) icon */}
      </div>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Events</li>
          <li>Inquiry</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Profile</li>
        </ul>
      </div>
    </nav>
    

  );
};

export default Navbar;
