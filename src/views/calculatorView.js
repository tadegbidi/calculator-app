class CalculatorView {
	_numContainer = document.querySelectorAll('.numbers div');
	_numbers = new Set(this._numContainer);
	_operatorsContainer = document.querySelectorAll('.operators div');
	_operators = [...this._operatorsContainer];
	_display = document.querySelector('.display');

	_clickingAction(el, fn) {
		el.addEventListener('click', fn);
	}

	render(clear, setNumbers, setOperation) {
		this._numbers.forEach(el => {
			if (el.textContent === 'c')
				this._clickingAction(el, () => {
					const displayer = clear();
					this._display.textContent = displayer;
				});

			if (el.textContent !== 'c')
				this._clickingAction(el, e => {
					const displayer = setNumbers(e.target.textContent);
					this._display.textContent = displayer;
				});
		});

		this._operators.forEach(el =>
			this._clickingAction(el, e => {
				const displayer = setOperation(e.target.textContent);
				this._display.textContent = displayer;
			})
		);
	}
}

export default new CalculatorView();
