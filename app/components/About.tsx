import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import about from "../../public/home-about.jpg";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutLeft}>
        <span>ABOUT</span>
        <p className={styles.title}>HI INDIA EVENTS</p>
        <p className={styles.abInfo}>
          hi INDiA was founded in an effort to fulfill such needs of the South
          Asian community abroad in 2008. It is geared towards uniting the South
          Asian community with news that instantly engages it with current and
          community-centric information.
        </p>
        <p className={styles.abInfo}>
          hi INDiA offers its readers a wide variety of reading material,
          covering a plethora of subjects ranging from human interest stories,
          local news, and politics, to sports, fashion and Indian film news.
        </p>
        <button>Read More</button>
      </div>
      <div className={styles.aboutRight}>
        <Image src={about} alt="About Hi India" width={400} height={464} />
        <div className={styles.established}>
          <p>
            We are Established Since, <span>2008</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;