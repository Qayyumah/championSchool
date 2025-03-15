import React, { useEffect, useState, useRef } from "react"
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
            { threshold: 0.5 } // Start counting when 50% visible
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
                        <MdHorizontalRule size={50} style={{ color: "#2049b8" }} />
                    </div>
                </div>

                <div className={styles.earlyLearning}>
                    <div>
                        <p>
                            We, at Champion School offer supportive and inspirational environments
                            for young enquiring minds to learn and grow with us. Our passion for
                            learning means we achieve more than outstanding results. We strive to
                            build confident and creative thinkers and aim at delivering an education
                            that is truly relevant to their future.
                        </p>
                    </div>
                    <div className={styles.rightDiv}>
                        <p>
                            We are an early learning academy focused on social-emotional development
                            and early literacy and numeracy. Our students walk out with the character
                            and confidence to make their mark in the world, equipped with the knowledge
                            and real-world skills that take them way ahead in the industry they may serve.
                        </p>
                        <a className={styles.knowMore}>
                            <FaArrowRight style={{ height: "15px", width: "15px" }} />
                            Know More About Us
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.line}>
                <hr />
            </div>

            <div className={styles.aboutTwoDiv}>
                <h4>Champion School at a Glance</h4>

                <div className={styles.expertise}>
                    <div className={styles.enrollment}>
                        <Counter target={2} suffix="K+" />
                        <p style={{marginTop:'-70px', color:'#76767f', fontSize:'16px'}}>Current Enrollments</p>
                    </div>

                    <div className={styles.staff}>
                        <Counter target={90} suffix="+" />
                        <p style={{marginTop:'-70px', color:'#76767f'}}>Qualified Staff</p>
                    </div>

                    <div className={styles.clubs}>
                        <Counter target={80} suffix="+" />
                        <p style={{marginTop:'-70px', color:'#76767f'}}>Clubs & Activities</p>
                    </div>

                    <div className={styles.members}>
                        <Counter target={100} suffix="+" />
                        <p style={{marginTop:'-70px', color:'#76767f'}}>Active PTFA Members</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About