import React from 'react'
import styles from '../assets/activity.module.css'
import { FaDotCircle } from 'react-icons/fa'
import { MdHorizontalRule } from 'react-icons/md'

const Activities = () => {
  return (
    <div className={styles.actiSection}>
        <div style={{
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            backgroundColor: '#f6f7fd',
            // margin:'80px 0px',
        }} className={styles.actiImage}>
        
            <img src='/images/activities.jpg'/>
        </div>

        <curricular className={styles.curriActiv}>
            <h2>Our Co-curricular Activities</h2>

            <MdHorizontalRule size={50} style={{ color: "#2049b8" }} />

            <div className={styles.curriBox}>
                <athletics className={styles.curriActiInfo}>
                    <FaDotCircle size={30} style={{color:'#2049b8', marginTop:'35px'}} className={styles.circleIcon}/>
                    <div className={styles.infoDisplay}>
                        <h3>Athletics</h3>
                        <span>Our students are passionate about sports and 
                        athletics and have the freedom to choose the one they like and wish to take up.</span>
                    </div>
                </athletics>

                <publication className={styles.curriActiInfo}>
                    <FaDotCircle size={30} style={{color:'#2049b8', marginTop:'35px'}}/>
                    <div className={styles.infoDisplay}>
                        <h3>In-house Publications</h3>
                        <span>We have several writers who are encouraged to 
                        come up with creations that are regularly published in our in-house magazines.</span>
                    </div>
                </publication>

                <performing className={styles.curriActiInfo}>
                    <FaDotCircle size={30} style={{color:'#2049b8', marginTop:'35px'}}/>
                    <div className={styles.infoDisplay}>
                        <h3>Performing Arts & Music</h3>
                        <span>With professionals on board, 
                        we take pride in training our students in art forms like dance, drama, painting and more.</span>
                    </div>
                </performing>
            </div>
        </curricular>
    </div>
  )
}

export default Activities