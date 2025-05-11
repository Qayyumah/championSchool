import styles from "../assets/academic.module.css"
import { MdHorizontalRule } from "react-icons/md"

const Academic = () => {
  return (
    <div className={styles.curricular}>
      <div className={styles.overviewText}>
        <h2>Curriculum Overview</h2>
        <div className={styles.overText2}>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <p>
          We aim at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.
          </p>
        </div>
      </div>

      <offer>
        <div className={styles.offerBox}>
          <img src="/images/com-scie.jpg" />
          <h3>Mathematics</h3>
        </div>

        <div className={styles.offerBox}>
          <img src="/images/arts.jpg" />
          <h3>Languages</h3>
        </div>

        <div className={styles.offerBox}>
          <img src="/images/humanities.jpg" />
          <h3>Sciences</h3>
        </div>

        <div className={styles.offerBox}>
          <img src="/images/science.jpg" />
          <h3>Arts</h3>
        </div>

        <div className={styles.offerBox}>
          <img src="/images/mathematics.jpg" />
          <h3>Finances</h3>
        </div>

        <div className={styles.offerBox}>
          <img src="/images/languages.jpg" />
          <h3>Computer Sciences</h3>
        </div>
      </offer>
    </div>
  )
}

export default Academic
