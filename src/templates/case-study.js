import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import posed from 'react-pose';

import ScrollLink from '../components/partials/scroll-link';

const Study = posed.div({
  init: { scale: 1, y: -20, opacity: 0 },
  enter: { 
    y: 0, 
    opacity: 1,
    transition: { ease: 'easeOut' }
  }
});

class CaseStudy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      triggered: false,
      lastScrolled: 0,
    }
  }

  componentDidMount() { document.addEventListener('scroll', this.navScroll); }
  componentWillUnmount() { document.removeEventListener('scroll', this.navScroll); }

  navScroll = () => {
    const trigger = this.trigger.offsetTop;
    const nav = this.nav;

    // Show & Hide Nav
    const triggered = this.state.triggered;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if ((!triggered && scrollTop > trigger) || (triggered && scrollTop <= trigger)) {
      nav.classList.toggle('p-case-study__nav--hidden');
      this.setState({ triggered: !triggered });
    }

    // Scroll Direction
    const lastScrolled = this.state.lastScrolled;

    if (scrollTop > lastScrolled) nav.classList.add('p-case-study__nav--down');
    else nav.classList.remove('p-case-study__nav--down');
    this.setState({ lastScrolled: scrollTop <= 0 ? 0 : scrollTop });
  }

  render() {
    const { data } = this.props;
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;

    return (
      <Study className="p-case-study">
        {/* CONTENT NAV */}
        <nav className="p-case-study__nav p-case-study__nav--hidden p-case-study__nav--down"
          ref={(e) => { this.nav = e }}>
          <div className="o-container o-container--wide u-text-center">
            <h1 className="p-case-study__nav-title">{frontmatter.title}</h1>
            <div className='o-media o-media--middle'>
              <h6 className='u-text-left'>
                <Link to='/#my-work' className='c-link u-color-gray-dark'>
                  <span className="c-icon-arrow-left u-mr-4"/> Back to work
                </Link>
              </h6>

              <div className='o-media__fluid u-relative u-text-right'>
                <ScrollLink to="#" className="p-case-study__nav-up c-link u-color-black">
                  <h6><span className="c-icon-arrow"/> Back to top</h6>
                </ScrollLink>
                <ProjectInfo className="p-case-study__nav-down" source={frontmatter.source} demo={frontmatter.project_link}/>
              </div>
            </div>
          </div>
        </nav>

        {/* TITLE */}
        <div className="o-container o-container--title u-text-center">
          <span className="c-label c-label--alt u-bgcolor-black">{frontmatter.project_type}</span>
          <h1 className="u-mt-20 u-mb-20">{frontmatter.title}</h1>
        </div> 

        <div className="o-container o-container--content u-text-center">
          <p>{frontmatter.summary}</p>
          <ProjectInfo className='u-mt-20 u-mb-60' 
          source={frontmatter.source} 
          demo={frontmatter.project_link}/>
        </div>

        {/* DEMO */}
        <div
          className="o-container u-text-center"
          ref={(e) => { this.trigger = e }}>
          <div className="p-case-study__demo">
            <div className="c-label u-mb-20">
              <span className="c-icon-observe u-block u-mb-8" />
              Demonstration
            </div>
            <div className="p-case-study__demo-video">
              <iframe src="https://www.youtube.com/embed/8HSr8BjcufM?rel=0&amp;
              loop=1&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;showinfo=0&amp;playlist=8HSr8BjcufM"  
                width="1600" height="800" frameBorder="0"
                allowFullScreen allow="autoplay; encrypted-media">
              </iframe>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-case-study__content u-mt-20"
          dangerouslySetInnerHTML={{__html: markdownRemark.html}}>
        </div>
      </Study>
    );
  }
};

const ProjectInfo = ({ source, demo, className }) => (
  <ul className={'o-list o-list--inline ' + (className || '')} >
    <li className="o-list__item">
      <a className="c-link c-link--alt u-color-gray-dark" href={source}>
        <span className='c-icon-github u-mr-8'></span>Source
      </a>
    </li>
    <li className="o-list__item">
      <a className="c-link c-link--alt" href={demo}>View Project</a>
    </li>
  </ul>
);

export const StudyQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html,
      frontmatter {
        title,
        project_type,
        project_link,
        summary,
        source
      }
    }
  }
`;


export default CaseStudy;