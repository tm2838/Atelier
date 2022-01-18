import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MainImage from './MainImage.jsx';
import ThumbList from './ThumbList.jsx';
import NavList from './NavList.jsx';
import ExpandButton from './ExpandButton.jsx';
import ExpandedImage from './ExpandedImage.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: 0,
      thumb: 0,
    };
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleThumbClick(index, expanded) {
    let main;
    if (!expanded) {
      main = index + this.state.thumb;
    } else {
      main = index;
    }
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
      let { thumb } = this.state;
      if (main > this.state.thumb + 4) {
        thumb += 1;
      }
      this.setState({
        main,
        thumb,
      });
    } else if (direction === 'down') {
      const thumb = this.state.thumb + 1;
      this.setState({
        thumb,
      });
    } else if (direction === 'left') {
      const main = this.state.main - 1;
      let { thumb } = this.state;
      if (main < thumb) {
        thumb -= 1;
      }
      this.setState({
        main,
        thumb,
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
          <>
            <MainImage photo={this.props.currentStyle?.photos[this.state.main]?.url} />
            <ThumbList
              main={this.state.main}
              thumb={this.state.thumb}
              handleImageClick={this.handleThumbClick} />
            <NavList
              main={this.state.main}
              thumb={this.state.thumb}
              handleNavClick={this.handleNavClick} />
            <ExpandButton className={'gallery-modal-open'} icon={'expand'}/>
            {
              this.props.imageView
              && <ExpandedImage
                main={this.state.main}
                thumb={this.state.thumb}
                handleImageClick={this.handleThumbClick}
                handleNavClick={this.handleNavClick}
                />
            }
          </>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  styles: state.styleList,
  currentStyle: state.currentStyle,
  imageView: state.imageView,
});

ImageGallery.propTypes = {
  styles: PropTypes.array,
  currentStyle: PropTypes.object,
  imageView: PropTypes.bool,
};

export default connect(mapStateToProps)(ImageGallery);
