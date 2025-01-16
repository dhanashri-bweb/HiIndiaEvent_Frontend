import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';
import event from "../../public/events-mangment1.jpg";
import event_1 from "../../public/event.jpg";
import event_2 from "../../public/services-3.jpg";
import event_3 from "../../public/social-events.jpg";

const Services = () => {
  return (
    <div className={styles.sbody}>
      <div className={styles.heading}>
        <span>SERVICES</span>
        <p className={styles.sTitle}>Our Services</p>
      </div>
      <div className={styles.images}>
        <div className={styles.lImg}>
          <div className={styles.imageContainer}>
            <Image className={styles.pb5} src={event} alt="Event Management" />
            <p className={styles.imageText}>Event Management</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src={event_1} alt="Live Show Production" />
            <p className={styles.imageText2}>Live Show Production</p>
          </div>
        </div>
        <div className={styles.rImg}>
          <div className={styles.imageContainer}>
            <Image className={styles.pb5} src={event_2} alt="Corporate Events" />
            <p className={styles.imageText}>Corporate Events</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src={event_3} alt="Social Events" />
            <p className={styles.imageText2}>Social Events</p>
          </div>
        </div>
      </div>
      <button className={styles.button}>View More</button>
    </div>
  );
};

export default Services;
