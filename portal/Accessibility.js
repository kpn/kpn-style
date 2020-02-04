import React from 'react';
// import a11y from 'a11y';

import Content from './components/Content';

const Accessibility = () => {
  // a11y('http://twitter.com', (err, reports) => {
  //   var output = JSON.parse(reports);
  //   var audit = output.audit; // a11y Formatted report
  //   var report = output.report; // DevTools Accessibility Audit formatted report
  // });

  return (
    <Content pageTitle="Accessibility" title="Accessibility">
      <h1>Accessibility</h1>
    </Content>
  );
}

export default Accessibility;
