class CalculatorView {
	_parentElement = document.querySelector('main');

	start() {
		const markup = `
			<div class="container">
				<div class="head"><div class="display">0</div></div>
				<div class="body">
					<div class="numbers">
						<div>7</div>
						<div>8</div>
						<div>9</div>
						<div>4</div>
						<div>5</div>
						<div>6</div>
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>c</div>
						<div>0</div>
						<div>.</div>
					</div>
					<div class="operators">
						<div>*</div>
						<div>/</div>
						<div>-</div>
						<div>+</div>
						<div class='long'>=</div>
					</div>
				</div>
			</div>
		`;

		window.addEventListener('load', () =>
			this._parentElement.insertAdjacentHTML('beforeend', markup)
		);
	}

	_generateMarkup(x = 0) {
		const markup = `
		<div class="display">${x}</div>
		`;

		const el = document.querySelector('.head');

		el.innerHTML = '';
		el.insertAdjacentHTML('afterbegin', markup);
	}

	render(clear, setNumbers, setOperation) {
		document.addEventListener('click', e => {
			const el = e.target;

			if (el.closest('.numbers div')) {
				if (el.textContent === 'c') {
					const displayer = clear();
					this._generateMarkup(displayer);
				}

				if (el.textContent !== 'c') {
					const displayer = setNumbers(el.textContent);
					this._generateMarkup(displayer);
				}
			}

			if (el.closest('.operators div')) {
				const displayer = setOperation(el.textContent);
				this._generateMarkup(displayer);
			}
		});
	}
}

export default new CalculatorView();
