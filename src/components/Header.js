import React from 'react';
import Link from 'next/link';

function Header() {
  return (
  <div className='navBar'>
    <Link className='navbar-logo' href="/index">
      <img src='/static/img/SF22.png' />
    </Link>
    <Link className='navbar-home' href="/index">
      <a>Home</a>
    </Link>
    <Link className='navbar-portfolio' href="/portfolio">
      <a>Portfolio</a>
    </Link>
    <Link className='navbar-contact' href="/contact">
      <a>Contact</a>
    </Link>
    <Link className='navbar-resume' href="/resume">
      <a>Resume</a>
    </Link>

    <style jsx>{`
      .navBar {
        list-style-type: none;
        text-decoration: none;
        margin: 0;
        padding: 0em;
        background-color: lightgrey;
        display: grid;
        grid-template-columns: 4fr  2fr 2fr 2fr 2fr ;
        grid-template-rows:  1fr  ;
        grid-template-areas:
        'logo   home portfolio contact resume';
        grid-gap: 5px 10px;
        justify-content: flex-start;
  }


      .navbar-logo {
        grid-area: logo;
        display: inline;
        margin: 10px;
        text-decoration: none;
      }

      .navbar-home {
        grid-area: home;
        display: inline;
        margin: 10px;
        text-decoration: none;

      }

      .navbar-portfolio {
        grid-area: portfolio;
        display: inline;
        margin: 10px;
        text-decoration: none;

      }

      .navbar-contact {
        grid-area: contact;
        display: inline;
        margin: 10px;
        text-decoration: none;

      }

      .navbar-resume {
        grid-area: resume;
        display: inline;
        margin: 10px;
        text-decoration: none;

      }
  `}</style>

  </div>
  );
}

export default Header;
