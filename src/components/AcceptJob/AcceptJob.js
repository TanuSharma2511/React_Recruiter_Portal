import React from 'react';
import Job from "../Job/Job";
import "../Job/Job.css";

export default function AcceptJob({acceptValue,count}) {
    console.log(acceptValue);
    return (
        <React.Fragment>
       
        <div className="container">
         <div className="box">
          <div className="content">
           <h2>{acceptValue.number}</h2>
           <h3>{acceptValue.title}</h3>
           <h4>{acceptValue.company} , {acceptValue.department}<br />
           {acceptValue.location}</h4>
            <hr />
            <div className="timing">
                <div className="item">
                <i className="fa fa-address-card" aria-hidden="true"></i><span>{acceptValue.phone}</span>
                </div>
                <div className="item">
                <i className="fa fa-suitcase" aria-hidden="true"></i><span>{acceptValue.hours}</span>
                </div>
            </div>
            <div className="item">
            <i className="fa fa-calendar-o" aria-hidden="true"></i><span>{acceptValue.time}</span>
                </div>
                <hr />
                <div className="timing">
                <div className="item">
                <i className="fa fa-user" aria-hidden="true"></i><span>{count} Candidates</span>
                </div>
                <div className="item">
                <i className="fa fa-money" aria-hidden="true"></i><span>{acceptValue.money}</span>
                </div>
            </div>   
          <div className="alert alert-success">Accepted Job</div>
          
       </div>
   </div>
</div>

   </React.Fragment>
    )}
