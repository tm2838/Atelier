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
// import ErrorBoundary from './common/ErrorBoundary.jsx';
import Wrapper from './Wrapper.jsx';

const appStyle = {
  width: '80%',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
};

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={appStyle}>
        <Router>
          <NavBar />
          {/* <ErrorBoundary> */}
            <Switch>
              <Route exact={false} path='/product/:productId' component={Wrapper} {...this.props}>
              </Route>
            </Switch>
          {/* </ErrorBoundary> */}
        </Router>
      </div>
    );
  }
}

export default App;
