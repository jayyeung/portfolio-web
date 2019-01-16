import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import posed from 'react-pose';

import ScrollLink from '../components/partials/scroll-link';
import ProjectLink from '../components/partials/project-link';

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
    const { data, pageContext } = this.props;
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;
    const { next } = pageContext;

    return (
      <Study className="p-case-study">
        <Helmet title={`Jason Yeung — ${frontmatter.title}`} />

        {/* CONTENT NAV */}
        <nav className="p-case-study__nav p-case-study__nav--hidden p-case-study__nav--down"
          ref={(e) => { this.nav = e }}>
          <div className="o-container o-container--wide u-text-center">
            <ScrollLink to="#"><h1 className="p-case-study__nav-title">{frontmatter.title}</h1></ScrollLink>
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
                <ProjectLink className="p-case-study__nav-down" 
                source={frontmatter.source} 
                demo={frontmatter.project_link} alt/>
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
          <ProjectLink className='u-mt-20 u-mb-60' 
          source={frontmatter.source} 
          demo={frontmatter.project_link} alt/>
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

              <video width="1600" height="800" controls autoPlay loop>
                <source src={frontmatter.project_demo} type='video/mp4'></source>
              </video>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-case-study__content u-mt-20"
          dangerouslySetInnerHTML={{__html: markdownRemark.html}}>
        </div>

        {/* RELATED */}
        { (next) ? (
        <div className="p-case-study__related">
          <Link to={next.fields.slug}>
            <div className="o-grid">
              <div className="o-grid__col u-4/12 u-6/12@sm">
                <div className="p-case-study__related-img"
                style={{backgroundImage: `url(${next.frontmatter.thumbnail})`}}>
                </div>
              </div>
              <div className="p-case-study__related-desc o-grid__col u-8/12 u-6/12@sm">
                <h6>What to read next?</h6>
                <h3 className="c-subhead u-mt-20 u-mb-8">{next.frontmatter.title}</h3>
                <div className="u-mb-16"><span className="c-label c-label--alt">{next.frontmatter.project_type}</span></div>
                <div className="c-link c-link--alt">View the details</div>
              </div>
            </div>
          </Link>
        </div>
        ) : ''}
      </Study>
    );
  }
};

export const StudyQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html,
      frontmatter {
        title,
        project_type,
        project_demo,
        project_link,
        summary,
        source
      }
    }
  }
`;


export default CaseStudy;