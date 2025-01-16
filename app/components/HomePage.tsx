'use client';

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import bg1 from "../../public/bg-top1.jpg";
import bg2 from "../../public/bg-top2.jpg";
import bg3 from "../../public/bg-top3.jpg";

const HomePage: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            src={bg1}
            alt="Slide 1"
            className="d-block w-100"
            // width={500}
            // height={300}
            // style={{ objectFit: "cover"}}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={bg2}
            alt="Slide 2"
            className="d-block w-100"
            // width={500}
            // height={300}
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={bg3}
            alt="Slide 3"
            className="d-block w-100"
            // width={500}
            // height={300}
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
