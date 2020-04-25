import { ACCEPT } from '../actions/types';
import { REJECT } from '../actions/types';
import { ADD_CANDIDATE } from '../actions/types';

const initialState = {
 parametersAccept:[],
 parametersReject:[],
//  count:[1,0,0,2,0,3],
//  candid:0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACCEPT:
      return {
        ...state,
        parametersAccept: [action.payload,...state.parametersAccept]
      };
      case REJECT:
        console.log("job rejected");
      return {
        ...state,
        parametersReject:[action.payload,...state.parametersReject]
      };
      // case ADD_CANDIDATE:
      //   console.log(action.payload[action.index-1])
      //   return {
      //     ...state,
      //     candid:action.index-1,
      //     count:state.count[action.index-1]+1,
      //     candid:state.count[action.index-1]
      //   };
    default:
      return state;
  }
}
