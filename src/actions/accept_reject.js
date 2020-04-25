import { ACCEPT } from './types';
import { REJECT } from './types';
import { ADD_CANDIDATE } from './types';

//Accepting Jobs
export const handleAccept = (parameterAccept) => dispatch => {
  dispatch({
    type: ACCEPT,
    payload: parameterAccept
  });
};

//Rejecting Jobs
export const handleReject = (parameterReject) => dispatch => {
    console.log(parameterReject);
    dispatch({
      type: REJECT,
      payload: parameterReject
    });
  };

  //Add Candidates
//   export const handleUp = (param) => dispatch => {
//     console.log(param.count[param.number-1]);
//     dispatch({
//       type: ADD_CANDIDATE,
//       index:param.number,
//       payload: param.count
//     });
   
//   };

 
  