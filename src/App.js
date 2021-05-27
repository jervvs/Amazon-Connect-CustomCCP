import React, {Component} from "react";
import Notifications from 'react-notify-toast';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/main";
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App" styles={{ height: '100px', overflowY: 'scroll' }}>
        <Notifications/>
          <Router>
              <Switch>
                <Route path="/" component={Main} />
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
