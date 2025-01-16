import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../public/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={220} height={75} />
      </div>
      <div className={styles.navLinks}>
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