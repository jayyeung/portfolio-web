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
            Hello there! My name is Jason Yeung and I am a front-end developer.
            You can{' '}
            <ScrollLink to="#about-me" className="c-link">learn about me</ScrollLink>,{' '}
            <ScrollLink to="#my-work" className="c-link">my work</ScrollLink>, or{' '}
            <ScrollLink to="#scroll-bottom" className="c-link u-color-gray-dark">contact me</ScrollLink>.
          </h1>
        </div>
      </div>

      <div className="p-homepage__pic"></div>

      <div className="p-homepage__title">
        <div className="o-container o-container--content u-bgcolor-element-bg u-text-center u-pv-24">
          <h1>Jason Yeung</h1>
          <h6 className="c-subhead">Front-End Developer</h6>
          <p className="u-mt-12 u-mb-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            dolorem ab odio aperiam cumque deserunt excepturi sequi sed culpa. Quam.
          </p>
          <SocialMediaLinks />
        </div>
      </div>

      <div className="u-inline-block u-mb-20 u-mv-32@md" />
      <hr />
      <div className="u-inline-block u-mb-20 u-mv-40@sm" />

      <div id="about-me" className="o-container">
        <div className="o-grid o-grid--wide">
          <div className="o-grid__col u-7/12@md u-mb-40">
            <h6 className="u-mb-16">A little more about me</h6>
            <p>
              <strong>Hello once again!</strong> I appreciate you taking a look at
              my portfolio. I am Jason Yeung, currently a student studying
              Computer Science at <a href="#">Simon Fraser University</a> in BC,
              Canada. John Ryan by Design needed a website that reflected their
              true expertise and reputation.
            </p>
            <h6 className="u-mt-40 u-mb-16">How do I make things look good?</h6>
            <p>
              Hello once again! I appreciate you taking a look at my portfolio. I
              am Jason Yeung, currently a student studying Computer Science at
              Simon Fraser University in BC, Canada. John Ryan by Design needed a
              website that reflected their true expertise and reputation. A
              website with a vast amount of information, customers rely upon
              heavily. Some of the goals were to make this feature more and be
              more readily available, as well as communicate a level of trust.
            </p>
          </div>

          <div className="o-grid__col u-5/12@md">
            <span className="c-label c-label--alt u-inline-block u-mb-24">
              Development
            </span>

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

            <span className="c-label c-label--alt u-inline-block u-mb-20">
              Design
            </span>
            <ul className="p-homepage__list p-homepage__list-sub">
              <li>Adobe XD</li>
              <li>Photoshop</li>
              <li>Adobe Illustrator / Inkscape</li>
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
          Below are some projects I have been working on. My work consists of
          personal projects, some useful, others just plain silly.
        </p>
      </div>

      <div className="p-homepage__work">
        <div className="o-container o-container--wide">
          <div className="o-grid">
            {studies.map(({ node }) => (
              <WorkItem data={node.frontmatter} to={node.fields.slug}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus veritatis harum, eum beatae iure?
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

      <div className="p-homepage__work-desc u-pt-20 u-pb-40 u-ph-32">
        <Link to={to}>
          <h6 className="c-subhead u-mb-4">{data.title}</h6>
          <p>{children}</p>
        </Link>

        <ProjectLink className='u-mt-20' source={data.source} demo={data.project_link}>
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
    allMarkdownRemark {
      edges {
        node {
          fields { slug }
          frontmatter {
            title,
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
