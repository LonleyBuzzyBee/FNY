import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import ItemList from './ItemList';
import Signin from "./Signin";
import CreateItem from "./CreateItem";
import { BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";




function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path="/list" component={ItemList}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/create" component={CreateItem}/>
      </Switch>
   </Router>
  )
}


export default App;
