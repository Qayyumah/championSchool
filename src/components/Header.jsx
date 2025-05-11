"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "../assets/header.module.css"
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import styled from "styled-components"

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const location = useLocation()

  return (
    <header>
      <div>
        <Link to="/">
          <img className={styles.logo} src="/images/logo.png" alt="His Favour High School Logo" />
        </Link>
      </div>

      <div className={styles.headerLink}>
        <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? styles.active : ""}>
          About
        </Link>
        <Link to="/academics" className={location.pathname === "/academics" ? styles.active : ""}>
          Academics
        </Link>
        <Link to="/activities" className={location.pathname === "/activities" ? styles.active : ""}>
          Activities
        </Link>
        <Link to="/admission" className={location.pathname === "/admission" ? styles.active : ""}>
          Admission
        </Link>
        <Link to="/gallery" className={location.pathname === "/gallery" ? styles.active : ""}>
          Gallery
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? styles.active : ""}>
          Contact
        </Link>
      </div>


      <div className={styles.burgernav}>
        <RightMenu>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <div className={styles.headerLink2}>
            <li>
              <Link to="/" onClick={() => setBurgerStatus(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setBurgerStatus(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/academics" onClick={() => setBurgerStatus(false)}>
                Academics
              </Link>
            </li>
            <li>
              <Link to="/activities" onClick={() => setBurgerStatus(false)}>
                Activities
              </Link>
            </li>
            <li>
              <Link to="/admission" onClick={() => setBurgerStatus(false)}>
                Admission
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setBurgerStatus(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setBurgerStatus(false)}>
                Contact
              </Link>
            </li>
          </div>
        </BurgerNav>
      </div>
    </header>
  )
}

export default Header

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`

const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
  font-size: 20px;
  background-color: #29166E;
  color: white;
  padding: 10px;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  list-style: none;
  background: white; 
  padding: 20px;
  transform: ${({ show }) => (show ? "translateX(0%)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 99999999;
  box-shadow: ${({ show }) => (show ? "0px 0px 15px rgba(0, 0, 0, 0.2)" : "none")}; /* Thicker effect */


  @media (max-width: 768px) {
    width: 80%;
  }

  li {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    a {
      font-weight: bold;
      color: black;
      font-size: 14px;
      text-decoration: none;
    }
  }
`

const CustomClose = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  top: 20px;
  right: 20px;
  border: 1px dashed black; 
  padding: 8px;
`

const CloseWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 10px;
`

const NavSocials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`
