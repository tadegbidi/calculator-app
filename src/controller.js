import * as model from './model.js';
import calculatorView from './views/calculatorView.js';

// console.log('Connected!');

export const controller = function () {
	// reset state
	model.initialState();

	//
};

const init = function () {
	calculatorView.render();
};

init();