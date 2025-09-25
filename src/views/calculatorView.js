class CalculatorView {
	_parentElement = document.querySelector('.head');
	_numContainer = document.querySelectorAll('.numbers div');
	_numbers = new Set(this._numContainer);
	_operatorsContainer = document.querySelectorAll('.operators div');
	_operators = [...this._operatorsContainer];
	_display = document.querySelector('.display');

	_generateMarkup(x = 0) {
		const markup = `
		<div class="display">${x}</div>
		`;
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	_reset() {
		this._parentElement.innerHTML = '';
	}

	_clickingAction(el, fn) {
		el.addEventListener('click', fn);
	}

	render(clear, setNumbers, setOperation) {
		this._generateMarkup();

		this._numbers.forEach(el => {
			if (el.textContent === 'c')
				this._clickingAction(el, () => {
					const displayer = clear();
					this._reset();
					this._generateMarkup(displayer);
				});

			if (el.textContent !== 'c')
				this._clickingAction(el, e => {
					const displayer = setNumbers(e.target.textContent);
					this._reset();
					this._generateMarkup(displayer);
				});
		});

		this._operators.forEach(el =>
			this._clickingAction(el, e => {
				const displayer = setOperation(e.target.textContent);
				this._reset();
				this._generateMarkup(displayer);
			})
		);
	}
}

export default new CalculatorView();
