import React from 'react';
import Helmet from 'react-helmet';

const Head = ({ data }) => (
    <Helmet>
        <title>Jason Yeung</title>

        <link rel='shortcut icon' type='image/png' href='/favicon/favicon.ico'/>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png'/>
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png'/>
    </Helmet>
);

export default Head;