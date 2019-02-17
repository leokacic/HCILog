import React from "react";
import SiteContainerOne from "../SiteContainerOne";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
// eslint-disable-next-line
import _ from "../../styles/index.css";
import Aside from "../Aside";

export default ({ children }) => (
  <SiteContainerOne>
    <Header />
    <Main>{children}</Main>
    <Aside />
    <Footer />
  </SiteContainerOne>
);
