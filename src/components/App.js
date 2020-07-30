import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import ItemList from './ItemList';
import Signin from "./Signin";
import CreateItem from "./CreateItem";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
// import { useSelector } from 'react-redux';




function App() {

  // const adminLoggedIn = useSelector(state => state.admin);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path="/list" component={ItemList}/>
        <Route exact path="/signin" component={Signin} />
        {/* <div className={adminLoggedIn ? "adminCreate" : "hiddenAdminControls"}> */}
          <Route exact path="/create" component={CreateItem} />
        {/* </div> */}
      </Switch>
   </Router>
  )
}


export default App;
