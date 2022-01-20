/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import changeColorTheme from '../../actions/toggleColorTheme';
import './commonUI.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { theme, changeTheme } = this.props;
    const themes = ['LIGHT', 'DARK'];
    const newTheme = themes.filter((option) => option !== theme)[0];
    changeTheme(newTheme);
  }

  render() {
    const { theme } = this.props;
    const themeClassNavBar = theme === 'LIGHT' ? 'nav-bar' : 'nav-bar-dark';
    const themeClassLogo = theme === 'LIGHT' ? 'logo' : 'logo-dark';
    return (
      <div className={themeClassNavBar} id='nav-bar'>
        <FontAwesomeIcon id='logo' className={themeClassLogo} icon='paw' size='4x' data-testid="logo" onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (newTheme) => dispatch(changeColorTheme(newTheme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
