import React from 'react';

const ProjectLink = ({ source, demo, children, className, alt }) => (
  <ul className={'o-list o-list--inline ' + (className || '')} >
    {children}
    <li className="o-list__item">
      <a className="c-link c-link--alt u-color-gray-dark" href={source} 
      target='_blank' rel='noopener noreferrer'>
        <span className='c-icon-github u-mr-8'></span>Source
      </a>
    </li>
    <li className="o-list__item">
      <a className={`c-link c-link--alt ${(alt) ? '' : 'u-color-gray-dark'}`} href={demo}
      target='_blank' rel='noopener noreferrer'>View Project</a>
    </li>
  </ul>
);

export default ProjectLink;