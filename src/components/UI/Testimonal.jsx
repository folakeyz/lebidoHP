import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Testimonal = () => {
    return (
        <div className={styles.testimonial}>
            <div className={styles.testImage}>
                <h1>Testimonials</h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.testCard}>
                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <small><b>John Doe</b></small>
                </div>
                <div className={styles.testCard}>
                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <small><b>Jane Doe</b></small>
                </div>
                <div className={styles.testCard}>
                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <small><b>John Doe</b></small>
                </div>
                <div className={styles.testCard}>
                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <small><b>John Doe</b></small>
                </div>
            </div>
            <div className={`text-center ${styles.testContact}`}>
                <h3>We Care about your Health, Feel Free to  <Link className={`btn btn-warning`}>Contact Us</Link></h3>
            </div>
        </div>
    )
}

export default Testimonal
