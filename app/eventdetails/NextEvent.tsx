import React from "react";
import styles from "./NextEvent.module.css";

const NextEvent = () => {
  return (
    <div className={styles.nextEvent}>
      <div className={styles.eventLeft}>
        <p className={styles.subtitle}>LET'S TALK</p>
        <h1 className={styles.title}>
          <span className={styles.outlinedText}>ABOUT YOUR</span> <br />
          NEXT EVENT.
        </h1>
      </div>
      <div className={styles.eventRight}>
        <button type="submit" className={styles.getButton}>
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default NextEvent;
