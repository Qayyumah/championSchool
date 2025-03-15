import React from 'react'
import styles from '../assets/footer.module.css'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div style={{
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            minHeight: '500px',
            backgroundColor: '#f6f7fd',
            width:'100%',
            paddingBottom:'80px'
        }} className={styles.footBackground}>

            <div className={styles.footerContactInfo}>
                <address className={styles.address}>
                    <h3>The Champion School Texas​</h3>
                    <p style={{marginBottom:'0'}}>1234 Demo Ave, Austin, TX 56789,</p>
                    <p style={{marginTop:'0'}}>United States.</p>
                </address>

                <office className={styles.office}>
                    <h3>Main Office</h3>
                    <p style={{marginBottom:'0'}}>+1 123-456-7890</p>
                    <p style={{marginTop:'0'}}>8:00 a.m. – 4:00 p.m.</p>
                </office>

                <attendance className={styles.attendance}>
                    <h3>Attendance</h3>
                    <p style={{marginBottom:'0'}}>+1 123 -456-7891</p>
                    <p style={{marginTop:'0'}}>mail@example.com</p>
                </attendance>
            </div>

            <footerNav className={styles.footerNav}>
                <div className={styles.footerDisplay}>
                    <footerLogo className={styles.footerLogo}>
                        <img src='/images/logo.svg'/>
                    </footerLogo>

                    <div className={styles.footerLink}>
                        <a>Home</a>
                        <a>About</a>
                        <a>Academics</a>
                        <a>Activities</a>
                        <a>Contact</a>
                    </div>

                    <footerSocials className={styles.footerSocials}>
                        <AiOutlineTwitter size={22} color="#2049b8" />
                        <FaFacebookF style={{backgroundColor:'#2049b8', fontSize:'18px', paddingTop:'6px', paddingLeft:'3px', paddingRight:'3px', borderRadius:'50%', color:'white'}}/>
                        <AiOutlineInstagram size={22} color='#2049b8'/>
                    </footerSocials>
                </div>
            </footerNav>

            <span>Copyright © 2025 School | Powered by School.</span>

        </div>

       
    </footer>
  )
}

export default Footer

