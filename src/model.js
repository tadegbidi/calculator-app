export const state = {
	settings: {
		previousInput: '',
		currentOperation: '',
		currentInput: 0,
	},
	operations: [],
};

export const initialState = function () {
	state.settings = {
		previousInput: '',
		currentOperation: '',
		currentInput: 0,
	};
};
