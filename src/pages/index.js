import React from 'react'
import { Link } from 'gatsby'

import { SocialMediaLinks } from '../components/partials/social-media'

const IndexPage = () => (
  <div className='p-homepage'>
    <div className="p-homepage__hero">
      <div className="o-container o-container--title u-text-center">
        <h1 className="u-mb-20">
          Hello there! My name is Jason Yeung and I am a front-end developer.
          You can{' '}
          <a href="#" className="c-link">
            learn about me
          </a>,{' '}
          <a href="#" className="c-link">
            my work
          </a>, or{' '}
          <a href="#" className="c-link u-color-gray-dark">
            contact me
          </a>.
        </h1>
      </div>
    </div>

    <div className="p-homepage__title">
      <div className="o-container o-container--title u-text-center">
        <span className="c-icon-arrow-stopped u-opacity-25" />
        <h1 className="c-subhead">Jason Yeung</h1>
        <h6>Front-End Developer</h6>
      </div>
    </div>

    <div className="u-inline-block u-mv-8" />

    <div className="o-container o-container--content u-text-center">
      <p className="u-mb-24">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        dolorem ab odio aperiam cumque deserunt excepturi sequi sed culpa. Quam.
      </p>
      <SocialMediaLinks />
    </div>

    <div className="u-inline-block u-mb-12 u-mv-40@md" />

    <hr />

    <div className="u-inline-block u-mb-12 u-mv-40@sm" />

    <div className="o-container">
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

    <div className="u-inline-block u-mv-40" />

    {/* MY WORK */}
    <div className="o-container o-container--content u-text-center">
      <h2 className="u-mb-12">My Work</h2>
      <p className="u-color-black u-mb-60">
        Below are some projects I have been working on. My work consists of
        personal projects, some useful, others just plain silly.
      </p>
    </div>

    <div className="p-homepage__work">
      <div className="o-container o-container--wide">
        <div className="o-grid">
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
        </div>
      </div>

      <div className="u-inline-block u-mv-40" />
    </div>
  </div>
);

const WorkItem = () => (
  <div className="o-grid__col u-6/12@md u-mb-40">
    <div className="p-homepage__work-item">
      <div className="p-homepage__work-img">
        <img src="http://placehold.it/400x280" alt="case study image" />
        <span className="p-homepage__work-type">Web Game</span>
      </div>

      <div className="p-homepage__work-desc u-pt-20 u-pb-32 u-ph-32">
        <h5 className="c-subhead u-mb-4">Do you love Fluffy</h5>
        <p>
          Do you love Fluffy is a cute short minigame where the aim is
          to love Fluffy within a short amount of time.
        </p>

        <ul className="o-list o-list--inline u-mt-20">
          <li className="o-list__item">
            <Link to="/case-study/" className="c-link c-link--alt">
              Case Study
            </Link>
          </li>

          <li className="o-list__item">
            <a href="#" className="c-link c-link--alt u-color-gray-dark" >
              <span className="c-icon-github u-mr-8" />
              Source
            </a>
          </li>
          
          <li className="o-list__item">
            <a href="#" className="c-link c-link--alt u-color-gray-dark" >
              View Project
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default IndexPage
