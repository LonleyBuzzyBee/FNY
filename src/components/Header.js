import React, { useState } from 'react';
import logo from './assets/imgs/logoFNY.png'
// import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  //  const adminLoggedIn = useSelector(state => state.admin);


  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{ paddingRight: "100px" }} href="/"><img src={logo} alt="logo" width="80px" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ paddingRight: "100px" }}>
              <NavLink href='/list'>SHOP ALL</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ paddingRight: "100px" }}href='/signin'>SIGN IN</NavLink>
            </NavItem>
            <UncontrolledDropdown style={{ paddingLeft: "950px" }}nav inNavbar className="showDropDown">
            {/* <UncontrolledDropdown nav inNavbar className={adminLoggedIn ? "showDropDown" : "hiddenAdminControls"}> */}
              <DropdownToggle nav caret>
                ADMIN
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href='/create'>CREAT NEW PRODUCT</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </Router>
  );
}

export default Header;

