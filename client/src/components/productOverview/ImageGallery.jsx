/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import ImageMain from './ImageMain.jsx';
import NavList from './ImageNavList.jsx';
import ExpandButton from './ImageExButton.jsx';

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

          <figure className='gallery-thumb-0' onClick={() => this.handleImageClick(0)}>
            <img
              src={this.props.currentStyle.photos[this.state.thumb].thumbnail_url}
              className='gallery-thumb'
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
