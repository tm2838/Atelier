/* eslint-disable class-methods-use-this */
/* eslint-disable react/display-name */
import React from 'react';
import postInteractions from '../actions/postInteractions';

function withClickTracker(WrappedComponent, widget) {
  return class extends React.Component {
    componentDidMount() {
      document.getElementById(widget).addEventListener('click', (event) => {
        if (!['INPUT', 'TEXTAREA'].includes(event.target.tagName)) {
          event.preventDefault();
        }
        const body = {
          element: event.target.tagName,
          widget,
          time: new Date().toString(),
        };
        postInteractions(body);
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withClickTracker;
