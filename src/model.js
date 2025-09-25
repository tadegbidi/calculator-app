export const state = {
	settings: {
		previousInput: '',
		currentOperation: '',
		currentInput: '',
	},
	operations: [],
};

export const initialState = function () {
	state.settings = {
		previousInput: '',
		currentOperation: '',
		currentInput: '',
	};
};
