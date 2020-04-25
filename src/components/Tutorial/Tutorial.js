import React from 'react';
import "../../App.css";

//Tutorial Page
export default function Tutorial() {
    return (
        <React.Fragment>
        <div className="tutorial_list">
            <h4 className="text-center tutorial">No Tutorial Available right now.</h4>
        </div>
        <div className="sidebar">
          <ul className="socio-icons">
              <li><i className="fa fa-search com" aria-hidden="true"></i></li>
              <li><i className="fa fa-filter com" aria-hidden="true"></i></li>
              <li><i className="fa fa-sort com" aria-hidden="true"></i></li>
              
          </ul>
        </div>
        </React.Fragment>
    )
}
