import React from "react";

import SiteContainerOne from "../components/SiteContainerOne";
import OneNews from "../components/OneNews"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import data from '../../data.json';

export default () => (
  <SiteContainerOne>
    <Header />
    <OneNews />
    <Aside data={data.NASLOVNICA.aside}/>
    <Footer />
  </SiteContainerOne>
  );