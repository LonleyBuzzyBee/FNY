import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
// import ViewsControl from './ViewsControl.js';
// import Signin from "./Signin";
import { BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";




function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage}/>
      </Switch>
   </Router>
  )
}


export default App;
