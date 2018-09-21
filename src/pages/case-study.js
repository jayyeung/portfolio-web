import React, { Component } from 'react'
import Link from 'gatsby-link'

class CaseStudy extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            triggered: false,
            lastScrolled: 0
        };
    }

    componentDidMount() { document.addEventListener('scroll', this.navScroll); }
    componentWillUnmount() { document.removeEventListener('scroll', this.navScroll); }

    navScroll = () => {
        const trigger = (this.trigger).offsetTop;
        const nav = (this.nav);
        
        // Show & Hide Nav
        const triggered = this.state.triggered;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if ((!triggered && scrollTop > trigger) || (triggered && scrollTop <= trigger)) {
            nav.classList.toggle('p-case-study__nav--hidden');
            this.setState({triggered: !triggered});
        }
        
        // Scroll Direction
        const lastScrolled = this.state.lastScrolled;
        
        if (scrollTop > lastScrolled) nav.classList.add('p-case-study__nav--down');
        else nav.classList.remove('p-case-study__nav--down');
        this.setState({lastScrolled: ((scrollTop <= 0) ? 0 : scrollTop)});
    }

    render() {
        return (
            <div className='p-case-study'>
                {/* CONTENT NAV */}
                <nav className='p-case-study__nav p-case-study__nav--hidden p-case-study__nav--down' ref={(e) => {this.nav = e}}>
                    <div className='o-container o-container--wide u-text-center'>
                        <a href='#' className='c-link u-color-black'><h6>Back to top</h6></a>
                        <ul className='o-list o-list--inline'>
                            <li className='o-list__item'><a className='c-link c-link--alt' href='#'>Source</a></li>
                            <li className='o-list__item'><a className='c-link c-link--alt' href='#'>Try the Demo</a></li>
                        </ul>
                    </div>
                </nav>

                {/* TITLE */}
                <div className='o-container o-container--title u-text-center'>
                    <span className='c-label c-label--alt u-bgcolor-black'>Web Game</span>
                    <h1 className='u-mt-20 u-mb-20'>Disguise Chatroom</h1>
                </div>
            
                <div className='o-container o-container--content u-text-center'>
                    <p>Disguise Chatroom was a concept I had while doing a <a href='#'>DailyUI Challenge</a>. The app uses HTML/CSS, Vue.js and Meteor as the tech stack. The idea was that the chatroom allowed users to disguise themselves as other people </p>
                    <ul className='o-list o-list--inline u-mt-20 u-mb-60'>
                        <li className='o-list__item'><a className='c-link c-link--alt' href='#'>Source</a></li>
                        <li className='o-list__item'><a className='c-link c-link--alt' href='#'>Try the Demo</a></li>
                    </ul>
                </div>
            
                {/* DEMO */}
                <div className='o-container u-text-center' ref={(e) => {this.trigger = e}}>
                    <div className='p-case-study__demo'>
                        <div className='c-label u-mb-20'>
                            <span className='c-icon-observe u-block u-mb-8'></span>
                            Demonstration
                        </div>
                        <img src='http://placehold.it/1600x800'/>
                    </div>
                </div>
            
                {/* CONTENT */}
                <div className='p-case-study__content u-mt-20'>
                    <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad in, velit similique itaque nihil quae beatae dolorum numquam expedita.</strong></p>
                    <p>One of the most challenging aspects my work with Engine, is slowly introducing improvements to the UI without breaking the conventions of the existing system. With the release of the Apex M750 keyboard, we knew our previous illumination UI needed to be revisited. The existing UI was meaningless to users who had no image editing experience. The revised UI featured labels for each tool, a default to the most commonly used tools, and more obvious redo/undo buttons. I prototyped the new UI's behavior which you can view below.</p>
                    <p>Whenever we run the <code>wagTail()</code> animation is executed, it is pretty good</p>
                    <figure>
                        <img src='https://gastrofork.ca/wp-content/uploads/2018/08/radicle-juice-1280x860.jpg'/>
                        <figcaption>The image above describes the two tweens used to create the "curling" effect for Fluffy.</figcaption>
                    </figure>
            
                    <h1>Interesting Points of Implementation</h1>
                </div>
            </div>
        );
    }
};

export default CaseStudy
