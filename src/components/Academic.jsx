import React from 'react'
import styles from '../assets/academic.module.css'
import { MdHorizontalRule } from 'react-icons/md'

const Academic = () => {
  return (
    <div className={styles.curricular}>
        <div className={styles.overviewText}>
            <h2>Curriculum Overview</h2>
            <div className={styles.overText2}>
                <MdHorizontalRule size={50} style={{ color: "#2049b8" }} />
                <p>
                    The Champion School aims at offering all our students a 
                    broad and balanced curriculum that provides rewarding 
                    and stimulationg activities to prepare them for the best 
                    social and cultural life.
                </p>
            </div>
        </div>

        <offer>
            <div className={styles.offerBox}>
                <img src='/images/com-scie.jpg'/>
                <h3>Computer Science</h3>
                <p>Hands-on experience with the latest programming languages and technology.</p>
            </div>

            <div className={styles.offerBox}>
                <img src='/images/arts.jpg'/>
                <h3>Fine Arts</h3>
                <p>Giving wings to the artists who’d like to take it up as a career or just a hobby.</p>
            </div>

            <div className={styles.offerBox}>
                <img src='/images/humanities.jpg'/>
                <h3>Humanities</h3>
                <p>The study of ancient and modern languages, philosophy, history, and more.</p>
            </div>

            <div className={styles.offerBox}>
                <img src='/images/science.jpg'/>
                <h3>Science</h3>
                <p>The study that encourages scientific reasoning, discoveries and inventions.</p>
            </div>

            <div className={styles.offerBox}>
                <img src='/images/mathematics.jpg'/>
                <h3>Mathematics</h3>
                <p>Understanding the game of numbers and logic to solve real-world problems.</p>
            </div>

            <div className={styles.offerBox}>
                <img src='/images/languages.jpg'/>
                <h3>Languages</h3>
                <p>Learning more modes of communication from different parts of the world.</p>
            </div>
        </offer>
    </div>
  )
}

export default Academic