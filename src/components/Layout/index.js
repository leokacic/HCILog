import React from "react";
import SiteContainer from "../SiteContainer";
import MainNews from "../MainNews";
import Aside from "../Aside";
import Header from "../Header";
import Footer from "../Footer";
import MenuButton from "../MenuButton"
import Overlay from "../Overlay"
import SideMenu from "../SideMenu"
// eslint-disable-next-line
import _ from "../../styles/index.css";


class Layout extends React.Component {
  state = {
    showSideMenu: false
  };
  showMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

render() {
  const { children } = this.props;
  const status = this.state.showSideMenu ? "open" : "closed";
  console.log(status);
 return (
  <SiteContainer>
    <Header />
    <MainNews>{children}</MainNews>
    <Aside />
    <MenuButton status={status} onClick={this.showMenu} />
    <Overlay status={status} onClick={this.showMenu} />
    <SideMenu status={status} />
    <Footer />
    </SiteContainer>
 );
  
  }
}

export default Layout;