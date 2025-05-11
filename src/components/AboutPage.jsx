import Header from "./Header"
import Footer from "./Footer"
import styles from "../assets/aboutPage.module.css"
import { MdHorizontalRule } from "react-icons/md"
import About from "./About"

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className={styles.aboutHero}>
        <h1>About Us</h1>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.welcomeSection}>
          <h2>Welcome to His Favour High School</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <p>
            Welcome to His Favour High School, a leading institution committed to nurturing young minds through a blend
            of academic excellence, moral discipline, and innovative learning. Situated in the heart of Nigeria, our
            school provides a serene and supportive environment where students are encouraged to explore their potential
            and excel in all aspects of life. We pride ourselves on offering a well-rounded education that balances
            intellectual development, character building, and spiritual growth, preparing our students to become
            responsible global citizens.
          </p>
          <p>
            At His Favour High School, we believe every child has the potential to succeed, and we strive to provide the
            tools and opportunities to make that success a reality. Our experienced and dedicated teachers,
            conducive facilities, and robust extracurricular programs ensure that our students receive the best
            possible foundation for their future. Guided by the principles of excellence, integrity, and faith, we are
            committed to shaping future leaders who will make a positive impact on society.
          </p>
        </div>

        <About />

        <div className={styles.visionMission}>
          <div className={styles.visionSection}>
            <h2>Our Vision</h2>
            <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
            <p>
              "To nurture responsible, innovative, and globally competitive individuals who will impact the world
              positively."
            </p>
          </div>

          <div className={styles.missionSection}>
            <h2>Our Mission</h2>
            <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
            <p>
              Provide a holistic education experience combining academic excellence, moral discipline, and
              extracurricular activities.
            </p>
          </div>
        </div>

        <div className={styles.coreValues}>
          <h2>Core Values</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <ul>
            <li>Leadership</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Discipline</li>
            <li>Passion for learning</li>
          </ul>
        </div>

        <div className={styles.whyChooseUs}>
          <h2>Why Choose Us?</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <h3>Qualified Educators</h3>
              <p>Our passionate and experienced teachers are dedicated to student success.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Modern Facilities</h3>
              <p>conducive classrooms and learning resources for optimal education.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Safe Environment</h3>
              <p>A nurturing and secure area where students can focus on learning.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Global Curriculum</h3>
              <p>Education that meets both Nigerian standards and international perspectives.</p>
            </div>
          </div>
        </div>

        <div className={styles.enrollCTA}>
          <h2>Join Our School</h2>
          <p>Contact us to enrol your child as part of our school at His Favour High School</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
