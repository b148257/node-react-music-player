import * as Status from './status.js';
import * as ActionType from './actionTypes.js';

export default (state = {status : Status.LOADING}, action) => {
	switch(action.type){
		case ActionType.FETCH_START : {
			return {status : Status.LOADING};
		}
		case ActionType.FETCH_SUCCESS : {
			return {...state, status : Status.SUCCESS, ...action.song};
		}
		case ActionType.FETCH_FAILURE : {
			return {status : Status.FAILURE};
		}
		default :
			return state;
	}
}