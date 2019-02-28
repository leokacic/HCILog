import React from "react";
import Container from "../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import { Link } from "gatsby";
import logoImg from "../../images/logo.png";

export default () => (
  <header className={styles.Header}>
    <div className={styles.headerCenter}>
    <Link to="/naslovnica">
      <span className={styles.headerLeft}>
        <img src={logoImg} className={styles.Img} alt="Logo Svijet oko nas" />
        <span className={styles.Logo}>Svijet oko nas</span>
        <div className={styles.kratkilogo}>SoN</div>
      </span>   
      </Link>

      <Nav>
        <NavLink to="/naslovnica"  exact="true">
          Naslovna
        </NavLink>
        <NavLink to="/kultura" id={styles.kultura}>
          Kultura
        </NavLink>
        <NavLink to="/zivotinje" id={styles.zivotinje}>
          Životinje
        </NavLink>
        <NavLink to="/putovanja" id={styles.putovanja}>
          Putovanja
        </NavLink>
        <NavLink to="/zanimljivosti" id={styles.zanimljivosti}>
          Zanimljivosti
        </NavLink>
        <NavLink to="/blog" id={styles.blog}>
          Blog
        </NavLink>
        <NavLink to="/private">Prijava</NavLink>
      </Nav>
    </div>
  </header>
);
