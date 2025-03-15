import React from 'react'
import styles from '../assets/contact.module.css'
import { MdHorizontalRule } from 'react-icons/md'

const Contact = () => {
  return (
      <div style={{
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundColor: '#4747d7',

    }} className={styles.contactSection}>
    
        <subscribe className={styles.subscribe}>
            <div className={styles.subBox}>
              <div className={styles.subscribeText}>
                <MdHorizontalRule size={50} style={{ color: "#fff" }} />
                <h3 style={{marginBottom:'0'}}>Wish to know more about admissions and</h3> <h3 style={{marginTop:'0'}}> updates? 
                Subscribe now!</h3>
              </div>
              <div className={styles.subscribeInfo}>
                <input placeholder='Email Address'/>
                <button>Subscribe</button>
              </div>
            </div>
        </subscribe>

    </div>
  )
}

export default Contact