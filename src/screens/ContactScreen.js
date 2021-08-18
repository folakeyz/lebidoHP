import React, { useState } from "react";
import WebsiteHero from "../components/Hero/WebsiteHero";
import WebsiteNav from "../components/Navbar/WebsiteNav";
import Footer from "../components/UI/Footer";
import styles from "./styles.module.css";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <WebsiteNav />
      <WebsiteHero title="Contact US" />
      <div className={styles.pagePadding}>
        <form>
          <div className="form-group col-md-12">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group col-md-12">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group col-md-12">
            <label>Phone Number</label>
            <input
              type="tel"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          <div className="form-group col-md-12">
            <label>Purpose</label>
            <textarea
              className="form-control"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <div className="form-group col-md-12">
            <label style={{ visibility: "hidden" }}>submit</label>
            <input
              type="submit"
              className={`btn form-control ${styles.greenBtn}`}
              value="Send"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactScreen;
