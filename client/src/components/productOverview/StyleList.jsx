/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Style from './Style.jsx';
import changeStyle from '../../actions/productOverview/currentStyle';

class StyleList extends React.Component {
  handleClick(index) {
    const newStyle = this.props.styles[index];
    this.props.changeStyle(newStyle);
  }

  render() {
    return (
      <div>
        <p className='style-name' ><b>STYLE &gt;</b> {this.props.currentStyle.name}</p>
        {
          this.props.styles.map((style, index) => {
            const photo = style.photos[0].thumbnail_url;
            return <Style
              key={style.style_id}
              photo={photo}
              index={index}
              onClick={this.handleClick.bind(this)} />;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  styles: state.styleList,
  currentStyle: state.currentStyle,
});

const mapDispatchToProps = (dispatch) => ({
  changeStyle: (style) => {
    dispatch(changeStyle(style));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StyleList);
