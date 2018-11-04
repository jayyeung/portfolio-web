import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import Transition from './transition';
import '../styles/main.scss';

const Layout = ({ children, location }) => (
  <Transition location={location}>
    <Header />
      <div id='container'>
        {children}
      </div>
      <div id='scroll-bottom'></div>
    <Footer />
  </Transition>
);

Layout.propTypes = { 
  children: PropTypes.func,
};

export default Layout;
