import React from 'react';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet';

class Content extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title={`${this.props.title} - KPN Style`} />
        <div className="app-layout__title-bar title-bar">
          <div className="title-bar__title">{this.props.title}</div>
        </div>

        {this.props.wrapInContainer ? (<div className="container container--limited">{this.props.children}</div>) : (this.props.children)}
      </React.Fragment>
    );
  }
}

Content.defaultProps = {
  wrapInContainer: true
};

export default Content;
