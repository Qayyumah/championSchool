import { Link } from "react-router-dom";
import styles from "../assets/footer.module.css";
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "500px",
          backgroundColor: "#f6f7fd",
          width: "100%",
          paddingBottom: "80px",
        }}
        className={styles.footBackground}
      >
        <div className={styles.footerContactInfo}>
          <address className={styles.address}>
            <h3>His Favour High School</h3>
            <p style={{ marginBottom: "0" }}>1, Ikishe Road, Igbile-Ijebu,</p>
            <p style={{ marginTop: "0" }}>Ogun state, Nigeria.</p>
          </address>

          <office className={styles.office}>
            <h3>Main Office</h3>
            <p style={{ marginBottom: "0" }}>+234 904 637 2403</p>
            <p style={{ marginTop: "0" }}>8:00 a.m. – 5:00 p.m.</p>
          </office>

          <attendance className={styles.attendance}>
            <h3>Contact</h3>
            <p style={{ marginBottom: "0" }}>+234 904 637 2403</p>
            <p style={{ marginTop: "0" }}>
              www.hisfavourprivateschool@gmail.com
            </p>
          </attendance>
        </div>

        <footerNav className={styles.footerNav}>
          <div className={styles.footerDisplay}>
            <footerLogo className={styles.footerLogo}>
              <img src='/images/logo.png' alt='His Favour High School Logo' />
            </footerLogo>

            <div className={styles.footerLink}>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/academics'>Academics</Link>
              <Link to='/activities'>Activities</Link>
              <Link to='/admission'>Admission</Link>
              <Link to='/gallery'>Gallery</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
        </footerNav>

        <span>
          Copyright © {currentYear} His Favour High School | All Rights Reserved by RC.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
