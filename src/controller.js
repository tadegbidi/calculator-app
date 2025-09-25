import * as model from './model.js';
import calculatorView from './views/calculatorView.js';

// console.log('Connected!');

// const { previousInput, currentInput, currentOperation } = model.state;

let displayer;

// model.state.currentInput = 1;
// console.log(model.state.currentInput);

export const controller = function () {
	// reset state
	// model.initialState();
	//
};

const clear = function () {
	model.initialState();
	displayer = 0;
	return displayer;
};

const setNumbers = function (num) {
	model.state.settings.currentInput += num;
	displayer = `${model.state.settings.previousInput} ${model.state.settings.currentOperation} ${model.state.settings.currentInput}`;
	return displayer;
};

const setOperation = function (operation) {
	if (model.state.settings.currentInput === '') return;
	if (model.state.settings.previousInput !== '') {
		displayer = calculate();
		return displayer;
	}

	if (operation !== '=') {
		model.state.settings.previousInput = model.state.settings.currentInput;
		model.state.settings.currentInput = '';
		model.state.settings.currentOperation = operation;
		displayer = `${model.state.settings.previousInput} ${model.state.settings.currentOperation}`;
		return displayer;
	}
};

const calculate = function () {
	if (
		model.state.settings.previousInput === '' ||
		model.state.settings.currentInput === ''
	)
		return;
	let result;
	let prev = parseFloat(model.state.settings.previousInput);
	let current = parseFloat(model.state.settings.currentInput);

	switch (model.state.settings.currentOperation) {
		case '+':
			result = prev + current;
			break;
		case '-':
			result = prev - current;
			break;
		case '*':
			result = prev * current;
			break;
		case '/':
			result = prev / current;
			break;
		default:
			return;
	}

	model.state.settings.currentInput = result.toString();
	model.state.settings.currentOperation = '';
	model.state.settings.previousInput = '';
	return model.state.settings.currentInput;
};

const init = function () {
	calculatorView.render(clear, setNumbers, setOperation);
};

init();