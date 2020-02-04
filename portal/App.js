import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route } from 'react-router-dom';

import axe from 'react-axe';

import Main from './components/Main';
import MarkDownLoader from './components/MarkDownLoader';
import { SideBar, SideBarMenu, SideBarLink, SideBarSubMenu } from './components/SideBar';
import { TopBar, TopBarMenu } from './components/TopBar';

/**
 * Pages
 */
// Start
import Start from './Start';

// Getting started
import QuickStartMd from './../README.md';
import ContributingMd from './../CONTRIBUTING.md';
import CodingConventionsMd from './../CODING-CONVENTIONS.md';

// Changelog
import ChangelogMd from './../CHANGELOG.md';

// Live editor
import LiveEditor from './LiveEditor';

// Base
import AnimationMd from './../packages/base/animation/ANIMATION.md';
import ColorMd from './../packages/base/color/COLOR.md';
import CommonMd from './../packages/base/common/COMMON.md';
import ContainerMd from './../packages/base/container/CONTAINER.md';
import HyperlinkMd from './../packages/base/hyperlink/HYPERLINK.md';
import MediaMd from './../packages/base/media/MEDIA.md';
import ScreenMd from './../packages/base/screen/SCREEN.md';
import ServiceIconMd from './../packages/base/service-icon/SERVICE-ICON.md';
import SpaceMd from './../packages/base/space/SPACE.md';
import TypographyMd from './../packages/base/typography/TYPOGRAPHY.md';
import UiIconMd from './../packages/base/ui-icon/UI-ICON.md';

// Component
import AccordionMd from './../packages/component/accordion/ACCORDION.md';
import ActionMenuMd from './../packages/component/action-menu/ACTION-MENU.md';
import BlockMd from './../packages/component/block/BLOCK.md';
import BreadcrumbMd from './../packages/component/breadcrumb/BREADCRUMB.md';
import { ButtonData } from './../packages/component/button/data.js';
import CardMd from './../packages/component/card/CARD.md';
import ContentMd from './../packages/component/content/CONTENT.md';
import DialogMd from './../packages/component/dialog/DIALOG.md';
import InputMd from './../packages/component/input/INPUT.md';
import ListMd from './../packages/component/list/LIST.md';
import NotificationMd from './../packages/component/notification/NOTIFICATION.md';
import ModalMd from './../packages/component/modal/MODAL.md';
import MouseoverMd from './../packages/component/mouseover/MOUSEOVER.md';
import PaginationMd from './../packages/component/pagination/PAGINATION.md';
import ProgressMd from './../packages/component/progress/PROGRESS.md';
import SliderMd from './../packages/component/slider/SLIDER.md';
import TabMd from './../packages/component/tab/TAB.md';
import TableMd from './../packages/component/table/TABLE.md';
import TileMd from './../packages/component/tile/TILE.md';
import Tooltip from './../packages/component/tooltip/TOOLTIP.md';

// Layout
import AppLayoutMd from './../packages/layout/app-layout/APP-LAYOUT.md';
import BackdropMd from './../packages/layout/backdrop/BACKDROP.md';
import BannerMd from './../packages/layout/banner/BANNER.md';
import FooterMd from './../packages/layout/footer/FOOTER.md';
import GridMd from './../packages/layout/grid/GRID.md';
import JumbotronMd from './../packages/layout/jumbotron/JUMBOTRON.md';
import MegaMenuMd from './../packages/layout/mega-menu/MEGA-MENU.md';
import PitchMd from './../packages/layout/pitch/PITCH.md';
import SideBarMd from './../packages/layout/side-bar/SIDE-BAR.md';
import TitleBarMd from './../packages/layout/title-bar/TITLE-BAR.md';
import TopBarMd from './../packages/layout/top-bar/TOP-BAR.md';
import WebLayoutMd from './../packages/layout/web-layout/WEB-LAYOUT.md';

// Theme
import BusinessMarketMd from './../packages/theme/business-market/BUSINESS-MARKET.md';

axe(React, ReactDOM, 1000);

// App context
const AppContext = React.createContext({
  sideBarActive: false
});

export { AppContext };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarActive: false
    };

    this.setSideBarActive = this.setSideBarActive.bind(this);
    this.setSideBarInActive = this.setSideBarInActive.bind(this);
  }

  setSideBarActive() {
    this.setState({
      sideBarActive: true
    });
  }

  setSideBarInActive() {
    this.setState({
      sideBarActive: false
    });
  }

  getSideBarLink(data) {
    return <SideBarLink title={data.title} to={data.path} />
  }

  getRoutes(data) {
    let routes;

    function getRoute(routeData) {
     return <Route key={routeData.title} path={routeData.path} render={(props) => <MarkDownLoader content={routeData.content} title={routeData.title} data={data} {...props} />} />
    }

    if(Array.isArray(data.content)) {
      routes = <>
        {data.path ? <Route exact path={data.path} render={() => <Redirect to={data.content[0].path} />} /> : ''}
        {data.content.map(getRoute)}
      </>;
    } else {
      routes = getRoute(data)
    }

    return routes;
  }

  render() {
    return(
      <AppContext.Provider value={{setSideBarActive: this.setSideBarActive, setSideBarInActive: this.setSideBarInActive}}>
        <div className={`app-layout ${this.state.sideBarActive ? 'app-layout--active-side-bar' : ''}`}>
          <TopBar title="KPN Style">
            <TopBarMenu />
          </TopBar>

          <SideBar>
            <SideBarMenu>
              <SideBarLink title="Start" to="/" icon="home" />

              <SideBarSubMenu title="Getting started" icon="manual">
                <SideBarLink title="Quick start" to="/getting-started/quick-start" />
                <SideBarLink title="Contributing" to="/getting-started/contributing" />
                <SideBarLink title="Coding conventions" to="/getting-started/coding-conventions" />
                <SideBarLink title="Changelog" to="/getting-started/changelog" />
              </SideBarSubMenu>

              <SideBarSubMenu title="Base" icon="circle">
                <SideBarLink title="Animation" to="/base/animation" />
                <SideBarLink title="Color" to="/base/color" />
                <SideBarLink title="Common" to="/base/common" />
                <SideBarLink title="Container" to="/base/container" />
                <SideBarLink title="Hyperlink" to="/base/hyperlink" />
                <SideBarLink title="Media" to="/base/media" />
                <SideBarLink title="Screen" to="/base/screen" />
                <SideBarLink title="Service icon" to="/base/service-icon" />
                <SideBarLink title="Space" to="/base/space" />
                <SideBarLink title="Typography" to="/base/typography" />
                <SideBarLink title="UI icon" to="/base/ui-icon" />
              </SideBarSubMenu>

              <SideBarSubMenu title="Component" icon="network">
                <SideBarLink title="Accordion" to="/component/accordion" />
                <SideBarLink title="Action menu" to="/component/action-menu" />
                <SideBarLink title="Block" to="/component/block" />
                <SideBarLink title="Breadcrumb" to="/component/breadcrumb" />
                {this.getSideBarLink(ButtonData)}
                <SideBarLink title="Card" to="/component/card" />
                <SideBarLink title="Content" to="/component/content" />
                <SideBarLink title="Dialog" to="/component/dialog" />
                <SideBarLink title="Input" to="/component/input" />
                <SideBarLink title="List" to="/component/list" />
                <SideBarLink title="Modal" to="/component/modal" />
                <SideBarLink title="Mouseover" to="/component/mouseover" />
                <SideBarLink title="Notification" to="/component/notification" />
                <SideBarLink title="Pagination" to="/component/pagination" />
                <SideBarLink title="Progress" to="/component/Progress" />
                <SideBarLink title="Slider" to="/component/slider" />
                <SideBarLink title="Tab" to="/component/tabs" />
                <SideBarLink title="Table" to="/component/table" />
                <SideBarLink title="Tile" to="/component/tile" />
                <SideBarLink title="Tooltip" to="/component/tooltip" />
              </SideBarSubMenu>

              <SideBarSubMenu title="Layout" icon="document">
                <SideBarLink title="App layout" to="/layout/app-layout" />
                <SideBarLink title="Backdrop" to="/layout/backdrop" />
                <SideBarLink title="Banner" to="/layout/banner" />
                <SideBarLink title="Footer" to="/layout/footer" />
                <SideBarLink title="Grid" to="/layout/grid" />
                <SideBarLink title="Jumbotron" to="/layout/jumbotron" />
                <SideBarLink title="Mega menu" to="/layout/mega-menu" />
                <SideBarLink title="Pitch" to="/layout/pitch" />
                <SideBarLink title="Side bar" to="/layout/side-bar" />
                <SideBarLink title="Title bar" to="/layout/title-bar" />
                <SideBarLink title="Top bar" to="/layout/top-bar" />
                <SideBarLink title="Web layout" to="/layout/web-layout" />
              </SideBarSubMenu>

              <SideBarSubMenu title="Theme" icon="settings">
                <SideBarLink title="Business Market" to="/theme/business-market" />
              </SideBarSubMenu>
            </SideBarMenu>
          </SideBar>

          <Main>
            {/* Start */}
            <Route exact path="/" component={Start} />

            {/* Getting started */}
            <Route path='/getting-started/quick-start' render={(props) => <MarkDownLoader content={QuickStartMd} title="Getting started" {...props} />} />
            <Route path='/getting-started/contributing' render={(props) => <MarkDownLoader content={ContributingMd} title="Getting started" {...props} />} />
            <Route path='/getting-started/coding-conventions' render={(props) => <MarkDownLoader content={CodingConventionsMd} title="Getting started" {...props} />} />
            <Route path='/getting-started/changelog' render={(props) => <MarkDownLoader content={ChangelogMd} title="Getting started" {...props} />} />

            {/* Live editor */}
            <Route path="/live-editor" component={LiveEditor} />

            {/* Base */}
            <Route path='/base/animation' render={(props) => <MarkDownLoader content={AnimationMd} title="Base" {...props} />} />
            <Route path='/base/color' render={(props) => <MarkDownLoader content={ColorMd} title="Base" {...props} />} />
            <Route path='/base/common' render={(props) => <MarkDownLoader content={CommonMd} title="Base" {...props} />} />
            <Route path='/base/container' render={(props) => <MarkDownLoader content={ContainerMd} title="Base" {...props} />} />
            <Route path='/base/hyperlink' render={(props) => <MarkDownLoader content={HyperlinkMd} title="Base" {...props} />} />
            <Route path='/base/media' render={(props) => <MarkDownLoader content={MediaMd} title="Base" {...props} />} />
            <Route path='/base/screen' render={(props) => <MarkDownLoader content={ScreenMd} title="Base" {...props} />} />
            <Route path='/base/service-icon' render={(props) => <MarkDownLoader content={ServiceIconMd} title="Base" {...props} />} />
            <Route path='/base/space' render={(props) => <MarkDownLoader content={SpaceMd} title="Base" {...props} />} />
            <Route path='/base/typography' render={(props) => <MarkDownLoader content={TypographyMd} title="Base" {...props} />} />
            <Route path='/base/ui-icon' render={(props) => <MarkDownLoader content={UiIconMd} title="Base" {...props} />} />

            {/* Component */}
            <Route path='/component/accordion' render={(props) => <MarkDownLoader content={AccordionMd} title="Component" {...props} />} />
            <Route path='/component/action-menu' render={(props) => <MarkDownLoader content={ActionMenuMd} title="Component" {...props} />} />
            <Route path='/component/block' render={(props) => <MarkDownLoader content={BlockMd} title="Component" {...props} />} />
            <Route path='/component/breadcrumb' render={(props) => <MarkDownLoader content={BreadcrumbMd} title="Component" {...props} />} />
            {this.getRoutes(ButtonData)}
            <Route path='/component/card' render={(props) => <MarkDownLoader content={CardMd} title="Component" {...props} />} />
            <Route path='/component/content' render={(props) => <MarkDownLoader content={ContentMd} title="Component" {...props} />} />
            <Route path='/component/dialog' render={(props) => <MarkDownLoader content={DialogMd} title="Component" {...props} />} />
            <Route path='/component/input' render={(props) => <MarkDownLoader content={InputMd} title="Component" {...props} />} />
            <Route path='/component/list' render={(props) => <MarkDownLoader content={ListMd} title="Component" {...props} />} />
            <Route path='/component/modal' render={(props) => <MarkDownLoader content={ModalMd} title="Component" {...props} />} />
            <Route path='/component/mouseover' render={(props) => <MarkDownLoader content={MouseoverMd} title="Component" {...props} />} />
            <Route path='/component/notification' render={(props) => <MarkDownLoader content={NotificationMd} title="Component" {...props} />} />
            <Route path='/component/pagination' render={(props) => <MarkDownLoader content={PaginationMd} title="Component" {...props} />} />
            <Route path='/component/progress' render={(props) => <MarkDownLoader content={ProgressMd} title="Component" {...props} />} />
            <Route path='/component/slider' render={(props) => <MarkDownLoader content={SliderMd} title="Component" {...props} />} />
            <Route path='/component/tabs' render={(props) => <MarkDownLoader content={TabMd} title="Component" {...props} />} />
            <Route path='/component/table' render={(props) => <MarkDownLoader content={TableMd} title="Component" {...props} />} />
            <Route path='/component/tile' render={(props) => <MarkDownLoader content={TileMd} title="Component" {...props} />} />
            <Route path='/component/tooltip' render={(props) => <MarkDownLoader content={Tooltip} title="Component" {...props} />} />

            {/* Layout */}
            <Route path='/layout/app-layout' render={(props) => <MarkDownLoader content={AppLayoutMd} title="Layout" {...props} />} />
            <Route path='/layout/backdrop' render={(props) => <MarkDownLoader content={BackdropMd} title="Layout" {...props} />} />
            <Route path='/layout/banner' render={(props) => <MarkDownLoader content={BannerMd} title="Layout" {...props} />} />
            <Route path='/layout/footer' render={(props) => <MarkDownLoader content={FooterMd} title="Layout" {...props} />} />
            <Route path='/layout/grid' render={(props) => <MarkDownLoader content={GridMd} title="Layout" {...props} />} />
            <Route path='/layout/jumbotron' render={(props) => <MarkDownLoader content={JumbotronMd} title="Layout" {...props} />} />
            <Route path='/layout/mega-menu' render={(props) => <MarkDownLoader content={MegaMenuMd} title="Layout" {...props} />} />
            <Route path='/layout/pitch' render={(props) => <MarkDownLoader content={PitchMd} title="Layout" {...props} />} />
            <Route path='/layout/side-bar' render={(props) => <MarkDownLoader content={SideBarMd} title="Layout" {...props} />} />
            <Route path='/layout/title-bar' render={(props) => <MarkDownLoader content={TitleBarMd} title="Layout" {...props} />} />
            <Route path='/layout/top-bar' render={(props) => <MarkDownLoader content={TopBarMd} title="Layout" {...props} />} />
            <Route path='/layout/web-layout' render={(props) => <MarkDownLoader content={WebLayoutMd} title="Layout" {...props} />} />

            {/* Theme */}
            <Route path='/theme/business-market' render={(props) => <MarkDownLoader content={BusinessMarketMd} title="Theme" {...props} />} />
          </Main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
