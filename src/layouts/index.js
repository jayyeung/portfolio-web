import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/main.scss';

const Layout = ({ children, locaiton }) => (
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
