"use client"

import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../assets/galleryPage.module.css"
import { MdHorizontalRule, MdClose } from "react-icons/md"

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: "/images/activities.jpg", alt: "School Activities", category: "Activities" },
    { src: "/images/arts.jpg", alt: "Fine Arts Class", category: "Academics" },
    { src: "/images/com-scie.jpg", alt: "Computer Science Lab", category: "Academics" },
    { src: "/images/homeImg.jpg", alt: "School Building", category: "Campus" },
    { src: "/images/humanities.jpg", alt: "Humanities Class", category: "Academics" },
    { src: "/images/languages.jpg", alt: "Language Learning", category: "Academics" },
    { src: "/images/mathematics.jpg", alt: "Mathematics Class", category: "Academics" },
    { src: "/images/school-preview.jpg", alt: "School Overview", category: "Campus" },
    { src: "/images/science.jpg", alt: "Science Lab", category: "Academics" },
  ]

  const [filter, setFilter] = useState("All")

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div>
      <Header />

      <div className={styles.galleryHero}>
        <h1>Our Gallery</h1>
      </div>

      <div className={styles.galleryContent}>
        <div className={styles.galleryIntro}>
          <h2>Capturing Moments at His Favour High School</h2>
          <MdHorizontalRule size={50} style={{ color: "#29166E" }} />
          <p>
            Explore our gallery to see the vibrant life at His Favour High School. From academic excellence to
            extracurricular activities, our photos showcase the diverse experiences that shape our students' journey.
          </p>
        </div>

        <div className={styles.galleryFilters}>
          <button
            className={`${styles.filterButton} ${filter === "All" ? styles.active : ""}`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`${styles.filterButton} ${filter === "Academics" ? styles.active : ""}`}
            onClick={() => setFilter("Academics")}
          >
            Academics
          </button>
          <button
            className={`${styles.filterButton} ${filter === "Activities" ? styles.active : ""}`}
            onClick={() => setFilter("Activities")}
          >
            Activities
          </button>
          <button
            className={`${styles.filterButton} ${filter === "Campus" ? styles.active : ""}`}
            onClick={() => setFilter("Campus")}
          >
            Campus
          </button>
        </div>

        <div className={styles.galleryGrid}>
          {filteredImages.map((image, index) => (
            <div key={index} className={styles.galleryItem} onClick={() => setSelectedImage(image)}>
              <img src={image.src || "/placeholder.svg"} alt={image.alt} />
              <div className={styles.imageOverlay}>
                <p>{image.alt}</p>
                <span>{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
              <MdClose size={24} />
            </button>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} />
              <div className={styles.imageCaption}>
                <h3>{selectedImage.alt}</h3>
                <p>{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        <div className={styles.enrollCTA}>
          <h2>Experience His Favour High School</h2>
          <p>Visit our campus to see firsthand the quality education and facilities we offer</p>
          <a href="/contact" className={styles.contactButton}>
            Schedule a Visit
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GalleryPage
