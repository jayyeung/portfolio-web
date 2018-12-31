import React from 'react';

import ContactForm from './partials/contact-form';
import { SocialMediaLinks } from './partials/social-media';

const Footer = () => (
  <footer>
    <div className='o-container o-container--small u-pt-60'>
        <h3 className='u-color-white u-mb-24'>Contact Me</h3>

        <div className='o-grid o-grid--wide'>
          <div className='o-grid__col u-5/12@md u-mb-40'>
            <p className='u-color-gray-dark'><span className='u-color-gray'>Thanks for checking out my website!</span> Looks like you've hit the bottom of the page. If you have any concerns, feedback or wanted to say hi, <span className='u-color-gray'>feel free to contact me using my e-mail below or the contact form on the right!</span> Thanks!</p>
            <div className='u-inline-block u-mv-32'></div>
            <div className='u-color-gray c-label'>E-mail me at</div>
            <a href='mailto:contact@jasonyeung.me' className='c-link u-color-white'><h4 className='c-subhead'>contact@jasonyeung.me</h4></a>
          </div>

          <div className='o-grid__col u-relative u-7/12@md'>
            <p className='u-color-gray u-mb-32'>Here's a contact form for conveience.</p>
            <ContactForm />
          </div>
        </div>

        <div className='o-media o-media--middle u-pt-60 u-pb-40'>
        <div className='o-media__fixed'>
          <div className='c-label c-label--small u-color-white u-opacity-25'>&copy; 2018 Jason Yeung. All rights reserved.</div>
        </div>

        <div className='o-media__fluid u-text-right'>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;