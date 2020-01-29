import React from "react";
import ReactMarkdown from 'react-markdown';

import CodeBlock from './CodeBlock';
import Content from './Content';
import ReplaceKpnStyleBundleVersion from './Convert';

class MarkDownLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' }
  }

  componentDidMount() {
    console.log(this.props.file);
    fetch(this.props.file)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ markdown: ReplaceKpnStyleBundleVersion(text) });
      });

  }

  render() {
    return (
      <Content title='Lorem ipsum'>
        {this.props.data.docs.length > 1 &&
        <>
          <div className="jumbotron">
            <div className="jumbotron__body">
              <div className="jumbotron__title">Button</div>
              <p className="p">Source files: <a href="https://github.com/kpn/kpn-style/blob/master/packages/component/button" className="a">packages/component/button</a></p>
            </div>
          </div>

          <nav className="tab">
            <ul className="tab__menu">
              <li className="tab__item"><a href="#" className="tab__link tab__link--active">Usage</a></li>
              <li className="tab__item"><a href="#" className="tab__link">Style</a></li>
              <li className="tab__item"><a href="#" className="tab__link">Web Component</a></li>
            </ul>
          </nav>
        </>
        }





        <div className="container">
          <ReactMarkdown className="kpn-style" renderers={{code: CodeBlock}} source={this.state.markdown} escapeHtml={false} />
        </div>
      </Content>
    )
  }
}

export default MarkDownLoader;
