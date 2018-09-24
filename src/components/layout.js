import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import '../styles/main.scss';

const Layout = ({ children, location }) => (
  <div>
    <Header />
    <div id='container'>
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = { 
  children: PropTypes.func,
};

export default Layout;
