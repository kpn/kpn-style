import React from 'react';

import Content from './components/Content';
import CodeEditor from './components/CodeEditor';
import KermitNotification from './components/KermitNotification';

const LiveEditor = () => (
  <Content pageTitle="Live editor" title="Live editor">
    <div className="container">
      <KermitNotification classes="margin-bottom-3" />
      <CodeEditor />
    </div>
  </Content>
);

export default LiveEditor;
