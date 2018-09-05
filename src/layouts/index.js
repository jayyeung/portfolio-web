import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';

import '../styles/main.scss';

const Layout = ({ children, data }) => (
  <div>
    <Header />
    <div>
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
