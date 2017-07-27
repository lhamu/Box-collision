function BoxCollision(elementId) {
  var element = document.getElementById(elementId);

  this.init = function () {
    var container = new Container();
    var boxes = [];
    container.create();

    var box = new Box(100,100,'red');
    box.create();
    boxes.push(box);
    
    /*for(var i=0;i<10;i++){
      var box1=new Box();
      box1.create();
      boxes.push(box1);
      container.append(box1.element);
    }*/

    var box2 = new Box(100,50,'green');
    box2.create();
    //box2.setPosition(500,100);
    boxes.push(box2);
	
	  var box3 = new Box(200,100, 'yellow');
    box3.create();
    //box3.setPosition(30,30);
    boxes.push(box3);
    
    var box4 = new Box(300, 200, 'yellow');
    box4.create();
    boxes.push(box4);
    
    var box5 = new Box(500, 250, 'blue');
    box4.create();
    boxes.push(box4);
    
    container.append(box.element);
    container.append(box2.element);
    container.append(box3.element); 
    container.append(box4.element); 
    
    element.appendChild(container.element);

    var animator = new Animator(boxes, container);
    animator.animate();
  }  
}

var boxCollision = new BoxCollision('box-collision');

boxCollision.init();