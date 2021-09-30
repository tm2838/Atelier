import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Style from './Style.jsx';
import changeStyle from '../../actions/productOverview/currentStyle';

class StyleList extends React.Component {
  handleClick(index) {
    const newStyle = this.props.styles[index];
    this.props.changeStyle(newStyle);
  }

  render() {
    const { currentStyle, styles } = this.props;
    return (
      <div>
        <p className='style-name' data-testid='style-name'><b>STYLE &gt;</b> {currentStyle.name}</p>
        {
          styles.map((style, index) => {
            const photo = style.photos[0].thumbnail_url;
            const selected = style.style_id === currentStyle.style_id;
            return <Style
              key={style.style_id}
              photo={photo}
              index={index}
              selected={selected}
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

StyleList.propTypes = {
  styles: PropTypes.array,
  currentStyle: PropTypes.object,
  changeStyle: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleList);
