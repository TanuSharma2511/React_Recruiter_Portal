import React from 'react';
import { connect } from 'react-redux';
import { handleAccept,handleReject} from '../../actions/accept_reject';
import "../Job/Job.css";

//Rejected Component
export default function RejectJob({rejectValue,count}) {
   // console.log(rejectValue);
    return (
        <React.Fragment>
       
        <div className="container">
         <div className="box">
          <div className="content">
           <h2>{rejectValue.number}</h2>
           <h3>{rejectValue.title}</h3>
           <h4>{rejectValue.company} , {rejectValue.department}<br />
           {rejectValue.location}</h4>
            <hr />
            <div className="timing">
                <div className="item">
                <i className="fa fa-address-card" aria-hidden="true"></i><span>{rejectValue.phone}</span>
                </div>
                <div className="item">
                <i className="fa fa-suitcase" aria-hidden="true"></i><span>{rejectValue.hours}</span>
                </div>
            </div>
            <div className="item">
            <i className="fa fa-calendar-o" aria-hidden="true"></i><span>{rejectValue.time}</span>
                </div>
                <hr />
                <div className="timing">
                <div className="item">
                <i className="fa fa-user" aria-hidden="true"></i><span>{count} Candidates</span>
                </div>
                <div className="item">
                <i className="fa fa-money" aria-hidden="true"></i><span>{rejectValue.money}</span>
                </div>
            </div>   
          <div className="alert alert-danger">Rejected Job</div>
          
       </div>
   </div>
</div>

   </React.Fragment>
    )
}
