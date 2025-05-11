import Header from "./Header"
import Footer from "./Footer"
import styles from "../assets/activitiesPage.module.css"
import { MdHorizontalRule } from "react-icons/md"
import Activities from "./Activities"

const ActivitiesPage = () => {
  return (
    <div>
      <Header />

      <div className={styles.activitiesHero}>
        <h1>Our Activities</h1>
      </div>

      <div className={styles.activitiesContent}>
        <div className={styles.activitiesIntro}>
          <h2>Extracurricular Excellence</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <p>
            At His Favour High School, we believe in the holistic development of our students. Our diverse range of
            extracurricular activities complement our academic program, helping students discover and nurture their
            talents while developing essential life skills.
          </p>
        </div>

        <Activities />

        <div className={styles.activitiesDetail}>
          <h2>Our Activities Program</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />

          <div className={styles.activityCategory}>
            <h3>Sports</h3>
            <div className={styles.activitiesGrid}>
              <div className={styles.activityCard}>
                <h4>Football</h4>
                <p>Develop teamwork, strategy, and physical fitness through Nigeria's most popular sport.</p>
              </div>
              <div className={styles.activityCard}>
                <h4>Athletics</h4>
                <p>Track and field events that promote individual excellence and determination.</p>
              </div>
            </div>
          </div>

          <div className={styles.activityCategory}>
            <h3>Cultural Activities</h3>
            <div className={styles.activitiesGrid}>
              <div className={styles.activityCard}>
                <h4>Drama</h4>
                <p>Express creativity and build confidence through theatrical performances.</p>
              </div>
              <div className={styles.activityCard}>
                <h4>Debate</h4>
                <p>Sharpen critical thinking and public speaking skills through structured debates.</p>
              </div>
            </div>
          </div>

          <div className={styles.activityCategory}>
            <h3>Educational Enrichment</h3>
            <div className={styles.activitiesGrid}>
              <div className={styles.activityCard}>
                <h4>Excursions</h4>
                <p>Educational trips to historical sites, museums, and institutions that bring learning to life.</p>
              </div>
              <div className={styles.activityCard}>
                <h4>Award Ceremonies</h4>
                <p>Recognition events that celebrate student achievements and motivate excellence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2>Benefits of Our Activities Program</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Character Development</h3>
              <p>Building integrity, discipline, and perseverance through structured activities.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Leadership Skills</h3>
              <p>Opportunities to lead teams and projects, developing essential management abilities.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Social Skills</h3>
              <p>Fostering friendships, collaboration, and effective communication.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Balanced Growth</h3>
              <p>Complementing academic learning with physical, creative, and social development.</p>
            </div>
          </div>
        </div>

        <div className={styles.enrollCTA}>
          <h2>Join Our Vibrant Community</h2>
          <p>Contact us to enrol your child as part of our school at His Favour High School</p>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ActivitiesPage
