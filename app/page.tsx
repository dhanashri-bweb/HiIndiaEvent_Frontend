import Image from "next/image";
import HomePage from "./components/HomePage";
import Event from "./components/Event";
import About from "./components/About";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Inquiry from "./components/Inquiry";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />

      
      <HomePage />
      <Event />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Inquiry />
      <Footer1 />
      <Footer2 />
    </main>
  );
}
