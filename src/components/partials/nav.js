import React from 'react';
import Link from 'gatsby-link';

import { SocialMediaLinks } from './social-media';

const Nav = () => (
  <nav>
    <div className='o-container o-container--wide'>
      <div className='o-media o-media--middle'>
        <div className='o-media__fixed'>
          <h5 className='c-subhead'>
            <Link to='/'>Jason Yeung</Link>
          </h5>
        </div>
        <div className='o-media__fluid u-text-right'>
          <SocialMediaLinks/>
          <a className='c-link c-link--alt c-link--small 
          u-color-gray-dark u-ml-40' href='#'>Contact Me</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;