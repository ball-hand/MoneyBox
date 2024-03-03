// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
