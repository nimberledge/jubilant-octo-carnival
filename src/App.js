import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginPage from './components/LoginPage';
import ConnectPage from './components/ConnectPage';
import ProfilePage from './components/ProfilePage';
import ArtisanForm from './components/ArtisanForm';
import DesignerForm from './components/DesignerForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/artisan" component={ArtisanForm} />
            <Route path="/designer" component={DesignerForm} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/connect" component={ConnectPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
