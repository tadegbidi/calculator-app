class CalculatorView {
	#numContainer = document.querySelectorAll('.numbers div');
	#numbers = new Set(this.#numContainer);
	#operatorsContainer = document.querySelectorAll('.operators div');
	#operators = [...this.#operatorsContainer];
	#display = document.querySelector('.display');

	clickListener() {
		// console.log('hi');

		this.#logNumbers();
	}

	#logNumbers() {
		this.#numbers.forEach(num =>
			num.addEventListener('click', function (e) {
				console.log(num.textContent);
				// log number in the display
				this.#display.textContent = num.textContent;
			})
		);
	}
}

export default new CalculatorView();
