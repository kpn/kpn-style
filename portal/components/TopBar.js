import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from './../App';
import kpnLogoImage from './../assets/image/logo-kpn.png';

/**
 * Top bar
 */
const TopBar = (props) => (
  <nav className="app-layout__top-bar top-bar">
    <NavLink className="top-bar__logo" to="/"><img alt="KPN logo" src={kpnLogoImage} /></NavLink>
    <NavLink className="top-bar__title" to="/">{props.title}</NavLink>
    {props.children}
  </nav>
);

export { TopBar };

/**
 * Top bar menu
 */
class TopBarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accesabilityLinkActive: false
    };

    this.toggleAccesabilityLink = this.toggleAccesabilityLink.bind(this);
  }

  toggleAccesabilityLink() {
    if(this.state.accesabilityLinkActive) {
      this.setState({
        accesabilityLinkActive: false
      });
    } else {
      this.setState({
        accesabilityLinkActive: true
      });
    }
  }

  render() {
    return(
      <AppContext.Consumer>
        {({setSideBarActive, toggleBlackAndWhite, blackAndWhiteActive}) => (
          <ul className="top-bar__menu">
            {this.props.children}

            <li className="top-bar__item">
              <span className={`top-bar__link ${this.state.accesabilityLinkActive ? 'top-bar__link--expanded' : 'top-bar__link--collapsed'}`}
                onClick={this.toggleAccesabilityLink}>
                <i className="ui-show"></i>
                <span className="hidden-xs">Accesability</span>
              </span>
              <ul className={`top-bar__action-menu ${this.state.accesabilityLinkActive ? 'top-bar__action-menu--visible' : ''}`}>
                <li>
                  <small>Color blindness code examples</small>
                  <span className="top-bar__link" onClick={()=> { toggleBlackAndWhite(); this.toggleAccesabilityLink() }}>
                    Turn {blackAndWhiteActive ? 'off' : 'on'} black and white
                  </span>
                </li>
              </ul>
            </li>

            <li className="top-bar__item top-bar__item--trigger" onClick={setSideBarActive}>
              Menu
            </li>
          </ul>
        )}
      </AppContext.Consumer>
    );
  }
}

export { TopBarMenu };

/**
 * Top bar link
 */
const TopBarLink = (props) => (
  <li className="top-bar__item">
    <NavLink
      activeClassName="top-bar__link--active"
      className="top-bar__link"
      exact={props.exact ? true : false}
      to={props.to}>
      <i className={`ui-${props.icon}`}></i> {props.title}
    </NavLink>
  </li>
);

export { TopBarLink };
