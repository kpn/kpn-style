import React from 'react';

const Prism = window.Prism;

class CodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.setRef = this.setRef.bind(this);
  }

  setRef(element) {
    this.codeElement = element;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    Prism.highlightElement(this.codeElement);
  }
  
  render() {
    let language = this.props.language;
    let htmlexample;

    if(this.props.language && this.props.language.startsWith('html*example')) {
      language = 'html';
      let extraClasses = this.props.language.match(/example="(.*?)"/);
      extraClasses = extraClasses ? extraClasses[1] : '';
      htmlexample = <div className={`code-example code-example--before-code code-example--${extraClasses}`} dangerouslySetInnerHTML={{__html: this.props.value}} />;
    }

    return (
      <React.Fragment>
        {htmlexample}
        <pre>
          <code ref={this.setRef} className={`sg-code language-${language}`}>
            {this.props.value}
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

CodeBlock.defaultProps = {
  language: ''
};

export default CodeBlock;
