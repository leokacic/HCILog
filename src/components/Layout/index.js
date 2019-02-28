import React, { Component } from 'react';
import SiteContainer from "../SiteContainer";
import MainNews from "../MainNews";
//import MainOdabir from "../MainOdabir";
import Aside from "../Aside";
import Header from "../Header";
import Footer from "../Footer";
import MenuButton from "../MenuButton"
import Overlay from "../Overlay"
import SideMenu from "../SideMenu"
// eslint-disable-next-line
import _ from "../../styles/index.css";


class Layout extends Component{
  constructor(props) {
      super(props);
      this.state = {
        vijesti: props.data,
        vrsta: props.vrsta
      }
  }
  state = {
    showSideMenu: false
  };
  showMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };
  render() {
    const status = this.state.showSideMenu ? "open" : "closed";
    console.log("test: ", this.props.test);
    return (
      <SiteContainer>
      <Header />
      <MainNews data={this.state.vijesti.main}></MainNews>
      <Aside  data={this.state.vijesti.aside} vrsta={this.state.vrsta}/>
      <MenuButton status={status} onClick={this.showMenu} />
      <Overlay status={status} onClick={this.showMenu} />
      <SideMenu status={status} />
      <Footer />
     </SiteContainer>
    );
  }
  
}

export default Layout;