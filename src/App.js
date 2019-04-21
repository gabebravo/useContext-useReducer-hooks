import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Home from './views/Home';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import NotFound from './views/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;