import React from 'react';
import RejectJob from "../RejectJob/RejectJob";
import "../../App.css";
import { connect } from 'react-redux';
import { handleAccept,handleReject} from '../../actions/accept_reject';


function RejectJobSetting(props,context) {
    // console.log(props.rejectValues);
    // console.log(context);
    return (
        <div>
        <div className="arrangement">
        {props.rejectValues.map(rejectValue => (<RejectJob key={rejectValue.title} rejectValue={rejectValue} count={props.count}/>))}
    
       </div>  
    </div>
    )
}
const mapStateToProps = state => ({
    rejectValues: state.acceptReject.parametersReject,
    count:state.acceptReject.count
  });
  export default connect(mapStateToProps, { handleAccept,handleReject })(RejectJobSetting);
