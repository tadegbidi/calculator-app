
class LoggerView {
	_parentElement = document.querySelector('#app');
	_markup = `
            <div class="logger">
            <h2>Activities</h2>
            </div>
        `;

	constructor() {
		this._init();
	}

	_init() {
		this._parentElement.insertAdjacentHTML('beforeend', this._markup);
	}

	start(savedOperations) {
		document.querySelector('.logger').innerHTML = '';
		document.querySelector('.logger').innerHTML = `<h2>Activities</h2>`;
		if (savedOperations.length > 0) {
			savedOperations.map(newOperation => {
				this._logOperation(newOperation);
			});
		}
	}

	_logOperation(newOperation) {
		const markup = `
            <div class="log">${newOperation.x} ${newOperation.operation} ${newOperation.y} = ${newOperation.result} </div>
        `;

		const el = document.querySelector('.logger h2');
		el.insertAdjacentHTML('afterend', markup);
	}
}

export default new LoggerView();