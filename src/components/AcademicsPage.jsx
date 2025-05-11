import Header from "./Header"
import Footer from "./Footer"
import styles from "../assets/academicsPage.module.css"
import { MdHorizontalRule } from "react-icons/md"
import Academic from "./Academic"

const AcademicsPage = () => {
  return (
    <div>
      <Header />

      <div className={styles.academicsHero}>
        <h1>Our Academics</h1>
      </div>

      <div className={styles.academicsContent}>
        <div className={styles.curriculumIntro}>
          <h2>Our Curriculum</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <p>
            At His Favour High School, we adopt a comprehensive curriculum that balances academic excellence with
            creativity and innovation. We follow the Nigerian curriculum, integrating global perspectives to prepare our
            students for local and international success.
          </p>
        </div>

        <Academic />

        <div className={styles.subjectsDetail}>
          <h2>Subjects Offered</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />

          <div className={styles.subjectCard}>
            <h3>Mathematics</h3>
            <p>
              Understanding the game of numbers and logic to solve real-world problems including further Mathematics at
              senior levels.
            </p>
          </div>

          <div className={styles.subjectCard}>
            <h3>Languages</h3>
            <p>Learning more modes of communication particularly English Language.</p>
          </div>

          <div className={styles.subjectCard}>
            <h3>Sciences</h3>
            <p>
              The study that encourages scientific reasoning, discoveries and inventions including basic science,
              agricultural science, etc at junior levels and Physics, Chemistry, Biology, etc at senior levels.
            </p>
          </div>

          <div className={styles.subjectCard}>
            <h3>Arts</h3>
            <p>
              Giving wings to the artists who'd like to take it up as a career or just a hobby - Literature, History,
              Fine Arts, etc.
            </p>
          </div>

          <div className={styles.subjectCard}>
            <h3>Computer Sciences</h3>
            <p>Hands-on experience with IT and modern technology applications.</p>
          </div>

          <div className={styles.subjectCard}>
            <h3>Finances</h3>
            <p>Business Studies, commerce, accounting, etc.</p>
          </div>

          <div className={styles.subjectCard}>
            <h3>Vocational Studies</h3>
            <p>Building future entrepreneurs - Home Economics, Technical Drawing, etc.</p>
          </div>
        </div>

        <div className={styles.facilities}>
          <h2>Our Facilities</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />

          <div className={styles.facilitiesGrid}>
            <div className={styles.facilityItem}>
              <h3>Spacious Classrooms</h3>
              <p>Comfortable learning environments designed for optimal education.</p>
            </div>

            <div className={styles.facilityItem}>
              <h3>Modern Teaching Aids</h3>
              <p>Up-to-date educational resources to enhance learning experiences.</p>
            </div>

            <div className={styles.facilityItem}>
              <h3>Games</h3>
              <p>Recreational activities that promote teamwork and physical development.</p>
            </div>

            <div className={styles.facilityItem}>
              <h3>Sports Equipment</h3>
              <p>Quality gear for various athletic activities and physical education.</p>
            </div>
          </div>
        </div>

        <div className={styles.enrollCTA}>
          <h2>Join Our Academic Community</h2>
          <p>Contact us to enrol your child as part of our school at His Favour High School</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AcademicsPage
