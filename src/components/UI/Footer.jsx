import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaPhoneAlt, FaMapMarker, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerCard}>
                    <h4><b>LEBIDOHP2 Healthcare </b></h4>
                    <p>Our goal at LEBIDOHP2 Healthcare is to return man back to Eden, through the use of natural medicines and also
                        guarding you against food not to eat and those to eat to ensure you are healthy and remain so...</p>
                </div>
                <div className={styles.footerCard}>
                    <h5>Quick Links</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/book-appointment">Book Appointment</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCard}>
                    <h5>Contact Us</h5>
                    <p><FaMapMarker /> &nbsp; 37 Mafuluku Road Oshodi, Lagos</p>
                    <p><FaPhoneAlt /> &nbsp; +2348028360719</p>
                    <p><FaEnvelope />&nbsp; info@lebidohp2healthcare.com</p>
                    <h5>Follow us on</h5>
                    <a href="https://facebook.com/"><FaFacebookSquare /></a>
                    <a href="https://twitter.com/"><FaTwitterSquare /></a>
                    <a href="https://instagram.com/"><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
