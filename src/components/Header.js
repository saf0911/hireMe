import React from 'react';
import Link from 'next/link';

function Header() {
  return (
  <div className='navBar'>

    <Link className='navbar-logo' href="/index">
      <img src='/static/img/SF22.png' />
    </Link>
    <div className='navLinks'>
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
      <Link className='navbar-photos' href="/photos">
        <a>Photos</a>
      </Link>
    </div>



    <style jsx>{`

      @font-face {
        font-family: 'ebgaramond';
        src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
      }

      hr {
        color: black;
        padding-bottom: 5px;
      }

      a {
        text-align: center;
        align-self: center;
        text-decoration: none;
      }

      .navBar {
        list-style-type: none;
        text-decoration: none;


        background-color: white;
        display: grid;
        grid-template-columns: 4fr  2fr 2fr 2fr 2fr 2fr ;
        grid-template-rows:  1fr  ;
        grid-template-areas:
        'logo   home portfolio contact resume photos';
        grid-gap: 5px 10px;
        align-self: center;
        font-family: ebgaramond;
        border-bottom: 1px solid black;
  }


      .navbar-logo {
        grid-area: logo;
        display: inline;
        margin: 10px;
        text-decoration: none;
        align-self: center;
        padding-bottom: 10px;

      }

      .navLinks {
        grid-area: navBarLinks;
      }

      .navbar-home {
        grid-area: home;
        display: inline;
        margin: 10px;
        text-decoration: none;
        align-self: center;

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

      .navbar-photos {
        grid-area: home;
        display: inline;
        margin: 10px;
        text-decoration: none;
        align-self: center;

      }



      @media only screen and (min-width : 321px) {
        @font-face {
          font-family: 'ebgaramond';
          src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
        }

        hr {
          color: black;
          padding-bottom: 5px;
        }

        a {
          text-align: center;
          align-self: center;
          text-decoration: none;
        }

        .navBar {
          list-style-type: none;
          text-decoration: none;
          background-color: white;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas:
          'logo '
          'navBarLinks';
          align-self: center;
          font-family: ebgaramond;


        }

        .navLinks {
          grid-area: navBarLinks;
          display: grid;
          grid-template-columns: 1fr ;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
          grid-template-areas:
          'home portfolio contact resume photos';
          grid-gap: 5px 20px;

        }

        .navbar-logo {
          grid-area: logo;
          display: inline;
          text-decoration: none;
          align-self: center;
          padding: 10px;


        }

        .navbar-home {
          grid-area: home;
          display: inline;
          padding: 5px;
          text-decoration: none;


        }

        .navbar-portfolio {
          grid-area: portfolio;
          display: inline;
          padding: 5px;
          text-decoration: none;
          margin: 5px;

        }

        .navbar-contact {
          grid-area: contact;
          display: inline;
          padding: 5px;
          text-decoration: none;

        }

        .navbar-resume {
          grid-area: resume;
          display: inline;
          padding: 5px;
          text-decoration: none;

        }

        .navbar-photos {
          grid-area: photos;
          display: inline;
          padding: 5px;
          text-decoration: none;


        }
      }
  `}</style>


  </div>
  );
}

export default Header;
