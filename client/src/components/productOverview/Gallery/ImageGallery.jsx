import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MainImage from './MainImage.jsx';
// import ImageZoomed from './ZoomedImage.jsx';
import ImageList from './ThumbList.jsx';
import NavList from './NavList.jsx';
import ExpandButton from './ExpandButton.jsx';
import ExpandedImage from './ExpandedImage.jsx';
// import IconList from './IconList.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: 0,
      thumb: 0,
      isZoomed: false,
    };
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }

  handleThumbClick(index) {
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

  handleZoom() {
    const isZoomed = !this.state.isZoomed;
    this.setState({
      isZoomed,
    });
  }

  render() {
    return (

      (!this.props.styles.length || !Object.keys(this.props.currentStyle).length)
        ? <figure>
          <img className='gallery-img' alt='Loading gallery...'></img>
        </figure>

        : <div className='gallery'>
          <>
            <MainImage photo={this.props.currentStyle.photos[this.state.main].url} />
            <ImageList
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
                onThumbClick={this.handleThumbClick}
                onNavClick={this.handleNavClick}
                />
            }
          </>
          {/* (!this.state.isZoomed)
                  ? <>
                     <MainImage
                        photo={this.props.currentStyle.photos[this.state.main].url}
                        onClick={this.handleZoom} />
                      <IconList
                        thumb={this.state.thumb}
                        handleImageClick={this.handleThumbClick} />
                      <NavList
                        main={this.state.main}
                        thumb={this.state.thumb}
                        handleNavClick={this.handleNavClick}
                      />
                      <ExpandButton />
                    </>
                    : <ImageZoomed
                      photo={this.props.currentStyle.photos[this.state.main].url}
                      onClick={this.handleZoom} /> */}
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
