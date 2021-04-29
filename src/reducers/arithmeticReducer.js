const initialState = {
	operator: 1,
	value: 0,
};

const arithmeticReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, value: state.value + state.operator };

		case 'DECREMENT':
			return { ...state, value: state.value - state.operator };
		case 'MULTIPLY':
			return { ...state, value: state.value * state.operator };
		case 'DIVIDE':
			return { ...state, value: state.value / state.operator };
		case 'OPERATOR':
			console.log(action);
			return { ...state, operator: action.payload };
		case 'RESET':
			return { ...state, operator: 1, value: 0 };
		default:
			return state;
	}
};

export default arithmeticReducer;
