import React, { Component } from 'react';

import { SocialMediaLinks } from './partials/social-media';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='o-container o-container--small u-pt-60'>
            <h3 className='u-color-white u-mb-24'>Contact Me</h3>

            <div className='o-grid o-grid--wide'>
              <div className='o-grid__col u-5/12@md u-mb-20'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, deserunt non. Ratione magnam est dicta obcaecati eveniet laborum sapiente nemo.</p>
                <div className='u-inline-block u-mv-32'></div>
                <div className='u-color-gray c-label'>E-mail me at</div>
                <a href='mailto:contact@jasonyeung.me' className='c-link u-color-white'><h4 className='c-subhead'>contact@jasonyeung.me</h4></a>
              </div>

              <div className='o-grid__col u-7/12@md'>
                <p className='u-color-gray u-mb-32'>Here's a contact form for conveience.</p>
                <form id='contact-form'>
                  <div className='o-media o-media--res u-mb-28'>
                      <div className='o-media__fluid u-mr-40 u-mb-20'>
                        <label>Name*</label>
                        <input type='text' placeholder='Jason Yeung'></input>
                      </div>

                      <div className='o-media__fluid'>
                        <label>E-mail*</label>
                        <input type='text' placeholder='contact@jasonyeung.me'></input>
                      </div>
                  </div>

                  <label>Message</label>
                  <textarea placeholder="Hey Jason, it's me, Jason. I want to talk to you about something."></textarea>

                  <button className='u-color-white u-mt-28'>Send Message</button>
                </form>
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
  }
}

export default Footer;