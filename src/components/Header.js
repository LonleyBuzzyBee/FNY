import React, { useState } from 'react';
import logo from './assets/imgs/logoFNY.png'
import ItemList from './ItemList';
import CreateItem from './CreateItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logo} alt="logo" width="50px" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to='/list'>Shop All</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink>
                  <Link to='/create'>Create New Product</Link>
               </NavLink>
                 
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/list">
        <ItemList/>
        </Route>

        <Route exact path="/create">
        <CreateItem/>
        </Route>

        {/* <Route exact path="/edit">
        <CreateItem/>
        </Route> */}

      </Switch>
    </Router>
  );
}

export default Header;

