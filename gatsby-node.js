const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// Create Slugs
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// Create Pages from slugs
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields { slug },
              frontmatter { 
                title,
                thumbnail,
                project_type
              }
            }
          }
        }
      }
    `)
    
    .then((result) => {
      const studies = result.data.allMarkdownRemark.edges;

      result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/case-study.js'),
          context: {
            slug: node.fields.slug,
            next: (index < studies.length-1) ? studies[index+1].node : studies[0].node
          }
        });
      });
      resolve();
    });
  });
};
