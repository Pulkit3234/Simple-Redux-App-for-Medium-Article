import { combineReducers } from 'redux';
import arithmeticReducer from '../reducers/arithmeticReducer';

const rootReducer = combineReducers({
	arithmetic: arithmeticReducer,

	//You have to add more reducers here if you have different reducer functions.
	//Since we have used only one reducer function(arithmeticReducer) so we add only one here.
});

export default rootReducer;