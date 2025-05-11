"use client"

import { useEffect, useState, useRef } from "react"
import styles from "../assets/about.module.css"
import { MdHorizontalRule } from "react-icons/md"
import { FaArrowRight } from "react-icons/fa"

// Counter component with Intersection Observer
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          let start = 0
          const step = Math.ceil(target / 100)
          const interval = setInterval(() => {
            start += step
            if (start >= target) {
              start = target
              clearInterval(interval)
            }
            setCount(start)
          }, 20)
        }
      },
      { threshold: 0.5 }, // Start counting when 50% visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasStarted])

  return (
    <div ref={ref} className={styles.numbers}>
      <p>{count}</p>
      <span>{suffix}</span>
    </div>
  )
}

// Main About Component
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutOneDiv}>
        <div className={styles.learning}>
          <h2>Learning Begins With Us</h2>
          <div className={styles.lineIco}>
            <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          </div>
        </div>

        <div className={styles.earlyLearning}>
          <div>
            <p>
            At His Favour High School, we are dedicated to empowering students to achieve their fullest potential through quality education, discipline, and a strong moral foundation.

            </p>
          </div>
          <div className={styles.rightDiv}>
            <p>
            Our mission is to inspire excellence, foster creativity, and nurture future leaders who will excel academically and contribute meaningfully to society. Together, we build a community of lifelong learners committed to making a difference.

            </p>
          </div>
        </div>
      </div>

      <div className={styles.line}>
        <hr />
      </div>

      <div className={styles.aboutTwoDiv}>
        <h4>His Favour High School at a Glance</h4>

        <div className={styles.expertise}>
          <div className={styles.enrollment}>
            <Counter target={10} suffix="+" />
            <p style={{ marginTop: "-70px", color: "#76767f", fontSize: "16px" }}>Current Enrollments</p>
          </div>

          <div className={styles.staff}>
            <Counter target={15} suffix="+" />
            <p style={{ marginTop: "-70px", color: "#76767f" }}>Qualified Staff</p>
          </div>

          <div className={styles.clubs}>
            <Counter target={50} suffix="+" />
            <p style={{ marginTop: "-70px", color: "#76767f" }}>Graduates</p>
          </div>

          <div className={styles.members}>
            <Counter target={60} suffix="+" />
            <p style={{ marginTop: "-70px", color: "#76767f" }}>Happy Guardians</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
