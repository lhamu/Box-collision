function Box(x,y,c) {
	this.x = x|| 100;
	this.y = y|| 100;
	this.height = 20;
	this.width = 20;
	this.velocity=7;
	this.color = c;
	this.directionX= 1;
	this.directionY= 1;
	this.centerX=(this.x+this.width)/2;
	this.centerY=(this.y+this.height)/2;
	this.angle=45;

	this.element;

	this.create = function () {
		this.element = document.createElement('div');
		this.setPosition(this.x, this.y);
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.position = 'absolute';
		this.element.style.background = this.color;
	}

	this.setPosition = function (x, y) {
		this.x = x;
		this.y = y;

		this.element.style.top = this.y+Math.floor(Math.random()*500);
		this.element.style.left = this.x+Math.floor(Math.random()*500);
	};

	this.move = function () {
		this.x = this.x + (Math.cos(this.angle*Math.PI/180)*(this.velocity * this.directionX));
		this.y = this.y - (Math.sin(this.angle*Math.PI/180)*(this.velocity * this.directionY));
		this.element.style.left = this.x;
		this.element.style.top = this.y;
	};
  
	
}