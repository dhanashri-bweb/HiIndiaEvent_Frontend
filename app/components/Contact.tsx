import React from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';
import bg from '../../public/bg-2.jpg'; 

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.bgImg}>
        <Image src={bg} alt="Background Image" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.watchVideo}>
        <div className={styles.videoBox}>
          <span className={styles.playButton}>&#9654;</span>
          <span className="ps-3">Watch Video</span>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <span>Contact</span>
        <p className={styles.title}>Contact Info</p>
        <div className={styles.moreInfo}>
          <p className={styles.cheading}>Address</p>
          <p className={styles.cinfo}>3152 W. Devon Ave., C-3, Chicago IL 60659</p>
          <p className={styles.cheading}>Email Us</p>
          <p className={styles.cinfo}>+advt@hiindia.com</p>
          <p className={styles.cheading}>Call Us</p>
          <p className={styles.cinfo}>+17735526083</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
