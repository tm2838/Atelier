import React from 'react';
import PropTypes from 'prop-types';

class ZoomedImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: `url(${this.props.photo})`,
      backgroundPosition: '0% 0%',
      // backgroundSize:
    };
    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(event) {
    const {
      left, top, width, height,
    } = event.target.getBoundingClientRect();
    const x = (event.pageX - left) / (width * 100);
    const y = (event.pageY - top) / (height * 100);
    this.setState({
      backgroundPosition: `${x}% ${y}%`,
    });
  }

  render() {
    return (
      <figure
      className='gallery-zoomed'
      style={this.state}
      onMouseMove={(event) => this.handleMove(event)}
      onClick={() => this.props.onClick()} >
        <img
          src={this.props.photo}
          style={{ opacity: 0 }}
          className='gallery-img'
          data-testid='gallery-img'
          alt='Main image'>
        </img>
      </figure>
    );
  }
}

ZoomedImage.propTypes = {
  photo: PropTypes.string,
  onClick: PropTypes.func,
};

export default ZoomedImage;
