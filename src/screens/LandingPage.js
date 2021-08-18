import React from "react";
import AboutComponent from "../components/About";
import Slider from "../components/Hero/Slider";
import WebsiteNav from "../components/Navbar/WebsiteNav";
import ServicesComponent from "../components/Services";
import Footer from "../components/UI/Footer";
import Testimonal from "../components/UI/Testimonal";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <>
      <WebsiteNav />
      <Slider />
      <div className={styles.pagePadding}>
        <AboutComponent />
        <ServicesComponent />
        <Testimonal />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
