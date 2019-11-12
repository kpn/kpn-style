import React from 'react';
import Helmet from 'react-helmet';

const Content = (props) => (
  <React.Fragment>
    <Helmet title={`${props.title} - KPN Style`} />
    <div className="app-layout__title-bar title-bar">
      <div className="title-bar__title">{props.title}</div>
    </div>
    
    {props.wrapInContainer ? (<div className="container container--limited">{props.children}</div>) : (props.children)}
  </React.Fragment>
);

Content.defaultProps = {
  wrapInContainer: true
};

export default Content;
