import Header from "./Header"
import Footer from "./Footer"
import styles from "../assets/admissionPage.module.css"
import { MdHorizontalRule } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"

const AdmissionPage = () => {
  return (
    <div>
      <Header />

      <div className={styles.admissionHero}>
        <h1>Admission</h1>
      </div>

      <div className={styles.admissionContent}>
        <div className={styles.admissionIntro}>
          <h2>Take the first step towards a brighter future</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <p>
            Join our school at His Favour High School. We welcome students who are eager to learn, grow, and excel in a
            supportive and challenging academic environment.
          </p>
        </div>

        <div className={styles.admissionProcess}>
          <h2>Admission Process</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Contact Us</h3>
                <p>Visit the school or reach out to us to purchase an admission form.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Submit Application</h3>
                <p>Complete and return the form with all required documents.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Entrance Examination</h3>
                <p>Attend our scheduled entrance examination to assess academic readiness.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Admission Offer</h3>
                <p>Qualified students will receive an admission letter with enrollment instructions.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3>Enrollment & Resumption</h3>
                <p>Complete the enrollment process and join us for the academic session.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.requiredDocuments}>
          <h2>Required Documents</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />

          <ul className={styles.documentsList}>
            <li>
              <FaCheckCircle className={styles.checkIcon} /> Completed application form
            </li>
            <li>
              <FaCheckCircle className={styles.checkIcon} /> Recent passport photographs
            </li>
            <li>
              <FaCheckCircle className={styles.checkIcon} /> Previous school records
            </li>
            <li>
              <FaCheckCircle className={styles.checkIcon} /> Application fee payment receipt
            </li>
          </ul>
        </div>

        {/* <div className={styles.admissionFAQ}>
          <h2>Frequently Asked Questions</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />

          <div className={styles.faqItem}>
            <h3>What is the age requirement for admission?</h3>
            <p>
              Students must meet the age requirements for their respective class levels as per Nigerian educational
              standards.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>When can I apply for admission?</h3>
            <p>
              Admissions are typically open at the beginning of each academic year, but we also accept transfer students
              during the school year based on availability.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How can I prepare my child for the entrance examination?</h3>
            <p>
              The examination covers age-appropriate knowledge in Mathematics, English, and General Knowledge. Regular
              study of the Nigerian curriculum will help prepare your child.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Are there scholarships available?</h3>
            <p>
              We offer limited merit-based scholarships for exceptional students. Please inquire during the application
              process for more information.
            </p>
          </div>
        </div> */}

        <div className={styles.enrollCTA}>
          <h2>Enroll Today!</h2>
          <p>Take the first step towards providing your child with a quality education that will shape their future.</p>
          <div className={styles.contactButtons}>
            <a href="tel:+2349046372403" className={styles.contactButton}>
              Call Us: +234 904 637 2403
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AdmissionPage
