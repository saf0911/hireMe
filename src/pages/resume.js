import React from 'react';
import Header from '../components/Header';




function Resume() {

  return (
    <div>
      <Header />

      <h1 className="name"> Scott Foster</h1>
      <h3 className="title">Programmer</h3>
      <ul>
        <li className="contact-info ul">(773) 910-88803</li>
        <li className="contact-info ul">saf0911@gmail.com</li>
      </ul>

      <h4 className="section-title"> Profile </h4>

      <h6>
        Over 8 years of staying at home raising my three kids I needed a new
        direction. My parenting position was being outsourced to the school system.
        That is when I decided that coding is my calling.
        The skills I learned are transitioning nicely.
        Problem solving, effective communication, project management,
        and effective team building are soft skills that I have developed and will
        use to help team succeed.
      </h6>

      <h4 className="section-title">
        Experience
      </h4>


      <div className="company">
        Foster Household
      </div>
      <div className="company-position">
        <em>Stay at Home Dad</em>
      </div>


      <span className="pull-right">
        Dec 2008 - Aug 2017
      </span>


      <div className="company-description">

        <ul>
          <li className="company-summary"></li>
          <li><i className="fa fa-chevron-circle-right"></i> Abigail</li>
          <li><i className="fa fa-chevron-circle-right"></i> Annaliese</li>
          <li><i className="fa fa-chevron-circle-right"></i> Cameron</li>
        </ul>

      </div>


      <hr/>


      <h4 className="section-title"> Education </h4>


      <div className="education-section">

      <div className="school"> Austin Coding Academy </div>
        <i className="fa fa-graduation-cap"></i> Certificate in Information Technology
      </div>

      <div className="pull-right">
      Jul 2017
      </div>

      <div className="education-section">

      <div className="school"> Kendall College </div>
      <i className="fa fa-graduation-cap"></i> A.A in Culinary Arts
      </div>

      <div className="pull-right">
      Dec 2008
      </div>


      <div className="education-section">

      <div className="school"> Columbia College </div>
      <i className="fa fa-graduation-cap"></i> B.A in Business Administration
      </div>

      <div className="pull-right">
      Present
      </div>





      <style jsx> {`
            /* Resume styles */

      body {
          font-size: 12px;
      }

      hr {
          margin-top: 10px;
          margin-bottom: 10px;
      }

      .name {
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 24px;
      }

      .title {
          margin-top: 0px;
          margin-bottom: 0px;
          font-weight: 200;
          font-size: 18px;
      }

      .contact-info ul {
          list-style-type: none;
      }

      .section-title {
          font-size: 14px;
      }

      .skill {
          font-weight: bold;
      }

      .skills-ul {
          list-style-type: disc;
          list-style-position: inside;
          padding-left: 0;
          margin-left: 0;
      }

      .skills-ul li {
          float: left;
          margin-right: 8px;
      }

      .company, .school {
          font-size: 14px;
      }

      .company-position {

      }

      .company-summary {
          margin-bottom: 5px;
          font-weight: bold;
      }

      .company-description {
          margin-bottom: 10px;
      }

      .company-description ul {
          padding-left: 0px;
          list-style-type: none;
      }

      .education-section {
          margin-bottom: 5px;
      }

          `}</style>

    </div>
  );
}

export default Resume;
