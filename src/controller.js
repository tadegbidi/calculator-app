import * as model from './model.js';
import calculatorView from './views/calculatorView.js';


let displayer;

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
	}

	if (operation !== '=') {
		model.state.settings.previousInput = model.state.settings.currentInput;
		model.state.settings.currentInput = '';
		model.state.settings.currentOperation = operation;
		displayer = `${model.state.settings.previousInput} ${model.state.settings.currentOperation}`;
	}
	return displayer;
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

	const newOperation = {
		x: prev,
		y: current,
		operation: model.state.settings.currentOperation,
		result: result,
	};
	model.state.operations.push(newOperation);
	console.log(model.state.operations);

	model.state.settings.currentInput = result.toString();
	model.state.settings.currentOperation = '';
	model.state.settings.previousInput = '';
	return model.state.settings.currentInput;
};

const init = function () {
	calculatorView.render(clear, setNumbers, setOperation);
};

init();