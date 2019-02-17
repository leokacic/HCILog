import React from "react";
import SEO from "../components/SEO";
import PrivateRoute from "../components/Private/PrivateRoute";
import { Router } from "@reach/router";
import Login from "../components/Private/Login";
import Dashboard from "../components/Private/pages/Dashboard.js";
import Personal from "../components/Private/pages/Personal.js";
import {
  handleLogin,
  handleLogout,
  isLoggedIn
} from "../components/services/authentication/auth.js";
import { navigate } from "gatsby";
import styles from "../styles/pages/private.module.css";
import { SiteContainer } from "../components";
import Header from "../components/Header"

const Logout = () => (
  <a
    href="/"
    onClick={event => {
      event.preventDefault();
      handleLogout();
      navigate("/private");
    }}
    className={styles.Logout}
  >
    Logout
  </a>
);

export default () => (
  <>
    <Header />
    <SEO title="Private" />
    {isLoggedIn() ? (
      <Logout />
    ) : (
      <>
        <h1>Prijava</h1>
        <Login private="/private/dashboard" handleLogin={handleLogin} />
      </>
    )}

    <Router>
      <PrivateRoute
        path="/private/dashboard"
        render={Dashboard}
        redirect={"/private"}
      />

      <PrivateRoute
        path="/private/personal"
        render={Personal}
        redirect={"/private"}
      />
    </Router>
  </>
);
