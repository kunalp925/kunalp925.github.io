var canvas = document.querySelector('canvas');

canvas.width = (window.innerWidth);
canvas.height = window.innerHeight;
var color = [ "#FF3D00" , "#64DD17", "#2979FF"];
var c = canvas.getContext('2d');

var circle = [],
    SIZE = 400;

for(var i = 0; i<SIZE; i++){

  var radius = Math.floor((Math.random()*5)),
      x = Math.floor(Math.random()*innerWidth)+radius,
      y = Math.floor(Math.random()*innerHeight)+radius,
      dx = Math.floor(((Math.random()-0.5)*2)),
      dy = Math.floor(((Math.random()-0.5)*2)),
      colors = color[Math.floor((Math.random()*5))];
      fill = color[Math.floor((Math.random()*5))];
      if(x > (innerWidth)-radius || x < radius){
        x = Math.floor(Math.random()*innerWidth)+radius;
      }
      if(y > innerHeight - radius || y < radius){
        y = Math.floor(Math.random()*innerHeight)+ radius;
      }
      while(dx == 0){
        dx = Math.floor(((Math.random()-0.5)*3));
      }
      while(dy==0){
        dy = Math.floor(((Math.random()-0.5)*3));
      }

      // console.log("Color: " + colors);
      // console.log("Starting x loc: " + x);
      // console.log("Starting y loc: " + y);
      // console.log("Starting dx: " + dx);
      // console.log("Starting dy: " + dy);
      // console.log("Radius: " + radius);


      circle.push(new Circle(x, y, dx, dy, radius, colors, fill));
}


function Circle(x, y, dx, dy, radius, color, fill){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.fill = fill

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.strokeStyle = this.color;
    // c.stroke();
    c.fillStyle = this.fill;
    c.fill();
  }

  this.update = function(){
    if(this.x > (innerWidth) - this.radius || this.x < this.radius){
      this.dx =-this.dx;
    }
    if(this.y > innerHeight - this.radius || this.y < this.radius){
      this.dy =- this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var r = 0; r < SIZE; r++){
    circle[r].update();
  }

}

animate();
