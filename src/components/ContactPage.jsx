"use client"

import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../assets/contactPage.module.css"
import { MdHorizontalRule, MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const ContactPage = () => {

  return (
    <div>
      <Header />

      <div className={styles.contactHero}>
        <h1>Contact Us</h1>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactIntro}>
          <h2>Get in Touch</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <p>
            We're here to answer any questions you may have about His Favour High School. Reach out to us and we'll
            respond as soon as we can.
          </p>
        </div>

        <div className={styles.contactInfoSection}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MdLocationOn className={styles.infoIcon} />
              </div>
              <h3>Our Location</h3>
              <p>1, Ikishe Road, Igbile-Ijebu,</p>
              <p>Ogun state, Nigeria.</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MdPhone className={styles.infoIcon} />
              </div>
              <h3>Phone Number</h3>
              <p>+234 904 637 2403</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MdEmail className={styles.infoIcon} />
              </div>
              <h3>Email Address</h3>
              <p>www.hisfavourprivateschool@gmail.com</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MdAccessTime className={styles.infoIcon} />
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
