import React from 'react';

class Main extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="app-layout__main">
        {this.props.children}
      </main>
    );
  }
}

export default Main;
