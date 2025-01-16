import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Gallery.module.css";
import g1 from "../../public/g-1.jpg";
import g2 from "../../public/g-2.jpg";
import g3 from "../../public/g-3.jpg";
import g4 from "../../public/g-4.jpg";
import g5 from "../../public/g-5.jpg";
import g6 from "../../public/g-6.jpg";
import g7 from "../../public/g-7.jpg";
import g8 from "../../public/g-8.jpg";
import g9 from "../../public/g-9.jpg";

const Gallery: React.FC = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

  return (
    <div className={styles.gBody}>
      <div className={`${styles.heading} text-center`}>
        <span>Gallery</span>
        <p className={styles.sTitle}>Our Gallery</p>
      </div>
      <div className={styles.gImages}>
        <Container>
          <Row className="pb-5">
            {images.map((image, index) => (
              <Col sm="12" md="6" lg="4" className="mt-4" key={index}>
                <Image 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className={styles.imgFluid} 
                  width={370} 
                  height={273} 
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
