import React, { useState } from 'react'
import styles from './styles.module.css'
import heart from '../../assets/heart.jpg'
import diabetes from '../../assets/diabetes.jpg'
import eyes from '../../assets/eyes.jpg'
import pain from '../../assets/pain.jpg'
import fertility from '../../assets/fertility.png'
import fibrod from '../../assets/fibrod.jpg'
import impotence from '../../assets/impotence.jpg'
import pros from '../../assets/pros.jpg'
import ulcer from '../../assets/ulcer.jpg'
import consult from '../../assets/consult.jpg'
import hair from '../../assets/hair.jpg'
import massage from '../../assets/massage.jpg'
import weight from '../../assets/weight.jpg'


const ServicesComponent = () => {
    const [more, setMore] = useState(false)

    const showMore = () => {
        setMore(true)
    }

    const showLess = () => {
        setMore(false)
    }
    return (
        <div className={styles.servicesCom}>
            <h3 className="text-center"><b>OUR <span className={styles.green}>SERVICES</span></b></h3><br />
            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={heart} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Heart / Kidney / Lungs and Liver treatment</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={diabetes} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Diabetes / Hypertension & Stroke / Paralysis</p>
                    </div>
                </div>


                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={eyes} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Eyes problem</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={pain} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Rheumatism & Arthritis, Osteo issues and Spondylitis</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={fertility} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Fertility Challenges for both Men and Women</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={fibrod} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Fibroid &  Blocked tubes</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={impotence} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Erectile Dysfunction / impotence</p>
                    </div>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src={pros} alt="Heart" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.green}>Prostrate health issues</p>
                    </div>
                </div>
            </div>
            <div className={more ? styles.show : styles.hide}>
                <div className={styles.servicesGrid}>



                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImage}>
                            <img src={ulcer} alt="Heart" />
                        </div>
                        <div className={styles.serviceText}>
                            <p className={styles.green}>Ulcers/ Pile/Asthma & GERD</p>
                        </div>
                    </div>


                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImage}>
                            <img src={consult} alt="Heart" />
                        </div>
                        <div className={styles.serviceText}>
                            <p className={styles.green}>General Consultation</p>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImage}>
                            <img src={hair} alt="Heart" />
                        </div>
                        <div className={styles.serviceText}>
                            <p className={styles.green}>Skin/hair treatment: Organic Soap/Creams and Essential oils</p>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImage}>
                            <img src={weight} alt="Heart" />
                        </div>
                        <div className={styles.serviceText}>
                            <p className={styles.green}>Weight management/ Nutrition</p>
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImage}>
                            <img src={massage} alt="Heart" />
                        </div>
                        <div className={styles.serviceText}>
                            <p className={styles.green}>Detoxification and Massage therapies</p>
                        </div>
                    </div>

                </div>


            </div>
            <br /><br />
            <div className="text-center col-md-12">
                {more ? <button className={`btn ${styles.greenBtn}`} onClick={showLess}>Show Less</button> : <button className={`btn ${styles.greenBtn}`} onClick={showMore}>Show More</button>}
            </div>
        </div>
    )
}

export default ServicesComponent
