import React from "react";
import { NavLink } from 'react-router-dom';

import portalPackageJson from '../package.json'
import bundlePackageJson from './../packages/package.json'
import Content from './components/Content';
import logoKpnStyle from './assets/image/logo-kpn-style.png';

const Start = () => (
  <Content title="Start" wrapInContainer={false}>
    <div className="jumbotron">
      <div className="jumbotron__body">
        <img alt="Logo KPN Style" className="kpn-style-logo" src={logoKpnStyle} />
      </div>
      <div className="jumbotron__body">
        <p className="jumbotron__title">
          Build consistent KPN websites and applications
        </p>
        <p className="p">
          KPN Style is a front-end library for developers working within the Business Market.
        </p>
        <div className="button-group button-group--respond">
          <NavLink className="button button--4" to="/getting-started/quick-start">Get started</NavLink>
          <NavLink className="button button--4 button--secondary" to="/live-editor">Try now</NavLink>
        </div>
        <p className="p">
          <span className="jumbotron__data">Current bundle version: <strong>{bundlePackageJson.version}</strong></span>
          <span className="jumbotron__data jumbotron__data--secondary">Current portal version: <strong>{portalPackageJson.version}</strong></span>
        </p>
      </div>
    </div>

    <section className="container container--limited">
      <div className="row">
        <div className="col col--m-4">
          <div className="tile tile--stretch">
            <div className="tile__body">
              <i className="tile__icon ui-assemble"></i>
              <h2 className="tile__title">
                What's new?
              </h2>
              <p className="p">Latest changes to KPN Style</p>
              <NavLink className="button button--secondary" to="/changelog">Go to changelog</NavLink>
            </div>
          </div>
        </div>

        <div className="col col--m-4">
          <div className="tile tile--stretch">
            <div className="tile__body">
              <i className="tile__icon ui-edit"></i>
              <h2 className="tile__title">
                Try now!
              </h2>
              <p className="p">Play in your browser</p>
              <NavLink className="button button--secondary" to="/live-editor">Go to live editor</NavLink>
            </div>
          </div>
        </div>

        <div className="col col--m-4">
          <div className="tile tile--stretch">
            <div className="tile__body">
              <i className="tile__icon ui-heart"></i>
              <h2 className="tile__title">
                Stronger together
              </h2>
              <p className="p">Make your contribution.</p>
              <NavLink className="button button--secondary" to="/getting-started/contributing">Read more</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pitch pitch--limited pitch--green">
      <div className="pitch__body">
        <h2 className="pitch__title text-align">Improve our <strong>business brand experience</strong></h2>
        <div className="row">
          <div className="col col--m-6">
            <p className="p">
              KPN's mission is to make life more free, fun, and easy by connecting.
              That's why KPN works on the digital highway of the future.
              Therefore, our dialogue with users must be personal and relevant.
            </p>

            <p className="p">
              KPN Style delivers components from a central location.
              All components are expertly designed and vetted by the designers from KPN UX Lab.
            </p>
            <p className="p">
              When our developers use these components, it will improve the brand experience for our customers because various KPN websites will offer a consistent experience.
            </p>
          </div>
          <div className="col col--m-6 text-align-center">
            <img alt="Stylish cat" className="stylish-cat" src="/dummy/stylish-cat-white.png" />
          </div>
        </div>
      </div>
    </section>

    <section className="pitch pitch--limited pitch--white">
      <div className="pitch__body">
        <h2 className="pitch__title">More focus on <strong>business value</strong></h2>
        <div className="row">
          <div className="col col--m-6">
            <p className="p">
              With KPN Style you have more time to focus on business value.
              It is no longer necessary to develop and maintain (generic UI) components yourself.
            </p>
            <p className="p">
              Developers can grab and customize components from the front-end library to build an application.
            </p>
            <p className="p">
              Each piece of code is well thought out, reviewed and tested by a team of expert front-end developers.
              By constantly improving KPN Style it will get better over time.
            </p>
          </div>

          <div className="col col--m-6">
            <ul className="check-list">
              <li>For everyone working within the Business Market.</li>
              <li>Save up to 50% in front-end development time.</li>
              <li>Not dependent on frameworks such as Angular, Vue, or React.</li>
              <li>Optimized for mobile and tablet.</li>
              <li>Small file size and footprint because (nearly) all code is custom written.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="pitch pitch--limited">
      <div className="pitch__body">
        <h2 className="pitch__title"><strong>Anyone</strong> can use it</h2>
        <div className="row">
          <div className="col col--m-8">
            <p className="p">
              You can compare the components with Lego-like building blocks.
              This portal contains an overview of all the components. Here you can find documentation and real life examples.
            </p>
            <p className="p">
              We put our components in npm packages.
              With npm, it is easy to keep up to date with the latest version of KPN Style.
            </p>
            <div className="button-group button-group--respond">
              <NavLink className="button button--3" to="/getting-started/quick-start">Start using it</NavLink>
              <NavLink className="button button--3 button--secondary" to="/base">Dive into Base</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pitch pitch--limited pitch--white pitch--last margin-bottom-0">
      <div className="pitch__body">
        <h2 className="pitch__title"><strong>Open source</strong> &amp; collaboration</h2>
        <div className="row">
          <div className="col col--m-6">
            <p className="p">
              KPN style is available as an open source project to allow anyone, internal or external, to benefit from it.
            </p>
            <p className="p">
              Everyone is invited to help build and improve KPN style. Feel free to create a pull request or work on one of our open issues on GitHub.
            </p>
            <div className="button-group button-group--respond">
              <NavLink className="button button--3 button--secondary" to="/getting-started/contributing">How to contribute</NavLink>
            </div>
          </div>

          <div className="col col--m-6">
            <ul className="check-list">
              <li>Easy to install from any computer with Node.js.</li>
              <li>Available on the public npm registry.</li>
              <li>Everyone is invited to contribute.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Content>
);

export default Start;
