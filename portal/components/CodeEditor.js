import React from 'react';
import HtmlToReact from 'html-to-react';

let parser = new HtmlToReact.Parser();

const initialPlaygroundHtml = `<h1 class="h1">Hello world</h1>

<p class="p">
  Put your cursor here and change the code! 
</p>

<input type="text" class="input" placeholder="Enter something" />

<button class="button">Click me</button>
`;

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleHtmlChange = this.handleHtmlChange.bind(this);
    this.state = {
      playgroundHtml: initialPlaygroundHtml
    };
  }

  handleHtmlChange(event) {
    this.setState({playgroundHtml: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <textarea className="code-editor" onChange={this.handleHtmlChange} value={this.state.playgroundHtml} rows="15" />
        <div className="code-example code-example--after-code">{parser.parse(this.state.playgroundHtml)}</div>
      </React.Fragment>
    );
  }
}

export default CodeEditor;
