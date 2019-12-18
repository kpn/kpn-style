import React from 'react';

class Anchor extends React.Component {

  render() {
    let newUrl = '';

    if(this.props.href && this.props.href.startsWith('#') && !this.props.href.startsWith('#/')) {
      const hashes = window.location.hash.split('#');
      newUrl = `/#${hashes[1]}${this.props.href}`;
    } else {
      newUrl = this.props.href;
    }

    return (
      <React.Fragment>
        <a href={newUrl}>{this.props.children[0].props.value}</a>
      </React.Fragment>
    );   
  }
};

class Heading extends React.Component {

  render() {
    let headerLevel;
    const hashes = window.location.hash.split('#');
    const headerName = this.props.children[0].props.value;

    const headerId = `${hashes[1]}#${headerName.replace(/\s/g ,'-')}`;
    

    switch (this.props.level) {
      case 1:
         headerLevel = <h1>{headerName}</h1>;
        break;

      case 2:
        headerLevel = <h2 id={headerId}>{headerName}</h2>;
        break;

      default:
        headerLevel = <h3 id={headerId}>{headerName}</h3>
        break;
    }
    return (
      <React.Fragment>
        {headerLevel}
      </React.Fragment>
    );
  };

};

export { Anchor, Heading };

