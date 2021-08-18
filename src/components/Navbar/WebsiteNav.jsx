import React, { useState } from 'react'
import styles from './web.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";


const WebsiteNav = () => {
    const [expand, setExpand] = useState(false)

    const expandHandler = () => {
        setExpand(true)
    }
    const collapseHandler = () => {
        setExpand(false)
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.webNavGrid}>
                <div className={styles.navItems}>
                    <Link to="/">
                        <img src={logo} alt="Navbar" />
                    </Link>
                </div>
                <div className={styles.navToggle}>{expand ? <span onClick={collapseHandler}><FaTimes /></span> : <span onClick={expandHandler}><FaBars /></span>}</div>
                <div className={expand ? `${styles.navList}` : `${styles.navItems} ${styles.navPadding}`}>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT US</Link></li>
                        {/* <li><Link to="/services">SERVICES</Link></li> */}
                        <li><Link to="/book-appointment">BOOK APPOINTMENT</Link></li>
                        <li>  <Link to="/store"><FaShoppingBag /> STORE</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>




                </div>

            </div>

        </div>
    )
}

export default WebsiteNav
