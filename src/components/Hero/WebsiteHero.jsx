import React from 'react'
import styles from './styles.module.css'

const WebsiteHero = (props) => {
    return (
        <div className={styles.websiteHero}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default WebsiteHero
