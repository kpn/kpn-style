import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { Anchor, Heading } from './Anchor';
import CodeBlock from './CodeBlock';
import Content from './Content';
import ReplaceKpnStyleBundleVersion from './Convert';

class MarkDownLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' }
  }

  isMarkDownfile(source) {
    const mdFileRegex = /\.md$/;
    return mdFileRegex.test(source);
  }

  getMarkdownContent(source) {
    if(this.isMarkDownfile(source)) {
      fetch(source)
        .then(response => {
          return response.text()
        })
        .then(text => {
          this.setState({ markdown: ReplaceKpnStyleBundleVersion(text) });
        });
    } else {
      this.setState({ markdown: ReplaceKpnStyleBundleVersion(source) });
    }
  }

  componentDidMount() {
    this.getMarkdownContent(this.props.content);
  }

  render() {
    return (
      <Content title={this.props.data?.category || this.props.title}>
        {this.props.data && Array.isArray(this.props.data.content) &&
          <>
            <div className="jumbotron">
              <div className="jumbotron__body">
                <div className="jumbotron__title">{this.props.data.title}</div>
              </div>
            </div>

            <nav className="tab">
              <ul className="tab__menu">
                {
                  this.props.data.content.map((content) =>
                    <React.Fragment key={content.title}>
                      {!content.unlisted &&
                        <li  className="tab__item">
                          <NavLink
                            activeClassName="tab__link--active"
                            className="tab__link"
                            to={content.path}>
                            {content.title}
                          </NavLink>
                        </li>
                      }
                    </React.Fragment>
                  )
                }
              </ul>
            </nav>
          </>
        }

        <div className="container">
          <ReactMarkdown className="kpn-style" renderers={{code: CodeBlock, link: Anchor, heading: Heading }} source={this.state.markdown} escapeHtml={false} />
        </div>
      </Content>
    )
  }
}

export default MarkDownLoader;
