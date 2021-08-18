import React from "react";
import AboutComponent from "../components/About";
import WebsiteHero from "../components/Hero/WebsiteHero";
import WebsiteNav from "../components/Navbar/WebsiteNav";
import Footer from "../components/UI/Footer";

import styles from "./styles.module.css";

const AboutScreen = () => {
  return (
    <div>
      <WebsiteNav />
      <WebsiteHero title="About Us" />
      <div className={styles.pagePadding}>
        <AboutComponent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
