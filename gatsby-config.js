module.exports = {
  siteMetadata: {
    title: 'Jason Yeung',
  },
  
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: { modulePath: `${__dirname}/src/cms/cms.js` }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: { component: `${__dirname}/src/components/layout.js` } 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/content`,
        name: "content",
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs']
      }
    }
  ],
}
