import React from 'react'
import styles from '../assets/header.module.css'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa";
import styled from "styled-components"


const Header = () => {
  return (
    <header>
      <logo className={styles.logo}>
        <img src='/images/logo.svg'/>
      </logo>

      <div className={styles.headerLink}>
          <a>Home</a>
          <a>About</a>
          <a>Academics</a>
          <a>Activities</a>
          <a>Contact</a>
      </div>

      <socials className={styles.socials}>
          <AiOutlineTwitter size={22} color="#2049b8" />
          <FaFacebookF style={{backgroundColor:'#2049b8', fontSize:'18px', paddingTop:'6px', paddingLeft:'3px', paddingRight:'3px', borderRadius:'50%', color:'white'}}/>
          <AiOutlineInstagram size={22} color='#2049b8'/>
      </socials>
    </header>
  )
}

export default Header