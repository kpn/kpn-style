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

  componentWillMount() {
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
      <Content title={this.props.title}>
        <ReactMarkdown className="kpn-style" renderers={{code: CodeBlock}} source={this.state.markdown} escapeHtml={false} />
      </Content>
    )
  }
}

export default MarkDownLoader;
