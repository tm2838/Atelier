/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import GalleryButton from './GalleryButton.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: 0,
      thumb: 0,
    }
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleImageClick(index) {
    let main = index + this.state.thumb;
    this.setState({
      main
    })
  }

  handleNavClick(direction) {
    if (direction === 'up') {
      let thumb = this.state.thumb - 1;
      this.setState({
        thumb
      })
    } else if (direction === 'right') {
      let main = this.state.main + 1;
      this.setState({
        main
      })
    } else if (direction === 'down') {
      let thumb = this.state.thumb + 1;
      this.setState({
        thumb
      })
    } else if (direction === 'left') {
      let main = this.state.main - 1;
      this.setState({
        main
      })
    }
  }

  render() {
    return (
      <div>
        {
          (this.props.styles.length === 0)
            ? <figure>
              <img className='gallery-img' alt='Main image'></img>
            </figure>

            : <div className='gallery'>
              <figure className='gallery-main'>
                <img
                src={this.props.styles[0].photos[this.state.main].url}
                className='gallery-img'
                alt='Main image'>
                </img>
              </figure>

              <figure className='gallery-thumb-0' onClick={() => this.handleImageClick(0)}>
                <img
                src={this.props.styles[0].photos[this.state.thumb].thumbnail_url}
                className='gallery-thumb'
                alt='Thumbnail'>
                </img>
              </figure>

              <figure className='gallery-thumb-1' onClick={() => this.handleImageClick(1)}>
                <img
                src={this.props.styles[0].photos[this.state.thumb + 1].thumbnail_url}
                className='gallery-thumb'
                alt='Thumbnail'>
                </img>
              </figure>

              <figure className='gallery-thumb-2' onClick={() => this.handleImageClick(2)}>
                <img
                src={this.props.styles[0].photos[this.state.thumb + 2].thumbnail_url}
                className='gallery-thumb'
                alt='Thumbnail'>
                </img>
              </figure>

              <figure className='gallery-thumb-3' onClick={() => this.handleImageClick(3)}>
                <img
                src={this.props.styles[0].photos[this.state.thumb + 3].thumbnail_url}
                className='gallery-thumb'
                alt='Thumbnail'>
                </img>
              </figure>

              <figure className='gallery-thumb-4' onClick={() => this.handleImageClick(4)}>
                <img
                src={this.props.styles[0].photos[this.state.thumb + 4].thumbnail_url}
                className='gallery-thumb'
                alt='Thumbnail'>
                </img>
              </figure>

              {this.props.styles.length > 0 && this.state.main < this.props.styles[0].photos.length - 1 &&
              <figure className='gallery-nav-right'>
                <GalleryButton direction='right' icon={'arrow-right'} onClick={this.handleNavClick} />
              </figure>}

              {this.props.styles.length > 0 && this.state.main > 0 &&
              <figure className='gallery-nav-left'>
                <GalleryButton direction={'left'} icon={'arrow-left'} onClick={this.handleNavClick} />
              </figure>}

              {this.props.styles.length > 0 && this.state.thumb > 0 &&
              <figure className='gallery-nav-up'>
                <GalleryButton direction={'up'} icon={'angle-up'} onClick={this.handleNavClick} />
              </figure>}

              {this.props.styles.length > 0 && this.state.thumb + 4 < this.props.styles[0].photos.length - 1 &&
              <figure className='gallery-nav-down'>
                <GalleryButton direction={'down'} icon={'angle-down'} onClick={this.handleNavClick} />
              </figure>}
            </div>
        }
        <div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  styles: state.styleList
});

export default connect(mapStateToProps)(ImageGallery);
