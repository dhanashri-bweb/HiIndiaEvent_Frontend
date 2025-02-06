import React from "react";
import Navbar from "../components/Navbar";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import Hero from "./Hero";
import Booking from "./Booking";
import NextEvent from "./NextEvent";
import BookingNew from "./BookingNew";

const Eventdetails = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Booking />
      {/* <BookingNew /> */}
      <NextEvent />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Eventdetails;
