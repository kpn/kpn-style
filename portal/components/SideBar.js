import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { AppContext } from './../App';

/**
 * Side
 */
const SideBar = (props) => (
  <AppContext.Consumer>
    {({setSideBarInActive}) => (  
      <nav className="app-layout__side-bar side-bar">
        <div className="side-bar__action-bar">
          <button className="side-bar__close" onClick={setSideBarInActive}>Close</button>
        </div>

        {props.children}     
      </nav>
    )}
  </AppContext.Consumer>           
);

export { SideBar };

/**
 * Side menu
 */
const SideBarMenu = (props) => (
  <ul className="side-bar__menu">
    {props.children}  
  </ul>      
);

export { SideBarMenu };

/**
 * Side link
 */
const SideBarLinkWithoutRouter = (props) => {
  const path = props.history.location.pathname;
  let isActive;
  
  // Different handling for root path otherwise startWith '/' will always return true
  if (path === '/' && props.to === '/') {
    isActive = true
    
  } else if(props.to !== '/') {
    // Wrapped in startWith because link should stay active if nested link is active
    isActive = path.startsWith(props.to);
  }

  return (
    <AppContext.Consumer>
      {({setSideBarInActive}) => (
        <li>
          <NavLink 
            className={`side-bar__link ${isActive ? 'side-bar__link--active' : ''}`} 
            exact={props.exact ? true : false} 
            to={props.to}
            onClick={setSideBarInActive}>
            <i className={`ui-${props.icon}`}></i> {props.title}
          </NavLink>
        </li>
      )}
    </AppContext.Consumer>        
  );
};

const SideBarLink = withRouter(SideBarLinkWithoutRouter);
export { SideBarLink };

/**
 * Side sub menu
 */
class SideBarSubMenuWithoutRouter extends React.Component {
  constructor(props) {
    super(props);
    
    // Set initial state
    this.state = {
      active: this.hasActiveChild(),
      visible: this.hasActiveChild()
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    // // Set sub menu active when a route is changing
    this.historyListener = this.props.history.listen(() => {
      this.setState({ 
        active: this.hasActiveChild(),
        visible: this.hasActiveChild()
      });
    });
  }

  componentWillUnmount() {
    // Unlisten history
    this.historyListener();
  }
  
  // Toggle visibility sub menu
  handleClick() {  
    this.setState({ 
      visible: this.state.visible ? false : true
    });
  }
  
  // Look for active links in sub menu 
  hasActiveChild() {
    let hasActiveChild = false;
    React.Children.map(this.props.children, child => {
      // Wrapped in startWith because link should stay active if nested link is active
      if (this.props.history.location.pathname.startsWith(child.props.to)) {
        hasActiveChild = true;
      }
    });
    return hasActiveChild;
  }

  render() {
    return (
      <li>
        <span className={`side-bar__link 
          ${this.state.visible ? 'side-bar__link--expanded' : 'side-bar__link--collapsed'}
          ${this.state.active ? 'side-bar__link--active' : ''}`
          } onClick={this.handleClick}>
          <i className={`ui-${this.props.icon}`}></i>
          {this.props.title}
        </span>
        <ul className={`side-bar__sub-menu ${this.state.visible ? 'side-bar__sub-menu--visible' : ''}`}>
          {this.props.children}
        </ul>       
      </li>
    );
  }
}

const SideBarSubMenu = withRouter(SideBarSubMenuWithoutRouter);
export { SideBarSubMenu };
