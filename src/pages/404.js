import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts';

const NotFoundPage = () => (
  <Layout>
    <div className='p-404'>
      <div className='o-container o-container--content u-relative'>
        <div className='p-404__num'>
          <img src='static/assets/404.svg'/>
        </div>
        <div className='c-label'>Error 404</div>
        <h1>Page Not Found</h1>
        <p className='u-mt-20'>
          Uh oh! There seems to be nothing here!
          <br></br><strong>Where you can go from here is to</strong>
          <br></br><Link to='/' className='c-link c-link--alt'>Start at the beginning</Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage
