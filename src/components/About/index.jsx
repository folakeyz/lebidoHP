import React from 'react'
import styles from './styles.module.css'
import img from '../../assets/pharmacy.jpg'
import { Link } from 'react-router-dom'

const AboutComponent = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutGrid}>
                <div className={styles.aboutContents}>
                    <h3><b><span className={styles.green}>ABOUT</span> US</b></h3>
                    <p>The great Physician, Dr Alen Geenberg once said and I quote: "As a retired physician, I can honestly say that unless you are in serious accident,
                        your best chance of living to a ripe old age is to avoid
                        doctors and hospitals and learn nutrition, herbal medicines and other forms of natural medicine unless you are fortunate enough to have a
                        Naturopathic Physician available.    <br /> <br />Almost all drugs are toxic and are deigned to treat symptoms and not cure anyone."
                        The philosopher Aristotle also said that you are what you eat...

                        <br /> <br />
                        Our goal at  LEBIDOHP2 Healthcare is to return man back to Eden, through the use of natural medicines and also guarding you
                        against food not to eat  and those to eat  to ensure you are  healthy and remain so...</p>
                    <Link to="/about" className={`btn ${styles.greenBtn}`}>Read More</Link>
                </div>
                <div className={styles.aboutContents}>
                    <div className={styles.color}></div>
                    <img src={img} alt="About" />

                </div>
            </div>
        </div>
    )
}

export default AboutComponent
