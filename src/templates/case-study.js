import React, { Component } from 'react'
import { Link, grpahql } from 'gatsby'

class CaseStudy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      triggered: false,
      lastScrolled: 0,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.navScroll)
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.navScroll)
  }

  navScroll = () => {
    const trigger = this.trigger.offsetTop
    const nav = this.nav

    // Show & Hide Nav
    const triggered = this.state.triggered
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (
      (!triggered && scrollTop > trigger) ||
      (triggered && scrollTop <= trigger)
    ) {
      nav.classList.toggle('p-case-study__nav--hidden')
      this.setState({ triggered: !triggered })
    }

    // Scroll Direction
    const lastScrolled = this.state.lastScrolled

    if (scrollTop > lastScrolled) nav.classList.add('p-case-study__nav--down')
    else nav.classList.remove('p-case-study__nav--down')
    this.setState({ lastScrolled: scrollTop <= 0 ? 0 : scrollTop })
  }

  render() {
    const { data } = this.props;
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;

    return (
      <div className="p-case-study">
        {/* CONTENT NAV */}
        <nav
          className="p-case-study__nav p-case-study__nav--hidden p-case-study__nav--down"
          ref={(e) => { this.nav = e }}>
          <div className="o-container o-container--wide u-text-center">
            <a href="#" className="c-link u-color-black">
              <h6>
                <span className="c-icon-arrow" /> Back to top
              </h6>
            </a>
            <ProjectInfo source={frontmatter.source} demo={frontmatter.project_link}/>
          </div>
        </nav>

        {/* TITLE */}
        <div className="o-container o-container--title u-text-center">
          <span className="c-label c-label--alt u-bgcolor-black">{frontmatter.project_type}</span>
          <h1 className="u-mt-20 u-mb-20">{frontmatter.title}</h1>
        </div> 

        <div className="o-container o-container--content u-text-center">
          <p>
            Disguise Chatroom was a concept I had while doing a{' '}
            <a href="#">DailyUI Challenge</a>. The app uses HTML/CSS, Vue.js and
            Meteor as the tech stack. The idea was that the chatroom allowed
            users to disguise themselves as other people
          </p>
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
            <img src="http://placehold.it/1600x800" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-case-study__content u-mt-20">
          {frontmatter.content}
          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ad in, velit similique itaque nihil quae beatae
              dolorum numquam expedita.
            </strong>
          </p>
          <p>
            One of the most challenging aspects my work with Engine, is slowly
            introducing improvements to the UI without breaking the conventions
            of the existing system. With the release of the Apex M750 keyboard,
            we knew our previous illumination UI needed to be revisited. The
            existing UI was meaningless to users who had no image editing
            experience. The revised UI featured labels for each tool, a default
            to the most commonly used tools, and more obvious redo/undo buttons.
            I prototyped the new UI's behavior which you can view below.
          </p>
          <p>
            Whenever we run the <code>wagTail()</code> animation is executed, it
            is pretty good
          </p>
          <figure>
            <img src="https://gastrofork.ca/wp-content/uploads/2018/08/radicle-juice-1280x860.jpg" />
            <figcaption>
              The image above depicts two tweens used to create the "curling"
              effect for Fluffy.
            </figcaption>
          </figure>

          <h1>Interesting Points of Implementation</h1>
        </div>
      </div>
    );
  }
};

const ProjectInfo = ({ source, demo, className }) => (
  <ul className={'o-list o-list--inline ' + className} >
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
      frontmatter {
        title,
        project_type,
        project_link,
        content
      }
    }
  }
`;


export default CaseStudy;