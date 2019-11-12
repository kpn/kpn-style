import React from "react";

import Content from './components/Content';
import CodeEditor from './components/CodeEditor';

const LiveEditor = () => (
  <Content pageTitle="Live editor" title="Live editor">
    <CodeEditor />
  </Content>
);

export default LiveEditor;
