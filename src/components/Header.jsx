import React, { useState } from "react";
import styles from "../assets/header.module.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <header>
      <div className={styles.logo}>
        <img src="/images/logo.svg" />
      </div>

      <div className={styles.headerLink}>
        <a>Home</a>
        <a>About</a>
        <a>Academics</a>
        <a>Activities</a>
        <a>Contact</a>
      </div>

      <div className={styles.socials}>
        <AiOutlineTwitter size={22} color="#2049b8" />
        <FaFacebookF
          style={{
            backgroundColor: "#2049b8",
            fontSize: "18px",
            paddingTop: "6px",
            paddingLeft: "3px",
            paddingRight: "3px",
            borderRadius: "50%",
            color: "white",
          }}
        />
        <AiOutlineInstagram size={22} color="#2049b8" />
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Academics</a>
            </li>
            <li>
              <a href="#">Activities</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>

          <NavSocials>
            <AiOutlineTwitter size={22} color="#2049b8" />
            <FaFacebookF
              style={{
                backgroundColor: "#2049b8",
                fontSize: "18px",
                paddingTop: "6px",
                paddingLeft: "3px",
                paddingRight: "3px",
                borderRadius: "50%",
                color: "white",
              }}
            />
            <AiOutlineInstagram size={22} color="#2049b8" />
          </NavSocials>
        </BurgerNav>
      </div>
    </header>
  );
};

export default Header;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
  font-size: 20px;
  background-color: #2049b8;
  color: white;
  padding: 10px;
`;

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
  box-shadow: ${({ show }) =>
    show ? "0px 0px 15px rgba(0, 0, 0, 0.2)" : "none"}; /* Thicker effect */


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
`;

const CustomClose = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  top: 20px;
  right: 20px;
  border: 1px dashed black; 
  padding: 8px;
`;

const CloseWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 10px;
`;

const NavSocials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;