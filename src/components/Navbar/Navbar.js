import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <React.Fragment>
 <div className="wrapper">
  
  <div className="top_navbar">
    <div className="hamburger">
       <div className="one"></div>
       <div className="two"></div>
       <div className="three"></div>
    </div>
    <div className="top_menu">
      <div className="logo">
         logo
      </div>
      <ul>
        <li><a href="#">
          <i className="fa fa-envelope"></i>
          </a></li>
        <li><a href="#">
          <i className="fa fa-users"></i>
          </a></li>
        <li><a href="#">
          <i className="fa fa-user"></i>
          </a></li>
          <li><i className="fa fa-sort-desc" aria-hidden="true"></i></li>
      </ul>
    </div>
  </div>
  
  <div className="sidebar">
      <ul>

        {/* Navigation Section */}
        <li><Link to={`/`}>
          <span className="icon"><i className="fa fa-book"></i></span>
         <span className="title"> Dashboard</span>
         </Link></li>
          <li><Link to={`/candidates`}>
          <span className="icon"><i className="fa fa-book"></i></span>
          <span className="title">Candidates</span>
          </Link></li>
          <hr />

          {/* Job Section */}
          <p>Jobs</p>
          <li><Link to={`/`}>
          <span className="icon"><i className="fa fa-book"></i></span>
          <span className="title">Live Jobs</span>
         </Link></li>
          <li><Link to={`/acceptJob`}>
          <span className="icon"><i className="fa fa-book"></i></span>
          <span className="title">Accepted Jobs</span>
         </Link></li>
          <li><Link to={`/rejectjob`}>
          <span className="icon"><i className="fa fa-book"></i></span>
         <span className="title"> Rejected Jobs</span>
         </Link></li>
          <hr />

          {/* Support Section */}
          <p>Support</p>
        <li><Link to={`/helpDesk`}>
          <span className="icon"><i className="fa fa-bell"></i></span>
         <span className="title">Help Desk</span> 
          </Link></li>
          <li><Link to={`/tutorial`}>
          <span className="icon"><i className="fa fa-book"></i></span>
         <span className="title">Tutorial</span>
          </Link></li>
          <li><Link to={`/feedback`}>
          <span className="icon"><i className="fa fa-book"></i></span>
          <span className="title">Feedback</span>
          </Link></li>
    
    </ul>
  </div>
</div>
        </React.Fragment>
    )
}
