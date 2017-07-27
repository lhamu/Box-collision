function Container() {
	this.height = 600;
	this.width = 600;
	this.color = 'gray';

	this.element;

	this.create = function () {
		this.element = document.createElement('div');
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.position = 'relative';
		this.element.style.background = this.color;
    this.element.style.marginLeft='auto';
    this.element.style.marginRight='auto';
	}

	this.append = function (element) {
		this.element.appendChild(element);
	}	
}

