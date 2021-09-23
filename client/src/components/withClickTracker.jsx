/* eslint-disable class-methods-use-this */
/* eslint-disable react/display-name */
import React from 'react';
import postInteractions from '../actions/postInteractions';

function withClickTracker(WrappedComponent, widget) {
  return class extends React.Component {
    componentDidMount() {
      document.getElementById(widget).addEventListener('click', (event) => {
        event.preventDefault();
        const body = {
          element: event.target.className,
          widget,
          time: event.timeStamp.toString(),
        };
        postInteractions(body);
      });
    }

    // componentWillUnmount() {
    //   document.removeEventListener('click');
    // }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withClickTracker;
