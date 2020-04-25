import React from 'react';
import "./HelpDesk.css";
import "../../App.css";

//HelpDesk Component
export default function HelpDesk() {
    return (
        <React.Fragment>
             <div className="contact-info">
        <div className="card">
            <i className="fa fa-envelope-o rim" aria-hidden="true"></i>
            <p>email@domain.com</p>
        </div>

        <div className="card">
            <i className="fa fa-phone rim" aria-hidden="true"></i>
            <p>+0000000000</p>
        </div>

        <div className="card">
            <i className="fa fa-map-marker rim" aria-hidden="true"></i>
            <p>New York,USA</p>
        </div>
    </div>
    <div className="footer">
    <center><p>CopyRight &copy; JobList</p></center>
</div>
        </React.Fragment>
    )
}
