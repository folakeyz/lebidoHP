import React from 'react'
import styles from './styles.module.css'
import banner from '../../assets/banner.jpg'

const Hero = () => {
    return (
        <div className={styles.myhero}>
            <img src={banner} alt="Hero" />
        </div>
    )
}

export default Hero
