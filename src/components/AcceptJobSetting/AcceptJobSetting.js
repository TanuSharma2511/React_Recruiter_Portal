import React from 'react';
import AcceptJob from "../AcceptJob/AcceptJob";
import "../../App.css";
import { connect } from 'react-redux';

import { handleAccept,handleReject} from '../../actions/accept_reject';
 function AcceptJobSetting(props,context) {
    // console.log(props.rejectValues);
    // console.log(context);
    return (
        <div>
        {props.acceptValues?
        <div>
            <div className="arrangement">
            {props.acceptValues.map(acceptValue => (<AcceptJob key={acceptValue.title} acceptValue={acceptValue} count={props.count} />))}
           </div>  
        </div>:<div><h1>No Accepted Jobs yet.</h1></div>}
        </div>
    )
}
const mapStateToProps = state => ({
    acceptValues: state.acceptReject.parametersAccept,
    count: state.acceptReject.count,
  });
  export default connect(mapStateToProps, { handleAccept,handleReject })(AcceptJobSetting);

