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
          <figure className='gallery-main'>
            <img
              src={this.props.currentStyle.photos[this.state.main].url}
              className='gallery-img'
              data-testid='gallery-img'
              alt='Main image'>
            </img>
          </figure>

          <figure className='gallery-thumb-0' data-testid='gallery-thumb-0' onClick={() => this.handleImageClick(0)}>
            <img
              src={this.props.currentStyle.photos[this.state.thumb].thumbnail_url}
              className='gallery-thumb'
              data-testid='gallery-thumb-img-0'
              alt='Thumbnail'>
            </img>
          </figure>

          {
            this.props.currentStyle.photos[1] && <figure className='gallery-thumb-1' data-testid='gallery-thumb-1'
            onClick={() => this.handleImageClick(1)}>
            <img
              src={this.props.currentStyle.photos[this.state.thumb + 1].thumbnail_url}
              className='gallery-thumb'
              alt='Thumbnail'>
            </img>
          </figure>
          }

          {
            this.props.currentStyle.photos[2] && <figure className='gallery-thumb-2' data-testid='gallery-thumb-2'
            onClick={() => this.handleImageClick(2)}>
            <img
              src={this.props.currentStyle.photos[this.state.thumb + 2].thumbnail_url}
              className='gallery-thumb'
              alt='Thumbnail'>
            </img>
          </figure>
          }

          {
            this.props.currentStyle.photos[3] && <figure className='gallery-thumb-3' data-testid='gallery-thumb-3'
            onClick={() => this.handleImageClick(3)}>
            <img
              src={this.props.currentStyle.photos[this.state.thumb + 3].thumbnail_url}
              className='gallery-thumb'
              alt='Thumbnail'>
            </img>
          </figure>
          }

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
