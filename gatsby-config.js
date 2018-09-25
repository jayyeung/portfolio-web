module.exports = {
  siteMetadata: {
    title: 'Jason Yeung',
  },
  
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-layout',
      options: { component: require.resolve('./src/components/layout.js') }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/content`,
        name: "content",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
