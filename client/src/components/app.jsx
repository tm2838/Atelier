/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './common/fontAwesomeIcons';

import NavBar from './common/navBar.jsx';
import Wrapper from './Wrapper.jsx';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact={false} path='/product/:productId' component={Wrapper} {...this.props}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
