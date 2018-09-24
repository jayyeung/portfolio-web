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
    }
  ],
}
