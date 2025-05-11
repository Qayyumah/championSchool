import Header from "./Header"
import styles from "../assets/home.module.css"
import About from "./About"
import Service from "./Service"
import Academic from "./Academic"
import Activities from "./Activities"
import Contact from "./Contact"
import Footer from "./Footer"
import { FaPhone, FaEnvelope } from "react-icons/fa"

const Home = () => {
  return (
    <div>
      <Header />

      <div
        style={{
          backgroundImage: `url('/images/homeImg.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "500px",
        }}
        className={styles.hero}
      >
        <div className={styles.text}>
          <h1>Empowering Young Minds for a Brighter Tomorrow</h1>
          <p>
            Providing Quality Education Rooted in Excellence, Discipline, Integrity, and a Passion for lifelong learning
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:+2349046372403" className={styles.ctaButton}>
              <FaPhone className={styles.ctaIcon} /> +234 904 637 2403
            </a>
            <a href="mailto:www.hisfavour@gmail.com" className={styles.ctaButton}>
              <FaEnvelope className={styles.ctaIcon} /> www.hisfavourprivateschool@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className={styles.welcomeSection}>
        <h2>Shaping Future Leaders with Excellence</h2>
        <p>
          Welcome to His Favour High School, where we nurture young minds with a blend of academic excellence, moral
          discipline, and spiritual growth. Located in Nigeria, we provide a supportive environment that fosters
          intellectual development and prepares students for global success.
        </p>
        <p>
          With experienced teachers, modern facilities, and diverse extracurricular activities, we equip our students
          with the tools to excel. Guided by excellence, integrity, and faith, we are committed to shaping responsible
          leaders who will positively impact society.
        </p>
        <a href="/about" className={styles.learnMoreBtn}>
          Learn More
        </a>
      </div>

      <About />

      <Service />

      <Academic />

      <Activities />

      <Contact />

      <Footer />
    </div>
  )
}

export default Home
