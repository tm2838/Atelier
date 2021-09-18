/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Style from './Style.jsx';

class StyleList extends React.Component {
  render() {
    return (
      <div>
        <p className='style-name' data-testid='style-name'><b>STYLE &gt;</b> {this.props.styles[0].name}</p>
        {
          this.props.styles.map((style) => {
            const photo = style.photos[0].thumbnail_url;
            const index = style.style_id % 10;
            return <Style key={style.style_id} photo={photo} index={index} />;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  styles: state.styleList,
});

export default connect(mapStateToProps)(StyleList);
