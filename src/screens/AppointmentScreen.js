import React, { useState } from "react";
import WebsiteHero from "../components/Hero/WebsiteHero";
import WebsiteNav from "../components/Navbar/WebsiteNav";
import Footer from "../components/UI/Footer";
import styles from "./styles.module.css";

const AppointmentScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [purpose, setPurpose] = useState("");
  return (
    <div>
      <WebsiteNav />
      <WebsiteHero title="Book An Appointment" />
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
            <label>Gender</label>
            <select
              className="form-control"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option>Select ....</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group col-md-12">
            <label>Address</label>
            <textarea
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </div>
          <div className="form-group col-md-12">
            <label>Purpose</label>
            <textarea
              className="form-control"
              onChange={(e) => setPurpose(e.target.value)}
              value={purpose}
            ></textarea>
          </div>
          <div className="form-group col-md-12">
            <label style={{ visibility: "hidden" }}>submit</label>
            <input
              type="submit"
              className={`btn form-control ${styles.greenBtn}`}
              value="Book Appointment"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentScreen;
