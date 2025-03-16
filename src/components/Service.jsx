import React from 'react'
import styles from '../assets/service.module.css'
import { FaPlay, FaQuoteLeft } from 'react-icons/fa'

const Service = () => {
  return (
    <div className={styles.sevSection}>
        <service className={styles.offer}>
            <div style={{
                backgroundImage: `url('/images/school-preview.jpg')`,
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                borderRadius:'15px',
                position:'relative',

            }} className={styles.Preview}>
            
                <div className={styles.playIco}>
                    <FaPlay size={18} style={{backgroundColor:'#fff', padding:'18px', borderRadius:'50%', color:'#4747d7', cursor:'pointer'}}/>
                </div>
            </div>

           <div className={styles.infoSec}>
                <div className={styles.offerInfo}>
                    <FaQuoteLeft size={30} style={{color:'#4747d7'}}/>

                    <p>We aim at inspiring our students to dream more, learn more, do more, and become more in thier 
                    respective journeys of ife.</p>

                    <span>Jonathan Doe - Headmaster</span>
                </div>
           </div>
        </service>
    </div>
  )
}

export default Service