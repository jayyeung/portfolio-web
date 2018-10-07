import React from 'react';
import { Link } from 'gatsby';

import ScrollLink from './scroll-link';
import { SocialMediaLinks } from './social-media';

const Nav = () => (
  <nav>
    <div className='o-container o-container--nav'>
      <div className='o-media o-media--middle'>
        <div className='o-media__fixed'>
          <h4>
            <Link to='/'>Jason Yeung</Link>
          </h4>
        </div>
        <div className='o-media__fluid u-text-right'>
          <SocialMediaLinks/>
          <ScrollLink className='c-link c-link--alt c-link--small 
          u-color-gray-dark u-ml-40' to='#scroll-bottom'>Contact Me</ScrollLink>
        </div>
      </div> 
    </div>
  </nav>
);

export default Nav; 