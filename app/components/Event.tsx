import React from "react";
import Image from "next/image";
import styles from "./Event.module.css";
import corporate from "../../public/corporate-services.jpg";
import events from "../../public/events-mangment.jpg";
import Link from "next/link";

const artists = [
  {
    id: "01",
    date: "06 August 2025 / DETROIT",
    name: "Atul Purohit",
    description:
      "Atul Purohit, a stalwart in popularizing Indian folk music and Garba, stands as a beacon of tradition and authenticity in a rapidly evolving musical landscape.Recognized as a legendary musician, Purohit has trademarked his name, solidifying his brand synonymous with Navratri celebrations globally.",
    image: corporate,
  },
  {
    id: "02",
    date: "16 August 2025 / DETROIT",
    name: "Falguni Pathak",
    description:
      "The universe hums in harmony when Falguni Pathak sings, and her passion pulses vibrantly with every dance move. This infectious energy has endeared her to audiences worldwide, transcending boundaries and resonating deeply with fans. As India's dandiya queen, Pathak's musical journey recently culminated in the Dadasaheb Phalke Excellence Award for 2017... ",
    image: events,
  },
];

const Event: React.FC = () => {
  return (
    <div className={styles.body}>
      {artists.map((artist, index) => (
        <div
          className={`${styles.artist} pt-5`}
          key={index}
          style={index === artists.length - 1 ? { paddingBottom: "7%" } : {}}
        >
          <div className={styles.name}>
            <h2>{artist.name}</h2>
           <Link href="/eventdetails"> <h6>{artist.date}</h6></Link>
          </div>
          <div className={styles.info}>
            <p>{artist.description}</p>
            <button>Book Now</button>
          </div>
          <div className={styles.artistImg}>
            <Image
              src={artist.image}
              alt={artist.name}
              className={styles.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
