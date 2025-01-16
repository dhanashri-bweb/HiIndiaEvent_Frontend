import React from 'react';
import Image from 'next/image';
import styles from './Footer1.module.css';
import logo from '../../public/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer1: React.FC = () => {
  return (
    <div className={styles.footer1}>
      <Image className="mt-3" src={logo} alt="Logo" />
      <ul className={styles.pt3}>
        <li>About Us</li>
        <li>Services</li>
        <li>Event</li>
        <li>Contact</li>
      </ul>
      <div className={styles.icons}>
        <span className={styles.icon}>
          <FaFacebookF />
        </span>
        <span className={styles.icon}>
          <FaTwitter />
        </span>
        <span className={styles.icon}>
          <FaInstagram />
        </span>
        <span className={styles.icon}>
          <FaYoutube />
        </span>
      </div>
    </div>
  );
};

export default Footer1;
