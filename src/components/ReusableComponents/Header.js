import React, { useState } from 'react';
import logo from '../assets/imgs/logoFNY.png'
import { useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const user = useSelector(state => state.currentUser);
  const isAdmin = useSelector(state => state.admin);

  if( user !== null && isAdmin === true) {
    return (
      <>
          <Navbar color="light" light >
            <NavbarBrand style={{ paddingRight: "100px" }} href="/"><img src={logo} alt="logo" width="80px" /></NavbarBrand>
            <Nav navBar className="mr-auto">
              <NavItem className="mr-2"style={{ paddingRight: "30px" }}>
                <NavLink style={{ color: "grey"}} href='/All'>ALL PRODUCTS</NavLink>
              </NavItem>
              <NavbarText>
                <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
              </NavbarText>
              <NavItem>
                <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Body'>BODY</NavLink>
              </NavItem>
              <NavbarText>
                <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
              </NavbarText>
              <NavItem>
                <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Face'>FACE</NavLink>
              </NavItem>
              <NavbarText>
                <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
              </NavbarText>
              <NavItem>
                <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Lips'>LIPS</NavLink>
              </NavItem>
            </Nav>
            {/* -------------------------------- */}
            <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
            <NavbarToggler style={{ borderStyle: "none" }} onClick={toggleNavbar} className="mr-2" >MY ACCOUNT</NavbarToggler>
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar style={{display:"flex", float:"left"}}>
                  <NavbarText>
                    "HELLO, ADMIN"
                  </NavbarText>
                  <NavItem>
                    <NavLink style={{ paddingRight: "100px" }} href='/Create'>CREATE NEW PRODUCT</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ paddingRight: "100px" }} href='/SignOut'>SIGN OUT</NavLink>
                  </NavItem>
                </Nav>
            </Collapse>
          </Navbar>
      </>
    );
} else if (user !== null) {
    return (
      <>
        <Navbar color="light" light >
         <NavbarBrand style={{ paddingRight: "100px" }} href="/"><img src={logo} alt="logo" width="80px" /></NavbarBrand>
          <Nav navBar className="mr-auto">
            <NavItem className="mr-2"style={{ paddingRight: "30px" }}>
              <NavLink style={{ color: "grey"}} href='/All'>ALL PRODUCTS</NavLink>
            </NavItem>
            <NavbarText>
              <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
            </NavbarText>
            <NavItem>
              <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Body'>BODY</NavLink>
            </NavItem>
            <NavbarText>
              <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
            </NavbarText>
            <NavItem>
              <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Face'>FACE</NavLink>
            </NavItem>
            <NavbarText>
              <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
            </NavbarText>
            <NavItem>
              <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Lips'>LIPS</NavLink>
            </NavItem>
          </Nav>
          {/* -------------------------------- */}
          <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
          <NavbarToggler style={{ borderStyle: "none" }} onClick={toggleNavbar} className="mr-2" >MY ACCOUNT</NavbarToggler>
          <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavbarText>
                 HELLO, { user.email.toUpperCase()}
                </NavbarText>
                <NavItem>
                  <NavLink style={{ paddingRight: "100px" }} href='/SignOut'>SIGN OUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ paddingRight: "100px" }} href='/Checkout'>CHECKOUT</NavLink>
                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar color="light" light >
          <NavbarBrand style={{ paddingRight: "100px" }} href="/"><img src={logo} alt="logo" width="80px" /></NavbarBrand>
            <Nav navBar className="mr-auto">
              <NavItem className="mr-2"style={{ paddingRight: "30px" }}>
                <NavLink style={{ color: "grey"}} href='/All'>ALL PRODUCTS</NavLink>
              </NavItem>
              <NavbarText>
                <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
              </NavbarText>
              <NavItem>
                <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Body'>BODY</NavLink>
              </NavItem>
              <NavbarText>
                <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
              </NavbarText>
              <NavItem>
                <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Face'>FACE</NavLink>
              </NavItem>
              <NavbarText>
                <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
              </NavbarText>
              <NavItem>
                <NavLink style={{  color: "grey",paddingRight: "30px" }} href='/Lips'>LIPS</NavLink>
              </NavItem>
            </Nav>
            {/* -------------------------------- */}
            <NavbarText>
                <span style={{ color: "grey", paddingRight: "30px" }}>|</span>
            </NavbarText>
            <NavbarToggler style={{ borderStyle: "none" }} onClick={toggleNavbar} className="mr-2" >MY ACCOUNT</NavbarToggler>
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink style={{ paddingRight: "100px" }} href='/SignIn' >SIGN IN</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ paddingRight: "100px" }}href='/SignUp'>SIGN UP</NavLink>
                  </NavItem>
                </Nav>
            </Collapse>
          </Navbar>
      </>
    );
  }
}

export default Header;

