"use client";

import React, { useState } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroimg from "../../public/single.jpg";

const Hero: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleReadMore = ()=> {
    setShowMore((prev) => !prev);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroimg}>
        <Image src={heroimg} alt="hero-img" />
      </div>
      <div className={styles.heroLeft}>
        <h1>Atul Purohit: Championing Authentic Garba Across Global Stages</h1>
        <hr />
        <p>
          Atul Purohit, a stalwart in popularizing Indian folk music and Garba,
          stands as a beacon of tradition and authenticity in a rapidly evolving
          musical landscape. Recognized as a legendary musician, Purohit has
          trademarked his name, solidifying his brand synonymous with Navratri
          celebrations globally. His unique Garba style resonates deeply within
          the Gujarati community, earning accolades such as the Gujarat Gaurav
          Puruskaar. Staying true to Garba's devotional roots, Purohit emphasizes
          its traditional essence, performed around a Garbi in a single circle,
          without modern embellishments. His commitment to preserving Garba's
          authentic form continues to surprise and inspire newer generations.
        </p>
        {showMore && (
          <p>
            To celebrate and further promote this rich heritage, hiindia.com
            Festival of Life presents the Shri Atul Purohit Garba Events 2025
            across major U.S. cities, including New Jersey, Scranton, PA,
            Connecticut, Maryland, DC, Chicago, Detroit, Columbus, Ohio, Dallas,
            Houston, Greensboro NC, Atlanta, Phoenix AZ, and San Jose CA.
            Anticipated to draw a minimum of 8,000 attendees per city,
            predominantly aged between 13 to 45 years, these events promise to
            captivate audiences across age groups. Recently, Purohit took a
            pivotal step in safeguarding his unique art by trademarking his name
            under the Indian Trademark and Copyright Act. As UNESCO acknowledges
            Garba by inscribing it on its Representative List of the Intangible
            Cultural Heritage of Humanity, Purohit's relentless efforts continue
            to elevate this ancient art form, captivating audiences with his
            melodious voice and steadfast commitment to tradition. For Hosting or
            Sponsorship opportunities, please contact Hemant Brahmbhatt at
            773.552.6083 or visit hiindia.com/events for more information.
          </p>
        )}
        <button onClick={toggleReadMore}>
          {showMore ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
