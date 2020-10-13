import React from 'react';

const KermitNotification = (props) => (
    <div className={`notification notification--informative ${props.classes}`}>
      <div className="notification__header">
      KPN Style is in maintenance mode. Only critical bugs will be fixed. <a class="a" href="https://kermit.kpn.org">Kermit</a> is our new Design System and standard for front-end.
      </div>
    </div>
);

export default KermitNotification;
