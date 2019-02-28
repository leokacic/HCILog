import React from "react";
import SiteContainerBlog from "../SiteContainerBlog";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
import MenuButton from "../MenuButton"
import Overlay from "../Overlay"
import SideMenu from "../SideMenu"
// eslint-disable-next-line
import _ from "../../styles/index.css";

class Layout extends React.Component{
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
    const { children } = this.props;
    const status = this.state.showSideMenu ? "open" : "closed";
    console.log("test: ", this.props.test);
    return (
    <SiteContainerBlog>
    <Header />
    <Main>{children}</Main>
    <MenuButton status={status} onClick={this.showMenu} />
    <Overlay status={status} onClick={this.showMenu} />
    <SideMenu status={status} />
    <Footer />
  </SiteContainerBlog>
    );
  }
  
}

export default Layout;
