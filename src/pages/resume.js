import React from 'react';
import Header from '../components/Header';




function Resume() {

  return (
    <div className='resumePage'>
      <Header />
      <div className='resumeText'>

        <h1 className="name"> Scott Foster</h1>
        <h3 className="title">Programmer</h3>


        <h4 className="section-title"> Profile </h4>

        <h5>
          My journey in development started with one class at
          General Assembly. I quickly developed a real passion for the complexities involved. I took
          some time to educate myself before enrolling in the full stack program at
          Austin Coding Academy. After completing the program I took time to work on
          personal projects and hone my skills. I will be starting as a teachers assistant
          for the fall semester at Austin Coding Academy.
        </h5>

        <hr />

        <h4 className="section-title"> Skills </h4>

        <div className="skill">Web Development:</div>
          <ul className='skills-ul'>
            <li className='skills-ul li'>HTML</li>
            <li className='skills-ul li'>CSS</li>
            <li className='skills-ul li'>JavaScript</li>
            <li className='skills-ul li'>React</li>
            <li className='skills-ul li'>Redux</li>
            <li className='skills-ul li'>Next</li>
            <li className='skills-ul li'>Node</li>
            <li className='skills-ul li'>Mongodb</li>
            <li className='skills-ul li'>mongoose</li>
            <li className='skills-ul li'>vs code</li>
            <li className='skills-ul li'>express</li>
            <li className='skills-ul li'>atom</li>
          </ul>
            <br/> <br />


        <div className="skill">Soft Skills:</div>
          <ul className='skills-ul'>
            <li className='skills-ul li'>Problem solving</li>
            <li className='skills-ul li'>Effective communicator</li>
            <li className='skills-ul li'>Project management</li>
            <li className='skills-ul li'>Team building</li>
            <li className='skills-ul li'>Relationship building</li>

          </ul>
            <br/>

            <hr />

        <h4 className="section-title"> Experience </h4>


        <div className="company">
          Foster Household
        </div>
        <div className="company-position">
          <em>Stay at Home Dad</em>
        </div>


        <div className="company-description">

          <ul>
            <li className="company-summary"></li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Managed a team ensuring team development and project completion.
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Ensured budget guidelines were met or exceeded.
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Constant problem solving to drive change in the organization
            </li>
          </ul>

        </div>

        <br />

        <div className="company">
          UMB
        </div>
        <div className="company-position">
          <em>Personal Banker</em>
        </div>


        <div className="company-description">

          <ul>
            <li className="company-summary"></li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Built relationships for sales opportunities
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Worked under pressure to meet team goals
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Met federal and organizational guidelines for securing personal information
            </li>
          </ul>

        </div>

        <br />
        <div className="company">
          Quiktrip
        </div>
        <div className="company-position">
          <em>Manager/Trainer</em>
        </div>


        <div className="company-description">

          <ul>
            <li className="company-summary"></li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Trained part time employees ensuring they met the goals and
              requirements of the job description
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Managed several employees meeting or exceeding the daily work
              assignments and ensuring accurate accounting for the shifts.
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Maintained and ordered inventory for the stores I managed
            </li>
          </ul>

        </div>




        <hr/>


        <h4 className="section-title"> Education </h4>


        <div className="education-section">

        <div className="school"> Austin Coding Academy </div>
          <div className="pull-right">
            Jul 2017
            </div>
          <i className="fa fa-graduation-cap"></i> Certificate in Information Technology
        </div>



        <br/>

        <div className="education-section">

        <div className="school"> Kendall College </div>
          <div className="pull-right">
            Dec 2008
            </div>
            <i className="fa fa-graduation-cap"></i> A.A in Culinary Arts
        </div>


        <br />
        <div className="education-section">
          <div className="school">
            Columbia College
          </div>
          <div className="pull-right">
            June 2005
          </div>
          <i className="fa fa-graduation-cap"></i> B.A in Business Administration
        </div>

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

      .resumePage {
        margin-top: 20px;
      }

      .resumeText {
        padding: 10px;
      }

      .name {
          margin-top: 0px;
          margin-bottom: 0px;
          margin-right: 10px;
          font-size: 24px;
          text-align: right;
      }

      .title {
          margin-top: 0px;
          margin-bottom: 0px;
          margin-right: 10px;
          font-weight: 200;
          font-size: 18px;
          text-align: right;

      }

      .contact-info ul {
          list-style-type: none;
      }

      .section-title {
          font-size: 18px;
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
