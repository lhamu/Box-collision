function Animator(boxes, container) {
	var intervalId;
	var that = this;
	this.boxes = boxes;
	this.container = container;

	this.addEvents=function(){
    element.addEventListener('click',function(){that.move(box)});
  }
  this.animate = function () {
    intervalId = setInterval(function () {
      that.boxes.forEach(function(box) {
        that.checkWallCollision(box);
        that.collisionDetection(boxes);
      });
    }, 1000 / 60);
  }
	
	this.move = function (box) {
		box.move();
	}

	this.checkWallCollision = function (box) {
		if ((box.x + box.width) >= container.width || (box.x <= 0)) {
			box.directionX *= -1;
		}
		if((box.y+box.height) >= container.height || (box.y <=0)) {
			box.directionY *= -1;
		}
	}
	 /* this.collisionDetection=function(boxes){
	 	var a=boxes.length;
	 	var i=0;
	 	var j=0;
	 	for(i=0;i<a-1;i++){
	 		for(j=1;j<a-i-1;j++){
	 			if(boxes[j].x<=(boxes[j+1].x+boxes[j+1].width)){
	 				console.log('Enter1');
	 				if((boxes[j].x+boxes[j].width)>=boxes[j+1].x){
	 					console.log('Enter2');
	 					if(boxes[j].y<=(boxes[j+1].y+boxes[j+1].height)){
	 						console.log('Enter3');
	 						if((boxes[j].y+boxes[j].height)>=boxes[j+1].y){
	 							console.log('Enter4');
	 							boxes[j].directionX*=-1;
	 							boxes[j+1].directionX*=-1;
	 						}
	 					}
	 				}	
	 			}
	 		}
	 	}
	}	 */
  this.collisionDetection=function(boxes){
    console.log('collision');
		var len=boxes.length;
		var i=0;
		var j=0;
		for(i=0;i<len;i++){
			for(j=0;j<len;j++){
				if(i!=j){
          console.log('collision entered');
					if(((boxes[i].x+boxes[i].width)>=boxes[j].x) && (boxes[i].x<=(boxes[j].x+boxes[j].width)) && (boxes[i].y<=(boxes[j].y+boxes[j].height)) && ((boxes[i].y+boxes[i].height)>=boxes[j].y)){
						console.log('collision detected');
            boxes[i].directionX*=-1;
            boxes[j].directionY*=-1;
            
            if(boxes[i].velocity>boxes[j].velocity){
              boxes[j].velocity=boxes[i].velocity;
            }
            else{
              boxes[i].velocity=boxes[j].velocity;
            }
					}
				}
			}
		}
	} 
}
