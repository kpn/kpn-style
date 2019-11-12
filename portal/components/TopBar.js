import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from './../App';
import kpnLogoImage from './../assets/image/logo-kpn.png';

/**
 * Top bar
 */
class TopBar extends React.Component {
  render() {
    return(
      <nav className="app-layout__top-bar top-bar">
        <NavLink className="top-bar__logo" to="/"><img alt="KPN logo" src={kpnLogoImage} /></NavLink>
        <NavLink className="top-bar__title" to="/">{this.props.title}</NavLink>
        {this.props.children} 
      </nav> 
    );
  }
}

export { TopBar };

/**
 * Top bar menu
 */
const TopBarMenu = (props) => (
  <AppContext.Consumer>
    {({setSideBarActive}) => (    
      <ul className="top-bar__menu">
        {props.children} 
        <li className="top-bar__item top-bar__item--trigger" onClick={setSideBarActive}>
          Menu
        </li>     
      </ul>
    )}
  </AppContext.Consumer>
);

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
