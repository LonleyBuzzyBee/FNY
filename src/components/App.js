import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router} from "react-router-dom";
import AuthProvider from './Routes/Auth'
import '../Scss/main.scss';

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
