import React from 'react';
import { Link, graphql } from 'gatsby';

import ScrollLink from '../components/partials/scroll-link';
import ProjectLink from '../components/partials/project-link';
import { SocialMediaLinks } from '../components/partials/social-media';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const studies = allMarkdownRemark.edges;

  return (
    <div className='p-homepage'>
      <div className="p-homepage__hero">
        <div className="o-container o-container--title u-text-center">
          <h1 className="u-mb-20">
            Hello there! My name is Jason Yeung and I am an aspiring front-end developer.
            You can learn{' '}
            <ScrollLink to="#about-me" className="c-link">about me</ScrollLink>,{' '}
            <ScrollLink to="#my-work" className="c-link">my work</ScrollLink>, or{' '}
            <ScrollLink to="#scroll-bottom" className="c-link u-color-gray-dark">contact me</ScrollLink>.
          </h1>
        </div>
      </div>

      <div className="p-homepage__pic"></div>

      <div className="p-homepage__title">
        <div className="o-container o-container--content u-text-center u-pv-24">
          <h1>Jason Yeung</h1>
          <h6 className="c-subhead">Front-End Developer</h6>
          <p className="u-mt-12">
            Currently a student studying
            Computer Science at <a href="https://www.sfu.ca/">Simon Fraser University</a> in BC,
            Canada. 
          </p>
        </div>
      </div>

      <div id="about-me" className="u-inline-block u-mb-20 u-mv-32@md" />
      <hr />
      <div className="u-inline-block u-mb-20 u-mv-40@sm" />

      <div className="o-container">
        <div className="o-grid o-grid--wide">
          <div className="o-grid__col u-7/12@md u-mb-40">
            <h5 className="u-mb-12">A little more about me</h5>
            <p>Thanks for checking out my portfolio!</p>
            <br />
            <p>
              <strong>I am passionate about the web.</strong> Ever since highschool, I've been learning web development starting from simple HTML & CSS to using
              to learning JavaScript frameworks like React and Vue.
            </p>
            <br />
            <p>
              My eagerness to learn has also led me to discover design, and how something looks and feels is just as important as how it should function. 
              From there on then, I began learning both design and development. 
            </p>
            <br />
            <p>
            Currently, I am a student studying Computer Science looking to become an apsiring Front-end developer. In my spare time, I like to excercise and learn about UI design and UX best practices. 
            </p>
            <br />
            <p>
              Feel free to look at some of my work below or my social media. In my case studies, I try to document my process, what I learnt, and mistakes/obstacles I faced when tackling a project; hopefully you can learn something from my ramblings! :)
            </p>
            <br />
            <SocialMediaLinks />
          </div>

          <div className="o-grid__col u-5/12@md">
            <span className="c-label u-inline-block">
              Development
            </span>

            <hr className="u-mt-16 u-mb-24"/>

            <ul className="p-homepage__list u-mb-40">
              <li className="u-mb">
                <span>HTML/CSS</span>
                <ul className="p-homepage__list-sub">
                  <li>SCSS</li>
                  <li>Jade</li>
                  <li>IotaCSS</li>
                </ul>
              </li>
              <li>
                <span>JavaScript</span>
                <ul className="p-homepage__list-sub">
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>JQuery</li>
                  <li>Meteor.js</li>
                </ul>
              </li>
            </ul>

            <span className="c-label u-inline-block">
              Design
            </span>

            <hr className="u-mt-16 u-mb-24"/>

            <ul className="p-homepage__list p-homepage__list-sub">
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe After Effects</li>
              <li>Inkscape</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="u-inline-block u-mb-40" />

      <hr />

      <div className="u-inline-block u-mb-40 u-mv-40@sm" />

      {/* MY WORK */}
      <div id="my-work" className="o-container o-container--content u-text-center">
        <h2 className="u-mb-12">My Work</h2>
        <p className="u-color-black u-mb-60">
          Below are projects I have been working on. My work consists of
          personal projects, some useful, others just plain silly.
        </p>
      </div>

      <div className="p-homepage__work">
        <div className="o-container o-container--wide">
          <div className="o-grid">
            {studies.map(({ node }) => (
              <WorkItem data={node.frontmatter} to={node.fields.slug}>
                {node.frontmatter.summary}
              </WorkItem>
            ))}
          </div>
        </div>

        <div className="u-inline-block u-mv-40" />
      </div>
    </div>
  );
};

const WorkItem = ({ children, data, to }) => (
  <div className="o-grid__col u-6/12@md u-mb-40">
    <div className="p-homepage__work-item">
      <Link to={to} className="p-homepage__work-img">
        <img src={data.thumbnail} alt="case study"/>
        <span className="p-homepage__work-type">{data.project_type}</span>
      </Link>

      <div className="p-homepage__work-desc u-pt-28 u-pb-40 u-ph-32">
        <Link to={to}>
          <h6 className="c-subhead u-mb-4">{data.title}</h6>
          <p>{children}</p>
        </Link>

        <ProjectLink className='p-homepage__work-links u-mt-20' source={data.source} demo={data.project_link}>
          <li className="o-list__item">
            <Link to={to} className="c-link c-link--alt">Case Study</Link>
          </li>
        </ProjectLink>
      </div>
    </div>
  </div>
);

export const studiesQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___order}, 
      filter: {frontmatter: {published: {eq: true}}}) {
      edges {
        node {
          fields { slug }
          frontmatter {
            title,
            summary,
            thumbnail,
            project_type,
            project_link,
            source
          }
        }
      }
    }
  }
`;

export default IndexPage
