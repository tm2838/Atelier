/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import ImageMain from './ImageMain.jsx';
import ImageZoomed from './ImageZoomed.jsx';
import ImageList from './ImageList.jsx';
import NavList from './ImageNavList.jsx';
import ExpandButton from './ImageExButton.jsx';
import IconList from './ImageIconList.jsx';

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

          {
            (!this.props.imageView)
              ? <>
                <ImageMain photo={this.props.currentStyle.photos[this.state.main].url} />
                <ImageList
                  thumb={this.state.thumb}
                  handleImageClick={this.handleThumbClick} />
                <NavList
                  main={this.state.main}
                  thumb={this.state.thumb}
                  handleNavClick={this.handleNavClick} />
                <ExpandButton />
              </>
              : <>
                {
                  (!this.state.isZoomed)
                    ? <>
                      <ImageMain
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
                      onClick={this.handleZoom} />
                }
              </>
          }
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
