import React from "react";

import SiteContainerOne from "../components/SiteContainerOne";
import OneNews from "../components/OneNews"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
export default () => (
  <SiteContainerOne>
    <Header />
    <OneNews />
    <Aside />
    <Footer />
  </SiteContainerOne>
  );