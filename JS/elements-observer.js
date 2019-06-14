class Elements_Observer {
	constructor() {
		this.ui_elements = [];
	}
	add(...ui_element) {
		this.ui_elements.push(...ui_element);
	}
	delete(ui_element) {
		this.ui_elements = this.ui_elements.filter(ui_el => ui_element !== ui_el);
	}
	addClass(...classes) {
		this.ui_elements.forEach((ui_element) => {
			ui_element.classList.add(...classes);
		});
	}
	removeClass(...classes) {
		this.ui_elements.forEach((ui_element) => {
			ui_element.classList.remove(...classes);
		});
	}
}
