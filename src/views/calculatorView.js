class CalculatorView {
	_numContainer = document.querySelectorAll('.numbers div');
	_numbers = new Set(this._numContainer);
	_operatorsContainer = document.querySelectorAll('.operators div');
	_operators = [...this._operatorsContainer];
	_display = document.querySelector('.display');
	_previousInput = '';
	_currentOperation = '';
	_currentInput = '';

	_clickingAction(el, fn) {
		el.addEventListener('click', fn);
	}

	_clear() {
		this._currentInput = '';
		this._previousInput = '';
		this._currentOperation = '';
		this._display.textContent = 0;
	}

	_setNumbers(num) {
		this._currentInput += num;
		this._display.textContent = `${this._previousInput} ${this._currentOperation} ${this._currentInput}`;
	}

	_setOperation(operation) {
		if (this._currentInput === '') return;
		if (this._previousInput !== '') {
			this._calculate();
		}

		if (operation !== '=') {
			this._previousInput = this._currentInput;
			this._currentInput = '';
			this._currentOperation = operation;
			this._display.textContent = `${this._previousInput} ${this._currentOperation}`;
		}
		if (operation === '=') {
			this._calculate();
		}
	}

	_calculate() {
		if (this._previousInput === '' || this._currentInput === '') return;
		let result;
		let prev = parseFloat(this._previousInput);
		let current = parseFloat(this._currentInput);

		switch (this._currentOperation) {
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

		this._currentInput = result.toString();
		this._currentOperation = '';
		this._previousInput = '';
		this._display.textContent = this._currentInput;
	}

	render() {
		this._numbers.forEach(el => {
			if (el.textContent === 'c')
				this._clickingAction(el, () => {
					this._clear();
				});

			if (el.textContent !== 'c')
				this._clickingAction(el, e => {
					this._setNumbers(e.target.textContent);
				});
		});

		this._operators.forEach(el =>
			this._clickingAction(el, e => {
				this._setOperation(e.target.textContent);
			})
		);
	}
}

export default new CalculatorView();
