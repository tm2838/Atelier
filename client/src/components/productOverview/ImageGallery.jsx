/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import ImageMain from './ImageMain.jsx';
import ImageList from './ImageList.jsx';
import NavList from './ImageNavList.jsx';
import ExpandButton from './ImageExButton.jsx';
// import IconList from './ImageIconList.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: 0,
      thumb: 0,
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleImageClick(index) {
    const main = index + this.state.thumb;
    this.setState({
      main,
    });
  }

  handleNavClick(direction) {
    if (direction === 'up') {
      const thumb = this.state.thumb - 1;
      this.setState({
        thumb,
      });
    } else if (direction === 'right') {
      const main = this.state.main + 1;
      this.setState({
        main,
      });
    } else if (direction === 'down') {
      const thumb = this.state.thumb + 1;
      this.setState({
        thumb,
      });
    } else if (direction === 'left') {
      const main = this.state.main - 1;
      this.setState({
        main,
      });
    }
  }

  render() {
    return (

      (!this.props.styles.length || !Object.keys(this.props.currentStyle).length)
        ? <figure>
          <img className='gallery-img' alt='Loading gallery...'></img>
        </figure>

        : <div className='gallery'>
          <ImageMain photo={this.props.currentStyle.photos[this.state.main].url} />

          <ImageList
          thumb={this.state.thumb}
          handleImageClick={this.handleImageClick}
          />

          <NavList
            main={this.state.main}
            thumb={this.state.thumb}
            handleNavClick={this.handleNavClick}
          />

          <ExpandButton />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  styles: state.styleList,
  currentStyle: state.currentStyle,
  imageView: state.imageView,
});

export default connect(mapStateToProps)(ImageGallery);
