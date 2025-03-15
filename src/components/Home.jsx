import React from 'react'
import Header from './Header'
import styles from '../assets/home.module.css'
import About from './About'
import Service from './Service'
import Academic from './Academic'
import Activities from './Activities'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Header/>

        <div style={{
            backgroundImage: `url('/images/homeImg.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            minHeight: '500px',
        }} className={styles.hero}>
            <div className={styles.text}>
                <h1>The Champion School Texas</h1>
                <p>
                    This is where we teach students skills the need to
                    transform themselves, others, and our global communities.
                </p>
                <a>Our Academics</a>
            </div>
        </div>

        <About/>

        <Service/>

        <Academic/>

        <Activities/>

        <Contact/>

        <Footer/>
    </div>
  )
}

export default Home