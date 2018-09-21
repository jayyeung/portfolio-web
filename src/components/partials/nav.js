import React, { Component } from 'react';
import Link from 'gatsby-link';

const Nav = () => (
  <nav>
    <div className='o-container o-container--wide'>
      <div className='o-media o-media--middle'>
        <div className='o-media__fixed'>
          <h5 className='c-subhead'><a href='#'>Jason Yeung</a></h5>
        </div>
        <div className='o-media__fluid u-text-right'>
          <a className='c-link c-link--alt c-link--small' href='#'>Contact Me</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;