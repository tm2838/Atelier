/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import ImageNavButton from './ImageNavButton.jsx';

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
            this.props.currentStyle.photos[4] && <figure className='gallery-thumb-4' data-testid='gallery-thumb-4'
            onClick={() => this.handleImageClick(4)}>
            <img
              src={this.props.currentStyle.photos[this.state.thumb + 4].thumbnail_url}
              className='gallery-thumb'
              alt='Thumbnail'>
            </img>
          </figure>
          }

          {this.props.currentStyle && this.state.main < this.props.currentStyle.photos.length - 1
            && <figure className='gallery-nav-right'>
              <ImageNavButton direction='right' icon={'arrow-right'} onClick={this.handleNavClick} />
            </figure>}

          {this.props.styles.length > 0 && this.state.main > 0
            && <figure className='gallery-nav-left'>
              <ImageNavButton direction={'left'} icon={'arrow-left'} onClick={this.handleNavClick} />
            </figure>}

          {this.props.styles.length > 0 && this.state.thumb > 0
            && <figure className='gallery-nav-up'>
              <ImageNavButton direction={'up'} icon={'angle-up'} onClick={this.handleNavClick} />
            </figure>}

          {this.props.currentStyle
          && this.state.thumb + 4 < this.props.currentStyle.photos.length - 1
            && <figure className='gallery-nav-down'>
              <ImageNavButton direction={'down'} icon={'angle-down'} onClick={this.handleNavClick} />
            </figure>}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  styles: state.styleList,
  currentStyle: state.currentStyle,
});

export default connect(mapStateToProps)(ImageGallery);
