import React from 'react'

const handleScroll = ({ e, to }) => {
  e.preventDefault()

  let top = 0;
  try { 
    const href = document.querySelector(to); 
    top = href.offsetTop;
  } catch(err) {}

  window.scrollTo({
    behavior: 'smooth',
    top
  });
}

const ScrollLink = ({ to, children, className }) => (
  <a className={className} href={to} onClick={e => handleScroll({ e, to })}>
    {children}
  </a>
)

export default ScrollLink
