/* eslint-disable class-methods-use-this */
/* eslint-disable react/display-name */
import React from 'react';

function withClickTracker(WrappedComponent, widget) {
  return class extends React.Component {
    componentDidMount() {
      document.getElementById(widget).addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.className, widget, event.timeStamp);
      });
    }

    componentWillUnmount() {
      document.removeEventListener('click');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withClickTracker;
