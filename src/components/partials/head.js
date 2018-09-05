import React from 'react';
import Helmet from 'react-helmet';

const Head = ({ data }) => (
    <Helmet
        title={data.site.siteMetadata.title}
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    />
);

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Head;