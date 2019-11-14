import React from 'react';
import { Redirect, Route } from 'react-router-dom';

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
import ContributeMd from './../CONTRIBUTE.md';
import CodingConventionsMd from './../CODING-CONVENTIONS.md';

// Changelog
import ChangelogMd from './../CHANGELOG.md';

// Live editor
import LiveEditor from './LiveEditor';

// Base
import AnimationMd from './../packages/kpn-style/scss/base/animation/ANIMATION.md';
import ColorMd from './../packages/kpn-style/scss/base/color/COLOR.md';
import CommonMd from './../packages/kpn-style/scss/base/common/COMMON.md';
import ContainerMd from './../packages/kpn-style/scss/base/container/CONTAINER.md';
import HyperlinkMd from './../packages/kpn-style/scss/base/hyperlink/HYPERLINK.md';
import MediaMd from './../packages/kpn-style/scss/base/media/MEDIA.md';
import ScreenMd from './../packages/kpn-style/scss/base/screen/SCREEN.md';
import ServiceIconMd from './../packages/kpn-style/scss/base/service-icon/SERVICE-ICON.md';
import SpaceMd from './../packages/kpn-style/scss/base/space/SPACE.md';
import TypographyMd from './../packages/kpn-style/scss/base/typography/TYPOGRAPHY.md';
import UiIconMd from './../packages/kpn-style/scss/base/ui-icon/UI-ICON.md';

// Component
import AccordionMd from './../packages/kpn-style/scss/component/accordion/ACCORDION.md';
import ActionMenuMd from './../packages/kpn-style/scss/component/action-menu/ACTION-MENU.md';
import BlockMd from './../packages/kpn-style/scss/component/block/BLOCK.md';
import BreadcrumbMd from './../packages/kpn-style/scss/component/breadcrumb/BREADCRUMB.md';
import ButtonMd from './../packages/kpn-style/scss/component/button/BUTTON.md';
import CardMd from './../packages/kpn-style/scss/component/card/CARD.md';
import ContentMd from './../packages/kpn-style/scss/component/content/CONTENT.md';
import DialogMd from './../packages/kpn-style/scss/component/dialog/DIALOG.md';
import InputMd from './../packages/kpn-style/scss/component/input/INPUT.md';
import ListMd from './../packages/kpn-style/scss/component/list/LIST.md';
import NotificationMd from './../packages/kpn-style/scss/component/notification/NOTIFICATION.md';
import ModalMd from './../packages/kpn-style/scss/component/modal/MODAL.md';
import MouseoverMd from './../packages/kpn-style/scss/component/mouseover/MOUSEOVER.md';
import PaginationMd from './../packages/kpn-style/scss/component/pagination/PAGINATION.md';
import ProgressMd from './../packages/kpn-style/scss/component/progress/PROGRESS.md';
import SliderMd from './../packages/kpn-style/scss/component/slider/SLIDER.md';
import TabMd from './../packages/kpn-style/scss/component/tab/TAB.md';
import TableMd from './../packages/kpn-style/scss/component/table/TABLE.md';
import TileMd from './../packages/kpn-style/scss/component/tile/TILE.md';
import Tooltip from './../packages/kpn-style/scss/component/tooltip/TOOLTIP.md';

// Layout
import AppLayoutMd from './../packages/kpn-style/scss/layout/app-layout/APP-LAYOUT.md';
import BackdropMd from './../packages/kpn-style/scss/layout/backdrop/BACKDROP.md';
import BannerMd from './../packages/kpn-style/scss/layout/banner/BANNER.md';
import FooterMd from './../packages/kpn-style/scss/layout/footer/FOOTER.md';
import GridMd from './../packages/kpn-style/scss/layout/grid/GRID.md';
import JumbotronMd from './../packages/kpn-style/scss/layout/jumbotron/JUMBOTRON.md';
import MegaMenuMd from './../packages/kpn-style/scss/layout/mega-menu/MEGA-MENU.md';
import PitchMd from './../packages/kpn-style/scss/layout/pitch/PITCH.md';
import SideBarMd from './../packages/kpn-style/scss/layout/side-bar/SIDE-BAR.md';
import TitleBarMd from './../packages/kpn-style/scss/layout/title-bar/TITLE-BAR.md';
import TopBarMd from './../packages/kpn-style/scss/layout/top-bar/TOP-BAR.md';
import WebLayoutMd from './../packages/kpn-style/scss/layout/web-layout/WEB-LAYOUT.md';

// Theme
import BusinessMarketMd from './../packages/kpn-style/scss/theme/business-market/BUSINESS-MARKET.md';

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
                <SideBarLink title="Contribute" to="/getting-started/contribute" />
                <SideBarLink title="Coding conventions" to="/getting-started/coding-conventions" />
                <SideBarLink title="Changelog" to="/changelog" />
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
                <SideBarLink title="Button" to="/component/button" />
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
            <Route exact path="/getting-started" render={() => <Redirect to="/doc/getting-started/quick-start" />} />
            <Route path='/getting-started/quick-start' render={(props) => <MarkDownLoader file={QuickStartMd} title="Getting started" {...props} />} />
            <Route path='/getting-started/contribute' render={(props) => <MarkDownLoader file={ContributeMd} title="Getting started" {...props} />} />
            <Route path='/getting-started/coding-conventions' render={(props) => <MarkDownLoader file={CodingConventionsMd} title="Getting started" {...props} />} />

            {/* Changelog */}
            <Route path='/changelog' render={(props) => <MarkDownLoader file={ChangelogMd} title="Changelog" {...props} />} />

            {/* Live editor */}
            <Route path="/live-editor" component={LiveEditor} />

            {/* Base */}
            <Route exact path="/base" render={() => <Redirect to="/base/animation" />} />
            <Route path='/base/animation' render={(props) => <MarkDownLoader file={AnimationMd} title="Base" {...props} />} />
            <Route path='/base/color' render={(props) => <MarkDownLoader file={ColorMd} title="Base" {...props} />} />
            <Route path='/base/common' render={(props) => <MarkDownLoader file={CommonMd} title="Base" {...props} />} />
            <Route path='/base/container' render={(props) => <MarkDownLoader file={ContainerMd} title="Base" {...props} />} />
            <Route path='/base/hyperlink' render={(props) => <MarkDownLoader file={HyperlinkMd} title="Base" {...props} />} />
            <Route path='/base/media' render={(props) => <MarkDownLoader file={MediaMd} title="Base" {...props} />} />
            <Route path='/base/screen' render={(props) => <MarkDownLoader file={ScreenMd} title="Base" {...props} />} />
            <Route path='/base/service-icon' render={(props) => <MarkDownLoader file={ServiceIconMd} title="Base" {...props} />} />
            <Route path='/base/space' render={(props) => <MarkDownLoader file={SpaceMd} title="Base" {...props} />} />
            <Route path='/base/typography' render={(props) => <MarkDownLoader file={TypographyMd} title="Base" {...props} />} />
            <Route path='/base/ui-icon' render={(props) => <MarkDownLoader file={UiIconMd} title="Base" {...props} />} />

            {/* Component */}
            <Route exact path="/component" render={() => <Redirect to="/component/accordion" />} />
            <Route path='/component/accordion' render={(props) => <MarkDownLoader file={AccordionMd} title="Component" {...props} />} />
            <Route path='/component/action-menu' render={(props) => <MarkDownLoader file={ActionMenuMd} title="Component" {...props} />} />
            <Route path='/component/block' render={(props) => <MarkDownLoader file={BlockMd} title="Component" {...props} />} />
            <Route path='/component/breadcrumb' render={(props) => <MarkDownLoader file={BreadcrumbMd} title="Component" {...props} />} />
            <Route path='/component/button' render={(props) => <MarkDownLoader file={ButtonMd} title="Component" {...props} />} />
            <Route path='/component/card' render={(props) => <MarkDownLoader file={CardMd} title="Component" {...props} />} />
            <Route path='/component/content' render={(props) => <MarkDownLoader file={ContentMd} title="Component" {...props} />} />
            <Route path='/component/dialog' render={(props) => <MarkDownLoader file={DialogMd} title="Component" {...props} />} />
            <Route path='/component/input' render={(props) => <MarkDownLoader file={InputMd} title="Component" {...props} />} />
            <Route path='/component/list' render={(props) => <MarkDownLoader file={ListMd} title="Component" {...props} />} />
            <Route path='/component/modal' render={(props) => <MarkDownLoader file={ModalMd} title="Component" {...props} />} />
            <Route path='/component/mouseover' render={(props) => <MarkDownLoader file={MouseoverMd} title="Component" {...props} />} />
            <Route path='/component/notification' render={(props) => <MarkDownLoader file={NotificationMd} title="Component" {...props} />} />
            <Route path='/component/pagination' render={(props) => <MarkDownLoader file={PaginationMd} title="Component" {...props} />} />
            <Route path='/component/progress' render={(props) => <MarkDownLoader file={ProgressMd} title="Component" {...props} />} />
            <Route path='/component/slider' render={(props) => <MarkDownLoader file={SliderMd} title="Component" {...props} />} />
            <Route path='/component/tabs' render={(props) => <MarkDownLoader file={TabMd} title="Component" {...props} />} />
            <Route path='/component/table' render={(props) => <MarkDownLoader file={TableMd} title="Component" {...props} />} />
            <Route path='/component/tile' render={(props) => <MarkDownLoader file={TileMd} title="Component" {...props} />} />
            <Route path='/component/tooltip' render={(props) => <MarkDownLoader file={Tooltip} title="Component" {...props} />} />

            {/* Layout */}
            <Route exact path="/layout" render={() => <Redirect to="/layout/app-layout" />} />
            <Route path='/layout/app-layout' render={(props) => <MarkDownLoader file={AppLayoutMd} title="Layout" {...props} />} />
            <Route path='/layout/backdrop' render={(props) => <MarkDownLoader file={BackdropMd} title="Layout" {...props} />} />
            <Route path='/layout/banner' render={(props) => <MarkDownLoader file={BannerMd} title="Layout" {...props} />} />
            <Route path='/layout/footer' render={(props) => <MarkDownLoader file={FooterMd} title="Layout" {...props} />} />
            <Route path='/layout/grid' render={(props) => <MarkDownLoader file={GridMd} title="Layout" {...props} />} />
            <Route path='/layout/jumbotron' render={(props) => <MarkDownLoader file={JumbotronMd} title="Layout" {...props} />} />
            <Route path='/layout/mega-menu' render={(props) => <MarkDownLoader file={MegaMenuMd} title="Layout" {...props} />} />
            <Route path='/layout/pitch' render={(props) => <MarkDownLoader file={PitchMd} title="Layout" {...props} />} />
            <Route path='/layout/side-bar' render={(props) => <MarkDownLoader file={SideBarMd} title="Layout" {...props} />} />
            <Route path='/layout/title-bar' render={(props) => <MarkDownLoader file={TitleBarMd} title="Layout" {...props} />} />
            <Route path='/layout/top-bar' render={(props) => <MarkDownLoader file={TopBarMd} title="Layout" {...props} />} />
            <Route path='/layout/web-layout' render={(props) => <MarkDownLoader file={WebLayoutMd} title="Layout" {...props} />} />

            {/* Theme */}
            <Route exact path="/theme" render={() => <Redirect to="/theme/business-market" />} />
            <Route path='/theme/business-market' render={(props) => <MarkDownLoader file={BusinessMarketMd} title="Theme" {...props} />} />
          </Main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
