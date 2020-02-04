import React from 'react';

import Content from './components/Content';
import CodeEditor from './components/CodeEditor';

const LiveEditor = () => (
  <Content pageTitle="Live editor" title="Live editor">
    <div className="container">
      <CodeEditor />
    </div>
  </Content>
);

export default LiveEditor;
